# (1) 00_MANUAL

### (1.1) Overview

The `00_MANUAL` directory contains human-focused documentation explaining how to use and interact with the AI Development Environment.

### (1.2) 01_GETTING_STARTED.md

#### (1.2.1) 2024-12-13_11-41 - Switching from Factory to Computer System Metaphor

##### (1.2.1.1) Context

While developing the user documentation, we realized that the factory metaphor was less intuitive than a computer system metaphor. Users are already familiar with how computers work, making it a more natural way to explain the AI-powered development environment.

##### (1.2.1.2) Key Decisions

1. Metaphor Change
   - From: Factory-based metaphor (Factory Owner, Foreman, Workbenches)
   - To: Computer system metaphor (User, Operating System, Programs)

2. Benefits
   - More intuitive for users familiar with computers
   - Better mapping to actual system components
   - Clearer explanation of interaction patterns
   - More natural terminology for technical users

##### (1.2.1.3) Implementation Notes

1. Required Changes
   - Update all documentation to use computer system terminology
   - Rename components to match computer system concepts
   - Revise explanations to leverage users' existing computer knowledge

2. Terminology Mapping
   - Factory Owner → User
   - Foreman → AI Assistant / Operating System
   - Factory → Development Environment
   - Workbenches → Programs/Applications
   - Storage Areas → File System/Memory

##### (1.2.1.4) Impact

This change will make the system more approachable and easier to understand for new users, leveraging their existing mental models of computer systems.

##### (1.2.1.5) Next Steps

- Update all documentation to reflect new metaphor
- Review and revise directory names if needed
- Ensure consistency across all documentation

#### (1.2.2) 2024-12-13_12-26 - Major Directory Restructure

##### (1.2.2.1) Context

Following the decision to switch to a computer system metaphor, we needed to reorganize the entire directory structure to better reflect computer system components and operations.

##### (1.2.2.2) Key Decisions

1. New Directory Structure
   ```
   01_SYSTEM/         (core system processes)
     - kernel/        (core functionality)
     - services/      (background services)
     - config/        (system settings)
     - processes/     (process management)

   02_MEMORY/        (active workspace)
     - workspace/     (current work)
     - temp/         (temporary storage)
     - clipboard/    (shared data)
     - buffers/      (data queues)

   03_APPLICATIONS/  (processing tools)
     - user/         (user-facing apps)
     - system/       (background apps)

   04_STORAGE/       (persistent storage)
     - projects/     (project files)
     - history/      (version control)
     - archive/      (old files)
     - logs/         (system logs)

   05_MONITOR/       (system monitoring)
     - activity/     (resource usage)
     - console/      (system logs)
     - diagnostics/  (debugging)
   ```

2. Content Migration Strategy
   - Created `99_FACTORY_METAPHOR` to preserve old content
   - Will migrate content gradually to new structure
   - No content deletion until migration is complete

##### (1.2.2.3) Implementation Notes

1. Migration Process
   - Created new directory structure
   - Moved old directories to `99_FACTORY_METAPHOR`
   - Will migrate files individually as needed

2. Safety Measures
   - All old content preserved in `99_FACTORY_METAPHOR`
   - No deletions until migration is complete
   - Will use copy operations for critical files

##### (1.2.2.4) Impact

This reorganization will:
- Better align with user mental models
- Make the system more intuitive
- Improve content organization
- Facilitate easier onboarding

##### (1.2.2.5) Next Steps

1. Content Migration
   - Review content in `99_FACTORY_METAPHOR`
   - Plan migration of each file
   - Update file references
   - Test system functionality

2. Documentation
   - Update all documentation to reflect new structure
   - Create migration guides if needed
   - Review and update cross-references

### (1.3) Project Notes

#### (1.3.1) 2024-12-13_notes.md

Created to track questions, answers, and development process for the manual creation. This file helps capture the thought process and decisions made during the documentation development.

## (2) 00_PROJECT_NOTES

### (2.1) Document Purpose

