# THE COMPUTER SYSTEM

## (1) Project Overview and Current Status

### (1.1) Core Concept

The Human-AI Knowledge Transfer System is a sophisticated computing environment that serves as an intermediary between human users and AI agents. It provides a structured, familiar computing interface that both parties can understand and navigate, facilitating natural interaction and collaboration in software development tasks.

### (1.2) System Overview

This knowledge management system transforms traditional documentation and development workflows into an intelligent computing environment where both human users and AI agents can work together effectively through a familiar computer system interface.

### (1.3) Implementation Progress

#### (1.3.1) Previous Implementation (Factory Metaphor)

- Established basic knowledge processing workflows
- Created specialized processing areas
- Implemented version control and documentation standards
- Developed initial AI interaction patterns

#### (1.3.2) Current Implementation Status

1. Core Architecture
   - Created initial directory structure following computer system metaphor
   - Planned core system components (but not yet implemented)
   - Initial draft of configuration structure (needs implementation)

2. User Interface Layer
   - Initial documentation of intended interaction patterns
   - Established markdown formatting standards
   - Created basic folder structure for user guides
   - Planning stage for feedback mechanisms

3. AI Integration Layer
   - Initial design concepts for AI interaction
   - Basic communication framework planned
   - Processing pipeline concepts drafted
   - Context management in planning phase

### (1.4) Core System Features

#### (1.4.1) User Interface Components

- Interactive command processing
- Documentation management
- Project organization
- Error reporting and feedback

#### (1.4.2) AI Processing Components

- Context awareness
- Knowledge graph navigation
- Multi-step task processing
- Resource management

#### (1.4.3) System Management

- Process scheduling
- Memory management
- Storage optimization
- Performance monitoring

### (1.5) Key Design Principles

1. Every component has a specific role in the knowledge processing pipeline
2. Clear paths for information flow between components
3. Comprehensive version tracking and change management
4. Rich internal linking for navigation and context
5. Systematic naming and organization

### (1.6) Immediate Next Steps

1. Concept Mapping Integration:

   - Implement concept mapping across all workbenches
   - Enhance AI navigation capabilities with advanced path traversal
   - Develop and integrate knowledge graph tools
   - Test bi-directional linking effectiveness
   - Implement node types for concepts, relationships, and operations

2. Protocol System Enhancement:

   - Add detailed process documentation for key operations
   - Ensure all protocol references use correct relative paths
   - Update protocol documentation with AI interaction patterns
   - Implement concept mapping protocols across workbenches

3. System Integration and Verification:

   - Complete validation of internal links across all workbenches
   - Verify section references match actual headings
   - Test complete knowledge processing pipeline
   - Ensure bi-directional relationships are properly maintained
   - Verify concept mapping functionality between components

4. Workbench Standardization:

   - Apply latest documentation standards consistently
   - Update header numbering system across workbenches
   - Enhance context preservation mechanisms
   - Add detailed AI operation documentation for each type

5. User Manual and Documentation:
   - Create `00_MANUAL` directory for human-focused documentation
   - Develop comprehensive user guide with:
     - System overview and architecture diagrams
     - Detailed folder and file explanations
     - Processing pipeline visualization
     - Integration and automation workflows
     - Best practices and usage examples
   - Include interactive elements:
     - Mermaid/D2 diagrams for visual understanding
     - Cross-references to actual system components
     - Step-by-step tutorials with real examples
   - Consider selective enhancement of factory files:
     - Add contextual documentation where needed
     - Include explanatory comments for complex sections
     - Maintain balance between clarity and conciseness

### (1.7) The User <--> Operating System <--> Computer Hardware Metaphor

The Computer metaphor is central to understanding this system. Each component represents a part of a modern computer operation:

