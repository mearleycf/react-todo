#!/bin/bash

# Create new directories first
mkdir -p "01_SYSTEM/kernel"
mkdir -p "01_SYSTEM/services"
mkdir -p "01_SYSTEM/config"
mkdir -p "01_SYSTEM/processes"

mkdir -p "02_MEMORY/workspace"
mkdir -p "02_MEMORY/temp"
mkdir -p "02_MEMORY/clipboard"
mkdir -p "02_MEMORY/buffers"

mkdir -p "03_APPLICATIONS/user/ide"
mkdir -p "03_APPLICATIONS/user/file_manager"
mkdir -p "03_APPLICATIONS/user/terminal"
mkdir -p "03_APPLICATIONS/system/compiler"
mkdir -p "03_APPLICATIONS/system/packager"
mkdir -p "03_APPLICATIONS/system/scheduler"

mkdir -p "04_STORAGE/projects"
mkdir -p "04_STORAGE/history"
mkdir -p "04_STORAGE/archive"
mkdir -p "04_STORAGE/logs"

mkdir -p "05_MONITOR/activity"
mkdir -p "05_MONITOR/console"
mkdir -p "05_MONITOR/diagnostics"

# Create backup directory for factory metaphor content
mkdir -p "99_FACTORY_METAPHOR"

# Move old directories to backup
mv "01_FOREMAN_OFFICE" "99_FACTORY_METAPHOR/"
mv "02_WORKBENCHES" "99_FACTORY_METAPHOR/"
mv "03_INITIALIZATION" "99_FACTORY_METAPHOR/"
mv "04_FACTORY_FLOOR" "99_FACTORY_METAPHOR/"
mv "05_AUTOMATIONS" "99_FACTORY_METAPHOR/"
mv "FACTORY_LAYOUT.canvas" "99_FACTORY_METAPHOR/"

# Move content from old directories to new ones
# (We'll need to map the old content appropriately)
# TODO: Add specific mv commands for existing content

echo "Directory structure updated successfully. Old content preserved in 99_FACTORY_METAPHOR/"