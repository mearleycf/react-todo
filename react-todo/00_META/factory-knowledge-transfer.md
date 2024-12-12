# THE FACTORY SYSTEM

## Project Overview and Current Status

### Core Concept

The Factory is an advanced knowledge management system that combines Obsidian's structural capabilities with AI interaction potential. It transforms traditional note-taking into an intelligent workspace where AI can understand and navigate the conceptual architecture of knowledge. The system uses a factory metaphor, with different specialized areas handling different aspects of knowledge work.

### System Architecture

The Factory is organized into a numbered hierarchy that reflects the natural flow of work and information:

```text
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

3. Four workbenches implemented with enhanced features:
   - [[01_ANALYSIS_BENCH]] - Updated with correct protocol links
   - [[02_SYNTHESIS_BENCH]] - Added detailed methodologies
   - [[03_CREATION_BENCH]] - Added Review Bench integration
   - [[04_REVIEW_BENCH]] - Linked to all other benches

4. Protocol system established:
   - Centralized in `03_INITIALIZATION/02_PROTOCOLS.md`
   - Referenced consistently across workbenches
   - Pending concept mapping section addition

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

1. Protocol Integration:
   - Add concept mapping section to `03_INITIALIZATION/02_PROTOCOLS.md`
   - Ensure all protocol references use correct relative paths
   - Add detailed process documentation for key operations

2. Link Verification:
   - Complete validation of internal links across all workbenches
   - Verify section references match actual headings
   - Update any remaining incorrect protocol file references

3. Documentation Enhancement:
   - Add detailed methodology sections where referenced
   - Ensure bi-directional linking between related sections
   - Update any remaining templater codes in metadata

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

   - Links should use the filename only (e.g., `[[01_ANALYSIS_BENCH]]`)
   - Links to specific sections use hash notation (e.g., `[[01_ANALYSIS_BENCH#Standard Operations]]`)
   - Links to timestamps in logs use full heading (e.g., `[[decisions_and_changes_log#2024-12-11_14-03]]`)
   - Internal links relative to the current file should use `[[#section_name]]`

2. Document Structure Standards

   - Files follow markdownlint standards
   - Headers use numerical prefixes (e.g., `# (1) Section Name`)
   - Proper nesting with no skipped levels
   - Single blank line between sections

3. Template Variables

   - Dates use format: `2024-12-11_14-06`
   - YAML variables use format: `{{VARIABLE}}`
   - No spaces in template variables

4. Organization

   - Folder and file numbering ensures proper ordering
   - Canvas files provide visual organization
   - Each workbench has dedicated responsibilities
   - Version control at document level

5. AI Integration
   - Consistent formatting improves AI parsing
   - Clear section boundaries aid in context understanding
   - Standardized structures enhance AI navigation

### File Format Standards

#### Document Types and Their Formats

1. **Human-Readable Documents (Markdown)**

   - All documentation, guides, and notes
   - Workbench files
   - Analysis reports
   - Concept documents
   - Any file that needs to be read or edited by humans

2. **System Processing Documents (JSON/YAML)**

   - Status updates (JSON)
   - Metrics data (JSON)
   - Configuration files (YAML)
   - Any data that needs to be parsed and processed by the factory system

#### Format Selection Guidelines

- Use Markdown (.md) when:

  - The content needs to be read or edited by humans
  - The file contains documentation or explanatory text
  - The file needs to be rendered nicely in Obsidian

- Use JSON when:

  - The data needs to be processed by the factory system
  - The content is highly structured
  - The data needs to be validated against a schema
  - The file is primarily for system/AI consumption

### Markdown Formatting Standards

The Factory system follows strict markdown formatting rules based on markdownlint standards:

1. Document Structure

   - Files should end with a single empty line
   - No multiple consecutive blank lines
   - No trailing spaces at end of lines
   - Use ATX-style headers (# H1, ## H2, etc.)
   - No emojis in headers or section titles
   - Headers must use numerical prefixes for clear hierarchy:

     - Top-level sections use single numbers: `# (1) Section Name`
     - Subsections increment per level: `## (1.1) Subsection`
     - Further nesting continues pattern: `### (1.1.1) Detail`
     - Within date blocks, add section number: `##### (1.1.1.1) Context`
     - Numbers should be wrapped in parentheses
     - A space must follow the closing parenthesis

2. Headers

   - Must have a space after the # symbols
   - Should be surrounded by blank lines
   - Should be properly nested (no skipping levels)
   - First line should be a top-level header
   - Must be plain text without emojis or special characters

3. Lists

   - Must be preceded by a blank line
   - Must have consistent indentation
   - Nested lists should be indented by 2 spaces
   - Must have a space after the list marker (-, \*, or number)

4. Code Blocks

   - Must be surrounded by blank lines
   - Must specify a language for fenced code blocks
   - Must use triple backticks (```) for fencing
   - Indented code blocks should use 2 spaces

5. Links and References

   - No bare URLs - use proper markdown link syntax
   - Internal links should use the Obsidian double-bracket format [[link]]
   - External links should use [text](url) format

6. Emphasis and Styling

   - Use \* or for emphasis
   - Leave spaces around emphasis markers when used in middle of text
   - No multiple consecutive emphasis markers

7. Tables

   - Must have header row
   - Must be preceded by a blank line
   - Must have proper column alignment markers
   - Must have consistent column widths

### MCP-Obsidian Usage

- `list_files_in_vault`: Lists all files and directories in the root directory of your Obsidian vault
- `list_files_in_dir`: Lists all files and directories that exist in a specific Obsidian directory (note: empty directories are not returned)
- `get_file_contents`: Returns the complete content of any specified file in the vault
- `simple_search`: Performs a basic text search across all files in the vault with customizable context length around matches
- `patch_content`: Inserts or modifies content in existing notes relative to headings, block references, or frontmatter fields with append/prepend/replace operations
- `append_content`: Adds content to new or existing files in the vault
- `complex_search`: Executes advanced searches using JsonLogic queries, supporting pattern matching with 'glob' and 'regexp' operators ^c9v5kg

### Embedded Images

![[cv-prompting-evolved-obsidian-as-a-human-to-ai-agent-interface-v0.webp]]

![[cv2-prompting-evolved-obsidian-as-a-human-to-ai-agent-interface-v0-vgmdt2kuk35e1.webp]]

![[cv3-prompting-evolved-obsidian-as-a-human-to-ai-agent-interface-v0-rk3awr9zk35e1.webp]]

![[cv4-prompting-evolved-obsidian-as-a-human-to-ai-agent-interface-v0-qw08dm31l35e1.webp]]

![[cv5-prompting-evolved-obsidian-as-a-human-to-ai-agent-interface-v0-afqo9disk35e1.webp]]

![[cv6-prompting-evolved-obsidian-as-a-human-to-ai-agent-interface-v0-ghzhs7tzk35e1.webp]]

## Development Standards and Guidelines

### AI Interaction Guidelines

#### Role and Responsibilities

The AI assistant is an expert programming assistant focusing on:

- TypeScript, React, Node.js, AstroJS 5.x, AstroDB
- Shadcn UI and Tailwind CSS implementations
- Latest features and best practices
- Clear, readable, and maintainable code

Key characteristics:

- Follows requirements carefully and precisely
- Thinks step-by-step with detailed pseudocode
- Writes correct, up-to-date, secure code
- Prioritizes readability over performance
- Implements complete functionality
- Includes all required imports
- Maintains concise communication
- Acknowledges uncertainty rather than guessing

#### Mentorship Approach

The AI acts as a mentor/tutor for development best practices:

- Guides through implementation rather than providing direct code
- Uses example patterns (e.g., shopping cart, contact form) for demonstrations
- Focuses on teaching methods and tools over solutions
- Explains concepts using relatable examples

#### Content Management Rules

- Never remove unedited content from files
- Avoid summarizing unchanged content as "[rest of file remains the same]"
- Seek confirmation before any content deletion
- Focus on updates and additions rather than deletions

### Code Standards

#### Naming Conventions

1. File and Component Names

   - Components: PascalCase (`UserProfile.tsx`, `UserProfile.astro`)
   - Regular files: kebab-case (`api-utils.ts`)
   - Test files: `*.test.ts` or `*.spec.ts`

2. Code Elements

   - Functions/Variables: camelCase (`getUserData()`)
   - Constants: UPPER_SNAKE_CASE (`MAX_RETRY_ATTEMPTS`)
   - Types/Interfaces/Classes: PascalCase (`SeederState<T>`)
   - Use descriptive names indicating purpose

#### TypeScript Guidelines

1. Type Safety

   - Use explicit return types
   - Prefer types over interfaces
   - Utilize generics for reusable components
   - Avoid `any` - use `unknown` when uncertain
   - Implement type guards for runtime checking

2. Syntax Standards

   ```typescript
   // Good example
   const UserCard = ({ name, age }: UserProps) => {
     const formattedName = `User: ${name}`;
     return (
       <div className="p-4">
         {formattedName}
       </div>
     );
   };
   ```

#### Formatting Rules

1. Basic Formatting

   - 2 spaces for indentation
   - 80 character line length limit
   - Use template literals for strings
   - Include trailing commas
   - Same-line opening braces
   - Arrow functions for callbacks

2. Component Structure

   - Use destructuring for props
   - Implement proper TypeScript path aliases
   - Use environment variables for config

#### UI Development

1. Tailwind CSS Usage

   - Follow mobile-first approach
   - Use consistent spacing scale
   - Create reusable components
   - Follow color palette
   - Implement responsive design
   - Use CSS variables for theming

2. Performance Optimization

   - Implement code splitting
   - Optimize images
   - Use proper caching
   - Implement lazy loading
   - Minimize bundle size
   - Use proper key props
   - Optimize database queries

### Testing Standards

#### Unit Testing with Vitest

```typescript
import { describe, it, expect } from 'vitest'

describe('CourseManager', () => {
  it('should update course status', async () => {
    // Test implementation
  })

  it('should validate course data before update', async () => {
    // Test implementation
  })
})
```

Key principles:

- Group tests by feature/component
- Use descriptive test names
- Mock external dependencies
- Follow naming conventions

### Component Development

#### Generation Process

1. Initial Planning

   - Consider purpose and functionality
   - Review existing components
   - Think step-by-step
   - Document reasoning

2. Specification Requirements

   - Component name and purpose
   - Props and types
   - Styling requirements
   - Tailwind implementation
   - TypeScript usage
   - Pattern compliance
   - State management needs

#### Example Template

```markdown
Create component {ComponentName} using TypeScript and Tailwind CSS.
Functionality: {description}
Props: {list with types}
Styling: {requirements}
Provide full component code.
```

### Version Control

#### Commit Message Format

Follow conventional commits:

- Format: `<type>[optional scope]: <description>`
- Length: <60 characters
- Types: feat, fix, docs, style, refactor, test, chore

Example:

````fish
git commit -m 'feat: add responsive navbar with TailwindCSS'```
````
