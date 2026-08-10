# AI Agent Customization Talk: Tool and Documentation List

This is a short follow-up list of the tools, workflow mechanisms, and example repositories referenced in the slide deck presented on June 25, 2026.

The items below are developer-oriented customization or workflow aids. They are not public-facing application features from the talk itself.

## 1. Official documentation links

| Item | What it does | Documentation / link | Notes |
|---|---|---|---|
| `AGENTS.md` / agent instruction files | Stores persistent instructions for the AI agent, including global guidance and repo-specific conventions. | https://code.visualstudio.com/docs/agent-customization/overview | Official VS Code documentation for agent customization concepts. |
| Skills | Reusable instruction bundles that load only when needed for a task, such as review, DB work, testing, or planning workflows. | https://code.visualstudio.com/docs/agent-customization/agent-skills | Official VS Code documentation for agent skills. |
| Hooks | Runs scripts or commands at defined lifecycle points such as session start, before tool use, or after tool use. | https://code.visualstudio.com/docs/agent-customization/hooks | Official VS Code documentation for agent hooks. |

## 2. Repositories and examples shown in the slides

| Item | What it does | Documentation / link | Notes |
|---|---|---|---|
| Example skill: `grill-with-docs` | Example of a skill implemented as a markdown-driven workflow. | https://github.com/mattpocock/skills/blob/main/skills/engineering/grill-with-docs/SKILL.md | Example only, shown to illustrate how a skill can be authored. |
| Example handoff skill | Example of a handoff/fresh-chat workflow used to preserve context and restart cleanly. | https://github.com/willseltzer/claude-handoff/blob/main/skills/handoff/SKILL.md | Example only, shown on the context hygiene slide. |
| CodeGraph | Local code knowledge graph tooling for structured code exploration instead of broad text search. | https://github.com/colbymchenry/codegraph | Open source repository cited on the CodeGraph slide. |
| RTK | Related open source toolkit referenced alongside CodeGraph. | https://github.com/rtk-ai/rtk | Repository cited on the CodeGraph slide. |
| GSD Core | Example project/repository referenced on the artifacts slide for living project memory and workflow artifacts. | https://github.com/open-gsd/gsd-core | Example only, shown as a reference for artifact-driven workflows. |

## 3. Workflow concepts from the talk

These were presented as development workflow patterns rather than as single external products with one README:

| Concept | What it does | Documentation / link | Notes |
|---|---|---|---|
| CLI tools for agent workflows | Wraps repeated deterministic checks in a command-line tool that returns small, controlled output. | No single external link in the deck | Presented as a pattern for internal developer tooling. |
| Context hygiene / fork or handoff | Keeps long debugging sessions from accumulating low-value context by restarting with a clean handoff. | Example skill above | Presented as a workflow pattern, not a standalone product. |
| Living artifacts / proto-memory | Saves plans, tasks, progress notes, decisions, and handoffs as files so context survives across sessions. | Example repo above | Presented as a workflow pattern, not a standalone product. |
| Plan review with a separate critic agent | Uses one agent to produce a plan and another to critique it before implementation starts. | No single external link in the deck | Presented as a workflow pattern for safer planning and review. |

## 4. Short descriptions for security / AI review

- `AGENTS.md`: persistent instruction file that shapes agent behavior in a repo or user environment.
- Skills: task-specific instruction packs loaded on demand instead of always being in context.
- Hooks: deterministic automation points around agent lifecycle events.
- CLI tools: local commands used to standardize repeated checks and reduce noisy raw output.
- CodeGraph: local indexed code intelligence for targeted code retrieval.
- Artifacts / proto-memory: files that preserve project state outside a single chat session.
- Plan review: separate review step before coding, potentially using a second agent.

## 5. Source inside this deck

This list was extracted from:

- [slides/01-agents.js](C:\Users\ETTABIH\Documents\ai-agent-customization-slides\slides\01-agents.js)
- [slides/02-skills.js](C:\Users\ETTABIH\Documents\ai-agent-customization-slides\slides\02-skills.js)
- [slides/03-hooks.js](C:\Users\ETTABIH\Documents\ai-agent-customization-slides\slides\03-hooks.js)
- [slides/04-context-hygiene.js](C:\Users\ETTABIH\Documents\ai-agent-customization-slides\slides\04-context-hygiene.js)
- [slides/05-cli-tools.js](C:\Users\ETTABIH\Documents\ai-agent-customization-slides\slides\05-cli-tools.js)
- [slides/06-codegraph.js](C:\Users\ETTABIH\Documents\ai-agent-customization-slides\slides\06-codegraph.js)
- [slides/07-artifacts.js](C:\Users\ETTABIH\Documents\ai-agent-customization-slides\slides\07-artifacts.js)
- [slides/08-plan-review.js](C:\Users\ETTABIH\Documents\ai-agent-customization-slides\slides\08-plan-review.js)
