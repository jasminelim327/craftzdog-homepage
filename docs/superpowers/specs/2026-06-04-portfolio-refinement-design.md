# Portfolio Refinement — Design Spec
Date: 2026-06-04

## Overview

Refine Jasmine's Next.js + Chakra UI portfolio homepage and works page: convert the experience section to a vertical timeline, add a new founding-engineer role, add three new AI/bot projects, update bio copy, and fix all existing code bugs.

---

## 1. Bug Fixes (apply first, no layout changes)

| Bug | Location | Fix |
|-----|----------|-----|
| All tag labels prefixed with `"xxxxxxx "` | `pages/index.js` — every `<TagLabel>` | Strip the prefix from every label |
| Stray `Firebase Tag` text nodes in JSX | `pages/index.js` lines ~213, ~316, ~440 | Delete the bare text nodes |
| Onloop end date shows "Now" | `pages/index.js` line ~127 | Change to `Jan 2024 – Sep 2024` |
| Intro describes "fresh graduate" | `pages/index.js` line ~102 | Rewrite to reflect ~2 years of experience |
| Credit Suisse logo sized `200px` (inconsistent) | `pages/index.js` line ~349 | Set to `100px` × `100px` to match other logos |

---

## 2. Introduction Copy Update

Replace the current intro paragraph with:

> Hello, I'm Jasmine — a software engineer with close to 2 years of professional experience building production-grade applications. I majored in Information Systems (Digital Cloud Solutioning & FinTech) and Finance at Singapore Management University, and I'm passionate about crafting performant, user-focused products.
> Let's connect!

---

## 3. Timeline Component — `ExperienceEntry`

Create a reusable inline component (or extract to `components/experience-entry.js`) that renders a single experience row:

```
[dot]──[line]
        [logo 40×40px rounded-lg]  [role title bold]
                                   [company · date in accent colour]
        [description paragraph]
        [Tech Stack label]
        [coloured tag chips — tech]
        [Skills label]
        [grey tag chips — skills]
```

**Dot colours:**
- Most recent entry (Stealth Startup): `teal.400` / `#0d9488`
- All older entries: `gray.600`

**Connector line:** 2px wide, `gray.700`, stretches full height of the entry's content, hidden after the last entry.

**Logo:** 40×40px, `borderRadius="lg"` (8px). Missing / hidden logos use a placeholder div with a relevant emoji.

---

## 4. Experience Entries (ordered newest → oldest)

### 4a. Stealth Startup *(new)*
- **Display name:** Stealth Startup
- **Role:** Software Engineer (Founding Engineer Scope)
- **Dates:** Sep 2024 – Feb 2026
- **Logo:** placeholder emoji 🚀 (company name hidden per user request)
- **Description (verbose):**
  Architected and developed 4 production-grade applications from concept to launch, building responsive, accessible user interfaces in ReactJS and TypeScript with reusable component-based architecture and robust state management. Integrated frontend with backend services and RESTful APIs built on Node.js + Firebase Cloud Functions with microservices principles, clean architecture, and stateless design — resulting in 40% better API performance and 99.5%+ uptime while enabling rapid feature delivery.

  Owned end-to-end software quality by implementing comprehensive Jest unit, integration, and end-to-end tests (80%+ coverage on critical paths), conducting code reviews, and applying security best practices (JWT, role-based access control) — significantly reducing defects and ensuring stable, secure deliverables.

  Collaborated closely with stakeholders and cross-functional teams in Agile ceremonies to translate business requirements into robust technical solutions, delivering iterative releases on time.

  Built a real-time cloud synchronisation engine with offline-first capabilities and conflict resolution using NoSQL (Firestore) data modelling — reducing sync conflicts by 85% and improving user experience across web and mobile platforms.

  Created and maintained comprehensive technical documentation (API specs, architecture diagrams, design decisions) that accelerated team onboarding and future development.

  Built and customised Launchpad, an internal low-code platform, integrating the Claude AI API to automate mobile app prototyping — reducing prototyping time by 85% and significantly improving engineering productivity.

- **Tech Stack tags:** React (teal), TypeScript (blue), Node.js (green), Firebase (yellow), Jest (purple)
- **Skills tags:** Full Stack Dev, Agile, Security (JWT/RBAC), Documentation (all gray)

### 4b. Onloop *(updated dates)*
- **Dates:** Jan 2024 – Sep 2024 (was "Jan 2024 – Now")
- All other content unchanged; tag labels de-xxxxxxx'd

### 4c. Vibefam — unchanged except bug fixes

### 4d. Credit Suisse — unchanged except bug fixes + logo resized to 100px

### 4e. Ensign — unchanged except bug fixes

---

## 5. Works Page — New "AI & Bots" Section

Add a new section below the existing project grids in `pages/works.js`.

### Section heading
```
🤖  AI & Bots
```
Sub-heading: *"Personal projects exploring AI-powered tools and automation"*

### New project cards (SimpleGrid columns={[1,1,2]})

| id | Title | Description | Tags | Link |
|----|-------|-------------|------|------|
| `fluffy-fiesta` | Fluffy Fiesta Bot | A multi-integration personal assistant chatbot connecting Google Calendar, Notion, Slack, and Telegram for unified daily task and scheduling management. | Node.js | GitHub ↗ |
| `astrology-bot` | Astrology Bot | A daily newsletter bot that delivers personalised cosmic insights and productivity alignment tips — helping users channel their energy intentionally each day. | Node.js | GitHub ↗ |
| `interview-prep` | Interview Prep | A gamified interview prep platform with XP-based progression, mock AI interviews powered by Claude, and a 16-week FAANG roadmap — built on focus, not willpower. | Claude AI | Live Demo ↗ |

**Thumbnails:** No custom images exist. Use emoji placeholder cards (same pattern as existing "Up and Coming" section) — a coloured gradient `Box` with a large centred emoji. Can be swapped for real screenshots later.

**Links:** GitHub buttons for fluffy-fiesta and astrology-bot; Live Demo button for interview-prep.

---

## 6. Files Changed

| File | Changes |
|------|---------|
| `pages/index.js` | Bug fixes, intro rewrite, new Stealth Startup entry, timeline layout |
| `pages/works.js` | New AI & Bots section with 3 project cards |
| `components/experience-entry.js` *(optional)* | Reusable timeline entry component — extract if entry count grows further |

---

## 7. Out of Scope

- Navigation changes (no new pages)
- Individual work detail pages for new projects (can be added later)
- Custom thumbnail images (deferred — swap emoji placeholders when screenshots available)
- Theme or colour palette changes