#### (2.1.1) Overview

This document serves as the active record of all significant decisions, changes, and updates made to the Factory system. It captures the context, rationale, and impact of each modification, providing a clear trail of the system's evolution. This living document helps team members understand recent changes, track the decision-making process, and maintain system coherence.

#### (2.1.2) Document Protocols

1. Entry Format

   - Use consistent header numbering (X.Y.Z)
   - Include timestamp in format: YYYY-MM-DD_HH-mm
   - Structure entries with Context, Key Decisions, Implementation Notes, Impact, and Next Steps
   - Maintain proper markdown formatting and linking

2. Change Management

   - Add new entries at the appropriate section level
   - Ensure bi-directional linking with related documents
   - Update version numbers according to semantic versioning
   - Include all affected components and dependencies

3. Archive Process
   - Monitor section sizes - maximum 5 date entries per section
   - When a section exceeds 5 entries, move the oldest entries beyond the 5th most recent
   - Transfer archived entries to `decisions_archived.md` in the corresponding section
   - Maintain header structure and formatting during transfer
   - Add a reference note indicating where the archived entries can be found

## (3) 00_META

### (3.1) factory-knowledge-transfer.md

#### (3.1.1) 2024-12-11_14-06 - Documentation Standards Update

##### (3.1.1.1) Context

The technical documentation standards and immediate next steps needed updating to reflect recent changes in markdown formatting and project priorities.

##### (3.1.1.2) Key Decisions

1. Technical Documentation Standards

   - Enhanced internal linking guidelines with specific examples
   - Added detailed document structure standards
   - Updated template variable formats
   - Added AI integration considerations

2. Project Priorities

   - Shifted focus to applying documentation standards across workbenches
   - Added system integration verification steps
   - Removed outdated operational file implementation tasks

##### (3.1.1.3) Implementation Notes

1. Technical Notes Section

   - Reorganized into five clear categories
   - Added specific examples for each linking type
   - Included AI-specific considerations
   - Updated template syntax examples

2. Next Steps Section

   - Added workbench update priority
   - Included markdown standards application
   - Added system integration verification

##### (3.1.1.4) Impact

These updates provide clearer guidance for maintaining documentation consistency while prioritizing the application of standards across all workbench files.

##### (3.1.1.5) Next Steps

- Begin systematic update of remaining workbench files
- Verify internal linking across updated documents
- Test AI navigation with new structure

#### (3.1.2) 2024-12-11_17-13 - Additional Formatting Refinements

##### (3.1.2.1) Context

After reviewing the `factory-knowledge-transfer.md` file, several formatting inconsistencies were identified that needed to be addressed to fully comply with markdownlint standards.

##### (3.1.2.2) Key Decisions

1. Enhanced Internal Linking Documentation

   - Added guidance for relative section links using `[[#section_name]]`
   - Clarified linking syntax with more specific examples

2. Markdown Formatting Improvements

   - Added proper escaping for special characters (\* and \_)
   - Ensured consistent blank line usage between sections
   - Fixed code block formatting in commit message example

##### (3.1.2.3) Implementation Notes

1. Special Character Handling

   - Escaped asterisks and underscores in documentation
   - Updated list marker documentation to show escaped asterisk

2. Document Structure

   - Removed redundant blank lines between sections
   - Added missing blank lines after section headers
   - Fixed nested code block formatting

##### (3.1.2.4) Impact

These refinements ensure the documentation fully complies with markdownlint standards while improving readability and consistency.

##### (3.1.2.5) Next Steps

- Apply these refined formatting standards to remaining documents
- Update any documentation tools to account for special character escaping
- Verify proper rendering of escaped characters in Obsidian

#### (3.1.3) 2024-12-11_17-16 - Header Numbering Update

##### (3.1.3.1) Context

During a review of markdownlint compliance, we identified that headers within date blocks were missing numerical prefixes, leading to potential duplicate heading errors.

##### (3.1.3.2) Key Decisions