- The User is the human operator--the person defining the project, writing the requirements, and interacting with the parts of the system, from ONE side
- The Artificial Intelligence (AI) is the other operator--it is the parts of the system that are interacting with the user, performing background tasks, generating monitoring data, writing to storage, etc.--ON THE OTHER side. It is, in other words, the operating system
- The System (01_SYSTEM) is the core that manages all background processes; like an operating system, this is the kernel code that runs in the background; the services, configuration, and other processes that run invisible to the user, but are necessary for the system to function
- Memory (02_MEMORY) provides workspace for active processing; in other words, it is the RAM of the computer, where the active applications and data are stored while in use
- Applications (03_APPLICATIONS) handle specific tasks; they are the interfaces between the user and the operating system, that the user can use to perform tasks; each application, just like a computer program, has its own set of instructions, data, and functionality
- Storage (04_STORAGE) maintains persistent data; in other words, it is the hard drive of the computer, where the data is stored permanently, even after the computer is turned off
- Activity Monitor (05_MONITOR) oversees system health; it monitors and reports on system performance, resource usage, and system errors, and provides real-time information to the user

### (1.8) System Goals

1. Define an interactive knowledge processing environment that allows a user to interact with agentic AI assistants in a natural, human-like way, with the end goal of aiding in the development of software
2. The system should be user-friendly and easy to use, with clear instructions and examples
3. The system should be able to handle complex tasks and problems, with the ability to break them down into smaller, manageable steps
4. The system should be able to handle different types of AI assistants, with the ability to switch between them as needed
5. The system should be able to handle different types of knowledge sources, with the ability to switch between them as needed
6. The system should be able to self-document, writing its own manuals and guides, writing its own version control, updating logs, etc.
7. The system needs to take in user input, either through the AI chat interface or through information documented inside the system documentation, and process it through the correct internal processes and applications, in order to produce the appropriate outputs--code, documentation, logging, error handling, etc.
8. The system should be able to perform complex tasks that may require multiple steps, and multiple passes of processing through the system, in order to produce the desired results
9. The system should be able to handle errors and exceptions, with the ability to log them, and provide clear instructions for fixing them
10. The system should be able to communicate with the user regarding its progress and results, with the ability to provide clear instructions for the user to follow
11. The system should be able to obtain information from 3rd party sources, such as the internet, databases, APIs, etc., with the ability to handle errors and exceptions, and provide clear instructions for fixing them
12. The system should be smart enough to interpret user instruction and ask any necessary questions before it starts processing

### (1.9) Technical Notes

1. Internal System References
   - `[[system-config.json]]` in `01_SYSTEM/config`
   - `[[process-logs.md]]` in `04_STORAGE/logs`
   - `[[app-data.json]]` in `03_APPLICATIONS/user`

2. Documentation Structure
   - User guides in `00_MANUAL`
   - System logs in `04_STORAGE/logs`
   - Process documentation in `01_SYSTEM/processes`

3. Obsidian's internal linking uses `[[file_path]]` syntax
   - Links should use the filename only (e.g., `[[system-config.json]]`)
   - Links to specific sections use hash notation (e.g., `[[process-logs.md#Error Handling]]`)
   - Links to timestamps in logs use full heading (e.g., `[[decisions_and_changes_log#2024-12-13_19-47]]`)
   - Internal links relative to the current file should use `[[#section_name]]`

4. Document Structure Standards

   - Files follow markdownlint standards
   - Headers use numerical prefixes (e.g., `# (1) Section Name`)
   - Proper nesting with no skipped levels
   - Single blank line between sections

5. Template Variables

   - Dates use format: `2024-12-11_14-06`
   - YAML variables use format: `{{VARIABLE}}`
   - No spaces in template variables

6. Organization

   - Folder and file numbering ensures proper ordering
   - Canvas files provide visual organization
   - Each workbench has dedicated responsibilities
   - Version control at document level

7. AI Integration
   - Consistent formatting improves AI parsing
   - Clear section boundaries aid in context understanding
   - Standardized structures enhance AI navigation

### (1.10) File Format Standards

#### (1.10.1) Document Types and Their Formats

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

#### (1.10.2) Format Selection Guidelines

- Use Markdown (.md) when:

  - The content needs to be read or edited by humans
  - The file contains documentation or explanatory text
  - The file needs to be rendered nicely in Obsidian

- Use JSON when:

  - The data needs to be processed by the factory system
  - The content is highly structured
  - The data needs to be validated against a schema
  - The file is primarily for system/AI consumption

### (1.11) MCP-Obsidian Usage

