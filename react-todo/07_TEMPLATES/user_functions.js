// ts-worksheet-with-variables

/**
 * User functions for Templater in the Factory system
 */
import { intervalToDuration } from 'date-fns';

/**
 * Generates a unique ID based on the time difference between a fixed date (1974-03-18) and now
 * @param {string} prefix - The prefix to use for the ID (e.g., 'CONCEPT', 'TASK')
 * @returns {Promise<string>} A unique ID in the format PREFIX_YY-MM-DD_HH-MM-SS
 * @example
 * // returns "CONCEPT_50-8-22_11-28-41"
 * await generateId('concept')
 */
export const generateId = async (prefix) => {
    const date = intervalToDuration({ start: new Date(1974, 2, 18, 12, 31, 19), end: new Date() })
    const id = `${prefix.toUpperCase()}_${date.years}-${date.months}-${date.days}_${date.hours}-${date.minutes}-${date.seconds}`
    console.log(`Generated ID: ${id}`)
    return id
}

/**
 * Gets the username from the system environment
 * @returns {Promise<string>} The current username
 * @throws {Error} If FACTORY_USER is not set in .env
 */
export const getUsername = async () => {
    // Read from .env file in the root directory
    const username = process.env.FACTORY_USER;
    if (!username) {
        throw new Error('FACTORY_USER not set in .env file');
    }
    return username;
};

/**
 * Gets the current status from the factory's own tracking system
 * @returns {Promise<string>} Current status from the workbench's frontmatter
 */
export const getStatus = async () => {
    const file = app.workspace.getActiveFile();
    if (!file) return 'unknown';

    const cache = app.metadataCache.getFileCache(file);
    return cache?.frontmatter?.status || 'unknown';
};

/**
 * Gets the current component based on file location in the vault
 * @returns {Promise<string>} The current component name
 */
export const getComponent = async () => {
    const currentPath = app.workspace.getActiveFile()?.path;
    if (!currentPath) return 'unknown';
    
    // Match patterns like 01_ANALYSIS_BENCH or 02_SYNTHESIS_BENCH
    const match = currentPath.match(/\d+_([A-Z_]+)/);
    return match ? match[1] : 'unknown';
};

/**
 * Counts total components in the factory
 * @returns {Promise<number>} Number of components
 */
const countComponents = async () => {
    const files = app.vault.getFiles();
    // Count files in numbered directories (01_, 02_, etc.)
    return files.filter(file => /\/\d+_/.test(file.path)).length;
};

/**
 * Gets the last modified timestamp of the factory
 * @returns {Promise<string>} Formatted timestamp
 */
const getLastModified = async () => {
    const files = app.vault.getFiles();
    const timestamps = files.map(file => file.stat.mtime);
    const latest = Math.max(...timestamps);
    return new Date(latest).toISOString();
};

/**
 * Gets count of active workbenches
 * @returns {Promise<number>} Number of active workbenches
 */
const getActiveWorkbenches = async () => {
    const files = app.vault.getFiles();
    let count = 0;
    
    for (const file of files) {
        if (file.path.includes('WORKBENCHES')) {
            const cache = app.metadataCache.getFileCache(file);
            if (cache?.frontmatter?.status === 'active') {
                count++;
            }
        }
    }
    
    return count;
};

/**
 * Analyzes links between files in the vault
 * @returns {Promise<Object>} Link analysis metrics
 */
const getLinkMetrics = async () => {
    const files = app.vault.getFiles();
    let metrics = {
        total_links: 0,
        orphaned_files: [],
        most_linked: {
            file: null,
            count: 0
        },
        backlinks_by_file: {}
    };
    
    // Build backlinks map
    for (const file of files) {
        const cache = app.metadataCache.getFileCache(file);
        const links = cache?.links || [];
        const backlinks = cache?.backlinks || new Map();
        
        metrics.total_links += links.length;
        metrics.backlinks_by_file[file.path] = backlinks.size;
        
        // Track most linked file
        if (backlinks.size > metrics.most_linked.count) {
            metrics.most_linked = {
                file: file.path,
                count: backlinks.size
            };
        }
        
        // Check for orphaned files (no backlinks)
        if (backlinks.size === 0 && links.length === 0) {
            metrics.orphaned_files.push(file.path);
        }
    }
    
    return metrics;
};

/**
 * Analyzes tasks in markdown files
 * @returns {Promise<Object>} Task metrics
 */
const getTaskMetrics = async () => {
    const files = app.vault.getFiles();
    let metrics = {
        total_tasks: 0,
        completed_tasks: 0,
        tasks_by_component: {},
        tasks_by_status: {
            todo: 0,
            in_progress: 0,
            completed: 0
        }
    };
    
    for (const file of files) {
        const content = await app.vault.read(file);
        const cache = app.metadataCache.getFileCache(file);
        
        // Get component name from file path
        const componentMatch = file.path.match(/\d+_([A-Z_]+)/);
        const component = componentMatch ? componentMatch[1] : 'other';
        
        if (!metrics.tasks_by_component[component]) {
            metrics.tasks_by_component[component] = {
                total: 0,
                completed: 0
            };
        }
        
        // Parse tasks using regex
        const todoTasks = (content.match(/- \[ \]/g) || []).length;
        const completedTasks = (content.match(/- \[x\]/g) || []).length;
        const inProgressTasks = (content.match(/- \[-\]/g) || []).length;
        
        metrics.total_tasks += todoTasks + completedTasks + inProgressTasks;
        metrics.completed_tasks += completedTasks;
        metrics.tasks_by_status.todo += todoTasks;
        metrics.tasks_by_status.completed += completedTasks;
        metrics.tasks_by_status.in_progress += inProgressTasks;
        
        metrics.tasks_by_component[component].total += todoTasks + completedTasks + inProgressTasks;
        metrics.tasks_by_component[component].completed += completedTasks;
    }
    
    return metrics;
};

/**
 * Gets metrics from the factory's markdown files
 * @returns {Promise<string>} JSON string of current metrics
 */
export const getMetrics = async () => {
    const metrics = {
        vault_metrics: {
            total_components: await countComponents(),
            last_modified: await getLastModified(),
            active_workbenches: await getActiveWorkbenches()
        },
        current_component: {
            name: await getComponent(),
            status: await getStatus()
        },
        link_analysis: await getLinkMetrics(),
        task_metrics: await getTaskMetrics()
    };
    
    return JSON.stringify(metrics, null, 2);
};