1. Header Numbering Structure

   - Added numerical prefixes to all date block headers
   - Used format (X.Y.Z.N) where N is the section number within the date block
   - Maintained consistent spacing and formatting

2. Documentation Updates

   - Updated documentation to reflect header numbering requirements
   - Added examples of proper date block header formatting

##### (3.1.3.3) Implementation Notes

1. Header Updates

   - Added numerical prefixes to Context, Key Decisions, Implementation Notes, Impact, and Next Steps
   - Verified unique header IDs across all documents
   - Maintained proper nesting and spacing

##### (3.1.3.4) Impact

This change ensures complete markdownlint compliance and eliminates potential duplicate heading issues while maintaining clear document hierarchy.

##### (3.1.3.5) Next Steps

- Update archived decisions log with new header format
- Verify all internal links still work with new header format
- Document header numbering requirements in standards

#### (3.1.4) 2024-12-12_10-40 - Concept Mapping Implementation

##### (3.1.4.1) Context

The Factory system needed a comprehensive concept mapping system to enhance AI navigation and knowledge integration capabilities across workbenches.

##### (3.1.4.2) Key Decisions

1. Knowledge Graph Structure

   - Implemented node types for concepts, relationships, properties, and operations
   - Established bi-directional relationship requirements
   - Defined clear mapping rules and documentation standards

2. AI Integration Protocols

   - Added context understanding mechanisms
   - Implemented navigation protocols for path traversal
   - Defined interaction patterns for AI operations

3. Workbench Integration
   - Enhanced Analysis and Synthesis benches with concept mapping capabilities
   - Added bi-directional linking between workbenches
   - Implemented knowledge graph management operations

##### (3.1.4.3) Implementation Notes

1. Protocol Updates

   - Added concept mapping section to `02_PROTOCOLS.md`
   - Enhanced AI integration documentation
   - Implemented workbench integration mappings

2. Workbench Enhancements
   - Updated Analysis Bench to v1.1.2
   - Updated Synthesis Bench to v1.1.0
   - Added knowledge graph operations to both benches

##### (3.1.4.4) Impact

These updates provide a robust framework for AI navigation and knowledge integration across the Factory system, enhancing the system's ability to understand and process complex relationships.

##### (3.1.4.5) Next Steps

- Implement concept mapping in remaining workbenches
- Enhance AI navigation capabilities
- Develop additional knowledge graph tools

## (4) 01_FOREMAN_OFFICE

### (4.1) 01_DESK

[No entries yet]

### (4.2) 02_WHITEBOARD

[No entries yet]

### (4.3) 03_TOOLBOX

[No entries yet]

## (5) 02_WORKBENCHES

### (5.1) 00_TEMPLATE

#### (5.1.1) 2024-12-11_13-27 - Workbench Template Standardization

##### (5.1.1.1) Context

During a comprehensive review of the workbench documentation structure, we identified inconsistencies between the template and implemented workbenches. This led to a systematic update of both the template and analysis bench documents.

##### (5.1.1.2) Key Decisions

1. Document Structure

   - Maintained numbered section hierarchy (1-9)
   - Added guidance notes in template using blockquotes (>) for sections requiring workbench-specific content
   - Standardized section ordering across all workbench files

2. Content Standards

   - Intelligence Parameters simplified to essential elements (Type, Primary Function, AI Access Level, Linked Systems)
   - Workspace Configuration expanded to include both Standard Operations and Processing Protocols
   - Input/Output streams to follow consistent format with detailed YAML validation rules
   - Status Tracking to include both metrics and transitions
   - Version Control moved to end of document

3. YAML Formatting

   - Template variables to use format `{{VARIABLE}}` without spaces
   - Required and optional fields clearly specified
   - Consistent use of frontmatter requirements

4. Template Improvements

   - Added workbench-specific placeholder sections
   - Standardized emoji usage in status indicators
   - Enhanced version control structure

##### (5.1.1.3) Implementation Notes