- `list_files_in_vault`: Lists all files and directories in the root directory of your Obsidian vault
- `list_files_in_dir`: Lists all files and directories that exist in a specific Obsidian directory (note: empty directories are not returned)
- `get_file_contents`: Returns the complete content of any specified file in the vault
- `simple_search`: Performs a basic text search across all files in the vault with customizable context length around matches
- `patch_content`: Inserts or modifies content in existing notes relative to headings, block references, or frontmatter fields with append/prepend/replace operations
- `append_content`: Adds content to new or existing files in the vault
- `complex_search`: Executes advanced searches using JsonLogic queries, supporting pattern matching with 'glob' and 'regexp' operators ^c9v5kg

### (1.12) Markdown Standards

1. Links and References
   - Internal file links must use Obsidian double-bracket format `[[filename]]`
   - Non-existent files must be wrapped in backticks when using double-brackets: `` `[[non-existent-file.md]]` ``
   - Directory paths should be wrapped in inline code blocks: `` `directory/path` ``
   - Never create internal links to directories, only to files
   - External links must use markdown format [text](url)

2. Document Structure
   - Files must end with a single empty line
   - No consecutive blank lines
   - No trailing spaces at line ends
   - Headers must use ATX style (# H1, ## H2, etc.)
   - Headers must have space after #
   - Headers must be surrounded by blank lines
   - Headers must use numerical prefixes in parentheses
   - No emojis in headers or section titles

3. Lists and Code
   - Lists must be preceded by blank line
   - Lists must have consistent indentation (2 spaces)
   - Must have space after list marker (-, *, or number)
   - Code blocks must specify language
   - Code blocks must use triple backticks
   - Code blocks must be surrounded by blank lines

### (1.13) Embedded Images from previous Factory System Metaphor

![[cv-prompting-evolved-obsidian-as-a-human-to-ai-agent-interface-v0.webp]]

![[cv2-prompting-evolved-obsidian-as-a-human-to-ai-agent-interface-v0-vgmdt2kuk35e1.webp]]

![[cv3-prompting-evolved-obsidian-as-a-human-to-ai-agent-interface-v0-rk3awr9zk35e1.webp]]

![[cv4-prompting-evolved-obsidian-as-a-human-to-ai-agent-interface-v0-qw08dm31l35e1.webp]]

![[cv5-prompting-evolved-obsidian-as-a-human-to-ai-agent-interface-v0-afqo9disk35e1.webp]]

![[cv6-prompting-evolved-obsidian-as-a-human-to-ai-agent-interface-v0-ghzhs7tzk35e1.webp]]

## (2) Development Standards and Guidelines

### (2.1) AI Interaction Guidelines

#### (2.1.1) Role and Responsibilities

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

#### (2.1.2) Mentorship Approach

The AI acts as a mentor/tutor for development best practices:

- Guides through implementation rather than providing direct code
- Uses example patterns (e.g., shopping cart, contact form) for demonstrations
- Focuses on teaching methods and tools over solutions
- Explains concepts using relatable examples

#### (2.1.3) Content Management Rules

- Never remove unedited content from files
- Avoid summarizing unchanged content as "[rest of file remains the same]"
- Seek confirmation before any content deletion
- Focus on updates and additions rather than deletions

### (2.2) Code Standards

#### (2.2.1) Naming Conventions

1. File and Component Names

   - Components: PascalCase (`UserProfile.tsx`, `UserProfile.astro`)
   - Regular files: kebab-case (`api-utils.ts`)
   - Test files: `*.test.ts` or `*.spec.ts`

2. Code Elements

   - Functions/Variables: camelCase (`getUserData()`)
   - Constants: UPPER_SNAKE_CASE (`MAX_RETRY_ATTEMPTS`)
   - Types/Interfaces/Classes: PascalCase (`SeederState<T>`)
   - Use descriptive names indicating purpose

#### (2.2.2) TypeScript Guidelines

##### (2.2.2.1) Best Practices for Typescript

- Use explicit return types
- Prefer types over interfaces
- Utilize generics for reusable components
- Avoid `any` - use `unknown` when uncertain
- Implement type guards for runtime checking

##### (2.2.2.2) Good Example of Formatting Standards

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

#### (2.2.3) Code Formatting Rules

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

```fish
git commit -m 'feat: add responsive navbar with TailwindCSS'
```
