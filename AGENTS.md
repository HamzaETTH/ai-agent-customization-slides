# AI Agent Customization Slides

This folder contains a local, no-server HTML slide deck for a developer knowledge-sharing talk. Open `slides.html` directly in a browser.

Slides are loaded from `slides/*.js` in the order listed by the script tags near the bottom of `slides.html`. Each slide file pushes one slide into `window.slides`.

## Slide Guide

### 00 - Intro

- File: `slides/00-intro.js`
- Image: none
- Purpose: Introduces the talk as a practical overview of customizing AI agents with better context.
- Covers the deck topics: `AGENTS.md`, Skills, Agent hooks, Context hygiene, CLI tools, CodeGraph, Living artifacts, and Plan review.

### 01 - AGENTS.md

- File: `slides/01-agents.js`
- Image: [`agents.png`](agents.png)
- Purpose: Explains default instruction files for AI agents.
- Main idea: Put stable guidance in files so the agent does not need repeated prompting.
- Points: global rules, repo-specific conventions, less repeated prompting.

### 02 - Skills

- File: `slides/02-skills.js`
- Image: [`skills.png`](skills.png)
- Purpose: Explains reusable agent workflows.
- Main idea: Skills load specialized instructions only when needed.
- Points: reusable instructions, on-demand loading, cleaner focused context.

### 03 - Agent Hooks

- File: `slides/03-hooks.js`
- Image: [`hooks.png`](hooks.png)
- Purpose: Explains deterministic automation around the AI agent lifecycle.
- Main idea: Hooks can run at defined moments instead of relying on the agent to remember every step.
- Points: load context automatically, guard risky actions, run checks after edits.

### 04 - Context Hygiene

- File: `slides/04-context-hygiene.js`
- Image: [`noise.png`](noise.png)
- Source image copy: [`noisy.png`](noisy.png)
- Purpose: Explains why long debugging chats can become noisy.
- Main idea: Fork early or save a handoff before wrong paths and repeated attempts pollute context.
- Points: long debug chats accumulate noise, fork before the bad path grows, use handoff notes to restart cleanly.

### 05 - CLI Tools

- File: `slides/05-cli-tools.js`
- Image: [`cli_tool.png`](cli_tool.png)
- Purpose: Explains CLI tools for controlled, deterministic AI workflows.
- Main idea: Repeated checks should be wrapped in tools that return compact, reliable output.
- Points: wrap repeated checks, return clean output, save time and tokens.

### 06 - CodeGraph

- File: `slides/06-codegraph.js`
- Image: [`graph.png`](graph.png)
- Purpose: Explains code knowledge graphs as better context than blind search.
- Main idea: A pre-indexed symbol graph helps the agent retrieve relevant code paths instead of scanning many unrelated files.
- Points: search less, understand more, relevant code only, less noise and fewer tokens.

### 07 - Artifacts

- File: `slides/07-artifacts.js`
- Image: [`gsd.png`](gsd.png)
- Purpose: Explains living documents and proto-memory.
- Main idea: Plans, tasks, progress notes, decisions, and handoff files preserve useful context across sessions.
- Points: plans become files, tasks stay visible, progress survives new sessions.

### 08 - Plan Review

- File: `slides/08-plan-review.js`
- Image: [`plan.png`](plan.png)
- Purpose: Explains planning and independent review with AI agents.
- Main idea: A separate critic agent can review the plan with cleaner context before implementation starts.
- Points: ask for a plan before coding, use a separate critic agent, catch risks before implementation.

### 09 - Conclusion

- File: `slides/09-conclusion.js`
- Image: none
- Purpose: Ends with the core message and opens Q&A.
- Main idea: Start small by giving the agent better context.
- Takeaways: put repeatable guidance in files, automate deterministic steps, keep context clean.

## Adding A Slide

1. Create a new file under `slides/`, for example `slides/10-topic.js`.
2. Add one `window.slides.push(\`...\`)` block containing a single `<section class="slide ...">`.
3. If the slide uses an image, place it in this folder and reference it with a relative path such as `image-name.png`.
4. Register the file in `slides.html` with a script tag near the other slide scripts.
5. Page numbers are generated automatically.