1. Template Updates

   - Added guidance notes for customization
   - Standardized YAML structure
   - Removed redundant sections
   - Enhanced status tracking format

2. Analysis Bench Alignment

   - Updated to match template structure while maintaining specific content
   - Added detailed Standard Operations section
   - Enhanced validation rules with analysis-specific fields
   - Updated context map and resources to reflect actual connections

##### (5.1.1.4) Impact

These changes establish a clear standard for all workbench documents while maintaining flexibility for workbench-specific content. This will ensure consistency across the Factory system while allowing each workbench to serve its specific purpose effectively.

##### (5.1.1.5) Next Steps

- Update remaining workbench files to align with new standards
- Review and update any dependent documentation
- Monitor effectiveness of new structure through actual usage

### (5.2) 01_ANALYSIS_BENCH

#### (5.2.1) 2024-12-11_14-03 - Analysis Bench Structure Update

##### (5.2.1.1) Context

Following the template standardization ([[02_WORKBENCHES/00_TEMPLATE#2024-12-11_13-27 - Workbench Template Standardization]]), the Analysis Bench required significant updates to align with the new standards while maintaining its specific functionality.

##### (5.2.1.2) Key Decisions

1. Structure Alignment

   - Added Standard Operations section with analysis-specific operations
   - Maintained Processing Protocols with detailed analysis tasks
   - Updated Input/Output streams format

2. Content Specificity

   - Enhanced YAML validation rules for analysis outputs
   - Added analysis-specific fields to templates
   - Updated context map with actual system connections

##### (5.2.1.3) Implementation Notes

1. Content Updates

   - Added Pattern Recognition Initialization to Standard Operations
   - Enhanced validation rules with analysis-specific fields
   - Updated processing paths for all outputs
   - Added version control entry for changes

2. Technical Improvements

   - Added confidence scoring to validation rules
   - Enhanced pattern matching capabilities
   - Improved integration with Synthesis Bench

##### (5.2.1.4) Impact

The Analysis Bench now serves as the first fully-compliant implementation of the new workbench standards, while maintaining its specialized analysis capabilities.

##### (5.2.1.5) Next Steps

- Monitor analysis processing effectiveness
- Gather feedback on new structure
- Update related workbenches to match standards

### (5.3) 2024-12-12_09-49 - Workbench Internal Linking Updates

##### (5.3.1) Context

During validation of internal linking across workbenches, we identified and corrected several linking inconsistencies, particularly in relation to the protocols file location and section references.

##### (5.3.2) Key Decisions

1. Protocol File Location

   - Confirmed correct location at `03_INITIALIZATION/02_PROTOCOLS.md`
   - Removed incorrectly created duplicate at `02_WORKBENCHES/02_PROTOCOLS.md`

2. Link Updates
   - Updated Analysis Bench protocol links to use correct relative paths
   - Added missing Review Bench links to Creation and Analysis benches
   - Added detailed sections in Synthesis Bench for Pattern Recognition, Relationship Analysis, and Knowledge Integration

##### (5.3.3) Implementation Notes

1. Link Structure

   - Changed protocol references to use relative paths: `[[../03_INITIALIZATION/02_PROTOCOLS#Section]]`
   - Updated section references to match actual headings in target files

2. Content Organization
   - Added structured methodologies for pattern recognition and analysis
   - Enhanced knowledge integration documentation
   - Ensured bi-directional linking between workbenches

##### (5.3.4) Impact

These updates improve navigation between workbenches and ensure all cross-references point to valid, existing sections.

##### (5.3.5) Next Steps

1. Add specific concept mapping section to Protocols file
2. Verify remaining internal links across all workbenches
3. Consider adding more detailed process documentation in linked sections

### (5.4) 02_SYNTHESIS_BENCH

[No entries yet]

### (5.5) 03_CREATION_BENCH

[No entries yet]

### (5.6) 04_REVIEW_BENCH

[No entries yet]

## (6) 03_STATUS_BOARD

[No entries yet]
