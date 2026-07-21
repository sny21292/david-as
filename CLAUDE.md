# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static marketing/e-commerce site for Davidas Design Concepts, a custom jewelry studio in Greensboro, NC. Plain HTML/CSS/JS — **no framework, no build step, no package manager, no tests**. PHP is used only for three form-mail handlers.

A detailed architecture reference lives in `feature-context/SITE-CONTEXT.md` (design tokens, data schemas, pending work). Read it before larger changes, but note it lags the code in places: it says the footer is duplicated per page (no longer true — see Shared chrome below), and its §8 deployment section describes a retired AWS EC2/nginx setup. The Deployment section below is the current truth.

## Running locally

No dev server is configured. Use PHP's built-in server so the form handlers work:

```bash
php -S localhost:8000
```

Caveat: nav/footer links use extension-less clean URLs (`/jewelry`, `/about`). Those rewrites come from `.htaccess` (honored by Hostinger's LiteSpeed in production), so with `php -S` you must visit pages as `/jewelry.html`. Opening files via `file://` breaks nav injection and fetches — always use a server.

## Deployment (Hostinger)

Live site: https://www.davidas.com/ on Hostinger shared hosting (server `us-bos-web2106.main-hosting.eu`, LiteSpeed behind Hostinger's hCDN, PHP 8.3).

```bash
ssh -p 65002 -i ~/.ssh/davidas u582212284@82.25.87.220
```

- Web root: `/home/u582212284/domains/davidas.com/public_html` — it is a **git clone** of `git@github.com:sny21292/david-as.git` (branch `main`; the server has its own deploy key in `~/.ssh/id_ed25519`).
- **Deploy = push then pull**: commit and push to GitHub from local, then SSH in and `git pull` inside `public_html`. No CI, no cron, no rsync.
- Form email goes through the **Resend API**: `mailer.php` (tracked, `sendResendEmail()`) reads secrets from `config.php` (**gitignored** — copy `config.example.php` and fill in the key + notify address). After any fresh clone/deploy, `config.php` must be created manually on the server or forms respond "Mail is not configured on this server." Hostinger's local sendmail is disabled at the account level (`550 Local sendmail disabled for u582212284`), so PHP `mail()` can never work here; don't switch back to it. **Never commit a Resend key**: this repo is public on GitHub, and a key committed on 2026-07-21 was auto-revoked by secret scanning within hours.
- Most videos in `video-files/` are tracked in git (lowercase `.mp4`); `.gitignore` excludes `*.MP4`/`*.mov`, and at least one large server-only file exists (`Laser Engraving.MP4`, ~818 MB, uploaded directly). Don't assume the server's `video-files/` matches git — check before any destructive sync.
- A second domain on the account, `pink-ibex-319891.hostingersite.com`, holds a stale partial copy (Hostinger default subdomain) — ignore it.
- There was an earlier AWS EC2 deployment (`devidasdevelopment.duckdns.org`) — retired. References to it in `feature-context/SITE-CONTEXT.md` §8 are obsolete.

## Architecture

**Shared chrome via JS injection.** Every page includes `js/includes.js` in `<head>`, which replaces the `<div id="site-nav">` and `<div id="site-footer">` placeholders with the nav and footer at DOMContentLoaded (it also installs the Meta Pixel). To change nav links or footer content, edit `includes.js` once — do not add static nav/footer markup to pages.

**Jewelry catalog is a hash-routed SPA** (`jewelry.html` + `js/jewelry.js`), with all product data in `js/products.js`:
- `CATEGORIES` defines the menu tree; `PRODUCTS` entries reference `category`/`subcategory` ids that must match it.
- Routes: `#` → category menu, `#ladies/bracelets` → grid, `#product/230-103` → detail, `#inquiry/230-103` → detail + inquiry modal. `#religious/gospel-necklace` redirects to the standalone page.
- Never hard-code product info into HTML — add/edit entries in `PRODUCTS`. Optional fields: `metals`/`sizes`/`karats` (specs), `video` (ijewel.design 3D-viewer embed URL), `formHint` (custom inquiry-form label).
- Image folder names (`images/Cross%20Pendants/117-326/`) are legacy style numbers; the displayed style number comes from `products.js`.

**Gospel Necklace** (`gospel-necklace.html` + `js/gospel.js` + `css/gospel.css`) is a standalone product page outside the SPA: order form with 8 price variants, AJAX POST to `submit-order.php`, and a PayPal redirect.

**Form handlers**: `submit-contact.php`, `submit-inquiry.php`, `submit-order.php` — return JSON, send via `sendResendEmail()` from `mailer.php` (Resend HTTP API); the notify address and API key come from the gitignored `config.php`. See the Deployment section for why PHP `mail()` cannot be used and how the API key must be handled.

**Shared page behaviors** in `js/main.js`: mobile nav toggle (`.nav--open`), scroll-reveal (`.reveal` elements + `[data-stagger]` children via IntersectionObserver), video modal (cards with `data-video-src`/`data-video-title`), contact form AJAX.

## Conventions

- Styling uses CSS variables defined in `:root` of `css/style.css` (dark green palette, `--color-*`, `--space-*`); fonts are Cormorant Garamond (display) and Outfit (body). Breakpoints: 900px (mobile nav) and 600px (single column).
- Modals use `.modal-overlay` (z-index 1000); 3D viewers open in `.modal--viewer` iframes.
- Internal links between pages use clean URLs without `.html` (e.g. `href="/services"`).

## Workflow Orchestration

For ANY non-trivial task, follow this exact workflow:

### Step 1: Create Plan
- Enter plan mode and explore the codebase using Explore subagents
- Write the plan to `main/.claude/plans/{descriptive-name}.md` — the **root** `.claude/` folder. Do NOT create `.claude/` folders inside individual project directories (`doublelist-local/`, `doublelist-api-server-local/`, etc.). This entire `main/` directory is one project with multiple servers.
- Plan must include: context, files affected, implementation details, sub-agent assignments, verification checklist
- Get user approval before proceeding

### Step 2: Create Sprints
- Create a task-specific folder: `.claude/tasks/{task-reference}/` (e.g., `.claude/tasks/stories_analytics/`)
- Break the approved plan into sprint tasks in `.claude/tasks/{task-reference}/sprint.md`
- Each sprint task should be a discrete, assignable unit of work
- Include which sub-agent type handles each task (frontend, api-server, tester)
- Mark dependencies between tasks (what must complete before what)
- Do NOT use a flat `.claude/tasks/todo.md` — always organize sprints under task-specific subfolders

### Step 3: Delegate to Sub-Agents
- Assign each sprint task to the appropriate sub-agent:
  - **frontend** — PHP site changes (pages, templates, JS, CSS, mod panel, payments)
  - **api-server** — Laravel API changes (controllers, jobs, models, migrations, queue)
  - **tester** — Verification, code review, security checks, regression testing
  - **Explore** — Research and codebase exploration
  - **Plan** — Architecture design for complex sub-tasks
- Launch parallel agents where tasks are independent
- Each agent gets: task description, files to touch, acceptance criteria, relevant context doc paths
- **Do NOT do the work directly** — always delegate to sub-agents

### Step 4: Review & Verify
- Review sub-agent output before marking tasks complete
- Run syntax checks / tests on all modified files
- Delegate to tester agent for final verification
- Update the plan file with completion status

### Step 5: Document
- Update relevant `features-context/` docs with changes made
- Update plan file status to COMPLETED
- Mark all sprint tasks done in `tasks/todo.md`
- Capture lessons in `lessons/lessons.md` if any corrections were made

### Step 6: Update Memory
- After completing any sprint, task, or significant milestone, **immediately update the relevant memory file** in `.claude/projects/.../memory/`
- Update sprint statuses (e.g., READY → DONE), key decisions, new files created, blockers resolved
- If a task is fully complete, update both the memory file and `MEMORY.md` index to reflect current state
- Do NOT wait until end of session — update memory as work progresses so it stays accurate across conversations

### Additional Rules

**Self-Improvement Loop:**
- After ANY correction from the user: update `tasks/lessons.md` with the pattern
- Write rules for yourself that prevent the same mistake
- Review lessons at session start for relevant project

**Verification Before Done:**
- Never mark a task complete without proving it works
- Ask yourself: "Would a staff engineer approve this?"
- Run tests, check logs, demonstrate correctness

**Demand Elegance (Balanced):**
- For non-trivial changes: pause and ask "is there a more elegant way?"
- Skip this for simple, obvious fixes — don't over-engineer

**Autonomous Bug Fixing:**
- When given a bug report: just fix it. Don't ask for hand-holding
- Point at logs, errors, failing tests — then resolve them
- Zero context switching required from the user