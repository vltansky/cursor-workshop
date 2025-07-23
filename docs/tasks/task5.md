## 🐛 React Hook Form Performance Debugging

### 🎯 Exercise Overview
You've been given a React Hook Form with **3 intentional performance bugs** that cause excessive re-renders. Your task is to identify, debug, and fix these issues using Cursor's tools and MCP.

### 🔹 Section 1: Setup & Initial Investigation
- [ ] Start the dev server: `npm run dev`
- [ ] Open the form in your browser and try typing in the fields
- [ ] Notice the UI feels sluggish? That's the performance bug!

### 🔹 Section 2: Debug with Cursor
- [ ] Ask Cursor to uncomment all console.log statements in the form components
  - 💡 Use a prompt like: "Uncomment all console.log statements in UserForm and PreferenceList components"
- [ ] Create `.cursor/mcp.json` in your repo
- [ ] Add Playwright or other debugging tools via MCP config
  👉 See [example JSON](../example-mcp.json)
- [ ] Use this example prompt to get Cursor to debug the performance issues:
Uncomment all console.log statements in UserForm and PreferenceList components.

  👉 try "use node script to uncomment it", ref: https://x.com/ericzakariasson/status/1947736980089147411
#### 📝 Example Debugging Prompt:
```
Use Playwright MCP to open http://localhost:5173/ and analyze why my React form feels sluggish - find and fix performance issues with unnecessary re-renders
```

### 🔹 Section 3: Observe and Learn
- [ ] After Cursor uncomments the logs, refresh the page and type in the fields
- [ ] Watch the console output - what patterns do you notice?
- [ ] Let Cursor guide you through the debugging process
- [ ] ⚠️ Do **not** mention specific file names - let Cursor discover them!

### 🔹 Section 4: Apply the Fixes
- [ ] Follow Cursor's suggestions to fix the performance bugs
- [ ] Test each fix to see the improvement

### 🔹 Section 5: Verify Your Fixes
- [ ] After fixing, the form should:
  - Only log renders when necessary
  - Feel responsive when typing
  - PreferenceList should NOT re-render when typing in name/email
