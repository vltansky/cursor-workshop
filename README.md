# Mastering Cursor Workshop

A comprehensive workshop for learning advanced Cursor IDE features, custom modes, and AI-powered development workflows.

## 🚀 Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vltansky/cursor-workshop.git
   cd cursor-workshop
   ```

2. **Setup environment:**
   ```bash
   # Install dependencies
   npm i

   # Ensure Node.js v20+
   nvm install 20 && nvm alias default 20
   ```

3. **Start developing:**
   ```bash
   npm run dev
   ```

## 📚 Documentation

### Core Documentation
- **[User Rules](docs/my-user-rules.md)**
- **[Tasks](docs/tasks/)** - Workshop exercises and examples
- **[Recaps](docs/recaps/)** - Session summaries and key learnings

### Custom Modes
Enhance your Cursor experience with these specialized custom modes:

- **[Plan Mode](docs/custom-mode-prompts/plan.md)** - Strategic planning and analysis mode
- **[Code Review](docs/custom-mode-prompts/code-review.md)** - Automated code review assistant
- **[Create Rule](docs/custom-mode-prompts/create-rule.md)** - Generate custom coding rules
- **[PR Description](docs/custom-mode-prompts/pr-descr.md)** - Auto-generate pull request descriptions
- **[Parallel Plan](docs/custom-mode-prompts/parallel-plan.md)** - Multi-threaded planning approach

# PRD
https://docs.google.com/document/d/1WxTQsX89aZHbvVeMPc3QgB09QykCeDpzFPuSgJRoyaM/edit?usp=sharing

## 🔧 MCP (Model Context Protocol) Setup

### Basic Configuration
`.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "playwright mcp": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}
```

### Multiple MCPs
```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp@latest"]
    },
    "playwright mcp": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}
```

### Wix-Specific MCP
```json
{
  "mcpServers": {
    "wix-local-mcp": {
      "command": "npx",
      "args": ["-y", "@wix/mcp"]
    }
  }
}
```

## 🎯 Workshop Features

### Context Window Playground
Interactive tool for understanding AI context limits: https://ctxlab.vltansky.com/

## 📖 Additional Resources

### Community & Learning
- [Presentation Slides](https://mastering-cursor.vltansky.com/)
- [Cheatsheet](https://docs.google.com/document/d/1hEpyOGcF12Z9VhWPQyM63xj8dIEennradqTEt3fpWo4/edit?tab=t.0#heading=h.l1cpksn6hivr)
- [Cursor Community Events](https://lu.ma/cursorcommunity)
- [WhatsApp Israeli Community](https://chat.whatsapp.com/Ld5t0dOi4gT3cYzJ4komXw)
- [Twitter/X Community](https://x.com/i/communities/1828333497351565520)
- [Reddit Community](https://www.reddit.com/r/cursor/)
- [Wix Cursor Security Guidelines](https://docs.google.com/document/d/1TR5OYly0O74HWDasDZlFkRH9O3pZ-0E9E1fp7UHzVSo/edit?tab=t.0#heading=h.tdhyt2cu4eww)

### Tools & Utilities
- [Smithery.ai - MCP Registry](https://smithery.ai/)
- [Tokenizer Tool](https://tiktokenizer.vercel.app/)
- [Task Master AI](https://www.task-master.dev/)
- [Cursor Directory](https://cursor.directory/)
- [Awesome Cursor Rules](https://github.com/PatrickJS/awesome-cursorrules/tree/main/rules)

### Official Documentation
- [Cursor Documentation](https://docs.cursor.com/get-started/welcome)
- [Vibe Coding Guide](https://github.com/EnzeD/vibe-coding)

## 🤝 Contributing

Help improve this workshop by filling out [feedback survey](https://forms.gle/t8HwySa66i7RFF1a7).

This project is part of the Mastering Cursor workshop