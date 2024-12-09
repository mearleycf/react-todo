# Outline of State Transitions for Todos

## State Diagram

```mermaid
%%{init: {'theme':'dark'}}%%
stateDiagram-v2
  [*] --> NotStarted: Create Todo
  
  NotStarted --> InProgress: START
  NotStarted --> Deleted: DELETE
  NotStarted --> Archived: ARCHIVE
  
  InProgress --> NotStarted: RESET
  InProgress --> Completed: COMPLETE
  InProgress --> Deleted: DELETE
  InProgress --> Archived: ARCHIVE
  
  Deleted --> InProgress: RESTORE
  
  Archived --> InProgress: RESTORE
  Archived --> Deleted: DELETE
  
  Completed --> InProgress: START
  Completed --> Deleted: DELETE
  Completed --> Archived: ARCHIVE
```


## State Transition Matrix

| From\To    | NotStarted | InProgress | Completed | Deleted | Archived |
| ---------- | ---------- | ---------- | --------- | ------- | -------- |
| NotStarted | -          | START      | -         | DELETE  | ARCHIVE  |
| InProgress | RESET      | -          | COMPLETE  | DELETE  | ARCHIVE  |
| Completed  | -          | START      | -         | DELETE  | ARCHIVE  |
| Deleted    | -          | RESTORE    | -         | -       | -        |
| Archived   | -          | RESTORE    | -         | DELETE  | -        |

