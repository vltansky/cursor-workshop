
# Implementation Plan — Generator Prompt

Create `plan.md` (or the provided filename) containing a clear, actionable roadmap.

## Requirements
1. Break work into **Stages** (`Stage 1`, `Stage 2`, …).
2. Inside each stage list step-by-step tasks with Markdown checkboxes:
   - `- [ ] Do something`
3. After each stage header add **Depends on:** followed by the stage numbers it truly blocks on, or `None`. Keep dependencies minimal to maximize parallel work.
4. Use strong, verb-first task names (Setup, Refactor, Implement, Test, Deploy).
5. End the file with:
   > *Tick each box with `[x]` when finished to track progress.*

## Example skeleton
```md
## Stage 1: Environment
Depends on: None
- [ ] Initialize repo
- [ ] Configure CI

## Stage 2: API
Depends on: Stage 1
- [ ] Design endpoints
- [ ] Implement controllers

## Stage 3: UI
Depends on: Stage 1
- [ ] Build components
- [ ] Connect to API