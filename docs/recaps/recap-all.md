### 🧠 Mastering Cursor – Cheatsheet

| **Feature** | **What You Learned** |
|-------------|----------------------|
| **Auto-run Mode** | Allow Agent to run tools without asking for confirmation, such as executing commands and writing to files. |
| **Terminal Tagging** | Tag named terminals with `@terminal`. Rename terminal and tag it by name `@customName`. |
| **Folder Tagging** | Add structure context via drag & drop or `@/folder`. |
| **Structure-only References** | Folder tags expose structure, not content, unless opened manually. |
| **Git Commands** | Use `@git` to generate PR descriptions, code review, generate rules, etc. Adds diffs into context. |
| **Open Editors** | Use `/open editors` to include open files in context instantly. |
| **Fuzzy Tagging** | Tag files/folders using partial names for fast context enrichment. |
| **Custom Mode** | Create specific workflows like PR reviews, PR description, TDD, and so on. |
| **Ask Mode** | Plan, explore, and understand the codebase. Great for legacy or new code. |
| **Agent Mode** | Autonomous AI that explores, plans, and executes complex code changes with full access to all tools. |
| **Switch Modes** | You can change modes or models in the same chat session. E.g., start with Ask mode to gather context and plan → switch to Agent to implement. |
| **Bulldozer Mode** | Injects search result (exact lines, not whole file) into context. Handy for wide refactors or component migrations. |
| **Checkpoints** | Roll back to any point in the chat and try a different direction. Use it as your time machine. |
| **Chat Forking** | Create parallel branches of a conversation. |
| **Export Chat** | Export chats in markdown and continue chatting in Gemini/PromptHub or LLMs, share conversations, etc. |
| **`@past chat`** | Bring earlier chats (summarized) into the current session. |
| **Docs → PRD.md → plan.md** | Paste PRDs/specs and convert them into actionable `plan.md`. |
| **`/generate rule`** | Generate rules automatically. Combine with `@git` or Ask Mode (gather context) for best results. |
| **Rule Types** | `always`, `auto-attached`, `agent-requested`, `manual` – each with its own behavior. Avoid `always`, prefer `agent-requested` or `manual`. |
| **Manual Rule Editing** | Add it from Cursor settings → Rules. |
| **Rule Best Practices** | Keep rules small, scoped, and composable. |
| **Add Global MCP** | Add MCP to all projects (globally). |
| **Add MCP to repo (`.cursor/mcp.json`)** | Add MCP to a project (preferred). |

https://docs.google.com/document/d/1hEpyOGcF12Z9VhWPQyM63xj8dIEennradqTEt3fpWo4/edit?tab=t.0#heading=h.l1cpksn6hivr