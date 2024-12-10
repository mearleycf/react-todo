# THE FACTORY SYSTEM
## Project Overview and Current Status

### Core Concept
The Factory is an advanced knowledge management system that combines Obsidian's structural capabilities with AI interaction potential. It transforms traditional note-taking into an intelligent workspace where AI can understand and navigate the conceptual architecture of knowledge. The system uses a factory metaphor, with different specialized areas handling different aspects of knowledge work.

### System Architecture
The Factory is organized into a numbered hierarchy that reflects the natural flow of work and information:

```
/THE_FACTORY/
    /01_FOREMAN_OFFICE/       # Command and control center
        [[01_DESK]].md            # Primary workspace
        [[02_WHITEBOARD]].md      # Planning and visualization
        [[03_TOOLBOX]].md         # Resources and utilities
    
    /02_WORKBENCHES/          # Specialized processing stations
        [[00_TEMPLATE]].md        # Base template for workbenches
        [[01_ANALYSIS_BENCH]].md  # Breaking down and understanding
        [[02_SYNTHESIS_BENCH]].md # Combining and interpreting
        [[03_CREATION_BENCH]].md  # Generating new content
        [[04_REVIEW_BENCH]].md    # Evaluation and refinement
    
    /03_INITIALIZATION/       # System startup and protocols
        [[01_BOOT]].md           # Initial system configuration
        [[02_PROTOCOLS]].md      # Operating rules and procedures
        [[03_AI_ROUTING]].md     # Information flow management
    
    /04_FACTORY_FLOOR/       # Active work management
        [[01_ACTIVE_PROJECTS]].md
        [[02_CURRENT_BUILDS]].md
        [[03_STATUS_BOARD]].md
    
    /05_AUTOMATIONS/         # Process automation
        [[01_SCRIPTS]].md
        [[02_WORKFLOWS]].md
        [[03_INTEGRATIONS]].md
    
    [[FACTORY_LAYOUT.canvas|FACTORY_LAYOUT]]    # Master system visualization
```

### Current Implementation Status
1. Basic folder structure established with numbered ordering
2. Initial workbench templates created with:
   - System initialization parameters
   - Version control tracking
   - Modification history
   - Internal linking structure
3. Four workbenches fully implemented:
	1.    - [[01_ANALYSIS_BENCH]]
	2. [[02_SYNTHESIS_BENCH]]
	3. [[03_CREATION_BENCH]]
	4. [[04_REVIEW_BENCH]]
4. Foreman's office started, including:
	1. [[01_DESK]]




### Core System Features
1. Version Control System
   - Creation and modification tracking
   - Standardized change logging
   - Clear update history

2. Internal Linking
   - Comprehensive cross-referencing
   - Path-aware link structure
   - Hierarchical organization

3. Workbench Architecture
   - Specialized processing areas
   - Clear input/output channels
   - Integration protocols

### Key Design Principles
1. Every component has a specific role in the knowledge processing pipeline
2. Clear paths for information flow between components
3. Comprehensive version tracking and change management
4. Rich internal linking for navigation and context
5. Systematic naming and organization

### Immediate Next Steps
1. Implementation of core operational files in 01_FOREMAN_OFFICE:
   - Develop [[02_WHITEBOARD]] for planning
   - Establish [[03_TOOLBOX]] for resources

### Project Metaphor
The Factory metaphor is central to understanding this system. Each component represents a part of an industrial operation:
- Workbenches are like specialized manufacturing stations
- The Foreman's Office provides oversight and direction
- The Factory Floor is where work gets done
- Initialization is like the startup sequence for machinery
- Automations are like the factory's automated systems

### System Goals
1. Create an environment where AI can understand and navigate knowledge context
2. Enable rich, multi-dimensional prompting through structural awareness
3. Transform static notes into an active, intelligent workspace
4. Maintain clear organization while allowing organic growth
5. Support both human and AI interaction patterns

### Technical Notes
1. Obsidian's internal linking uses `[[file_path]]` syntax
	1. Specifically, the link should JUST be to the filename--like `[[02_TOOLBOX]]` for example. 
	2. Do NOT use a relative-path based format--like `[[/THE_FACTORY/01_FOREMAN_OFFICE/01_DESK]]` because it will link to the incorrect location. 
2. Links automatically update when files are renamed
3. Template date variables use Templater syntax: `<% tp.date.now("YYYY-MM-DD_HH-mm") %>`
	1. File Creation Dates: should be `<% tp.file.creation_date("YYYY-MM-DD_HH-mm") %>`
	2. Modified Dates: Modification dates should be: `<% tp.date.now("YYYY-MM-DD_HH-mm") %>`
4. Canvas files provide visual organization
5. Folder and file numbering ensures proper ordering and work flow

### Current Challenge Points
1. Need to ensure consistent internal linking across all components
2. Must maintain clear boundaries between workbench responsibilities
3. Need to balance structure with flexibility
4. Must consider how AI will interpret and navigate the system

This document should provide sufficient context for continuing development of The Factory system. The most critical next steps focus on implementing the core operational files in the Foreman's Office, which will provide the command and control infrastructure for the entire system.

### MCP-Obsidian Usage
* `list_files_in_vault`: Lists all files and directories in the root directory of your Obsidian vault
* `list_files_in_dir`: Lists all files and directories that exist in a specific Obsidian directory (note: empty directories are not returned)
* `get_file_contents`: Returns the complete content of any specified file in the vault
* `simple_search`: Performs a basic text search across all files in the vault with customizable context length around matches
* `patch_content`: Inserts or modifies content in existing notes relative to headings, block references, or frontmatter fields with append/prepend/replace operations
* `append_content`: Adds content to new or existing files in the vault
* `complex_search`: Executes advanced searches using JsonLogic queries, supporting pattern matching with 'glob' and 'regexp' operators ^c9v5kg

### Embedded Images
![[cv-prompting-evolved-obsidian-as-a-human-to-ai-agent-interface-v0.webp]]

![[cv2-prompting-evolved-obsidian-as-a-human-to-ai-agent-interface-v0-vgmdt2kuk35e1.webp]]

![[cv3-prompting-evolved-obsidian-as-a-human-to-ai-agent-interface-v0-rk3awr9zk35e1.webp]]

![[cv4-prompting-evolved-obsidian-as-a-human-to-ai-agent-interface-v0-qw08dm31l35e1.webp]]

![[cv5-prompting-evolved-obsidian-as-a-human-to-ai-agent-interface-v0-afqo9disk35e1.webp]]

![[cv6-prompting-evolved-obsidian-as-a-human-to-ai-agent-interface-v0-ghzhs7tzk35e1.webp]]

### MCP-Obsidian Usage
* `list_files_in_vault`: Lists all files and directories in the root directory of your Obsidian vault
* `list_files_in_dir`: Lists all files and directories that exist in a specific Obsidian directory (note: empty directories are not returned)
* `get_file_contents`: Returns the complete content of any specified file in the vault
* `simple_search`: Performs a basic text search across all files in the vault with customizable context length around matches
* `patch_content`: Inserts or modifies content in existing notes relative to headings, block references, or frontmatter fields with append/prepend/replace operations
* `append_content`: Adds content to new or existing files in the vault
* `complex_search`: Executes advanced searches using JsonLogic queries, supporting pattern matching with 'glob' and 'regexp' operators