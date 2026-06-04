# Portfolio Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refine the portfolio homepage and works page — fix all bugs, update bio copy, convert experience to a vertical timeline with a new founding-engineer entry, and add three new AI/bot project cards.

**Architecture:** No test framework exists (portfolio site). Verification is visual: run `yarn dev` (or `npm run dev`), open `http://localhost:3000`, and confirm changes in the browser. Commit after each task. Two files change: `pages/index.js` (homepage) and `pages/works.js` (works page). A new `components/experience-entry.js` component is extracted to keep `index.js` manageable.

**Tech Stack:** Next.js 12, Chakra UI 2, Emotion, react-icons 4, Framer Motion

---

## File Map

| Action | File | Responsibility |
|--------|------|----------------|
| Modify | `pages/index.js` | Bug fixes, intro copy, timeline layout, new Stealth Startup entry |
| Create | `components/experience-entry.js` | Reusable timeline row component |
| Modify | `pages/works.js` | New AI & Bots section with 3 project cards |

---

### Task 1: Fix all bugs in `pages/index.js`

**Files:**
- Modify: `pages/index.js`

Five bugs to fix in one pass — all mechanical, no layout changes yet.

- [ ] **Step 1: Remove all `xxxxxxx ` prefixes from every `<TagLabel>`**

  Open `pages/index.js`. Every `<TagLabel>` contains a string like `" xxxxxxx NextJS"`. Strip the prefix from all of them. The fixed labels are:

  | Before | After |
  |--------|-------|
  | ` xxxxxxx NextJS` | `NextJS` |
  | `xxxxxxx PostgreSQL` | `PostgreSQL` |
  | ` xxxxxxx Typescript` | `TypeScript` |
  | ` xxxxxxx GraphQL` | `GraphQL` |
  | ` xxxxxxx Nestjs` | `NestJS` |
  | ` xxxxxxx Full Stack Web Development` | `Full Stack Dev` |
  | `xxxxxxx Agile ` | `Agile` |
  | ` xxxxxxx Collaboration ` | `Collaboration` |
  | ` xxxxxxx Vue` | `Vue` |
  | `xxxxxxx Firebase` | `Firebase` |
  | ` xxxxxxx Node JS` | `Node.js` |
  | ` xxxxxxx React` | `React` |
  | ` xxxxxxx Java` | `Java` |
  | ` xxxxxxx Springboot` | `SpringBoot` |
  | `xxxxxxx SDLC ` | `SDLC` |
  | ` xxxxxxx Software Testing ` | `Software Testing` |
  | ` xxxxxxx Consulting` | `Consulting` |
  | `xxxxxxx Research` | `Research` |
  | ` xxxxxxx Presentation` | `Presentation` |

- [ ] **Step 2: Remove the three stray `Firebase Tag` text nodes**

  Search for the bare text `Firebase Tag` (not inside a component, just floating in JSX). There are three instances — one in each of the Onloop, Vibefam, and Credit Suisse blocks. Delete each bare text node entirely. They look like:

  ```jsx
  </Tag>
  Firebase Tag          {/* ← delete this line */}
  <Tag
  ```

- [ ] **Step 3: Fix Onloop date range**

  Find `Jan 2024 - Now` and replace with `Jan 2024 – Sep 2024` (use an en-dash `–`, not a hyphen).

- [ ] **Step 4: Update intro paragraph**

  Find the `<Paragraph>` block inside the `INTRODUCTION` section and replace its content with:

  ```jsx
  <Paragraph>
    Hello, I&apos;m Jasmine — a software engineer with close to 2 years of
    professional experience building production-grade applications. I majored
    in Information Systems (Digital Cloud Solutioning &amp; FinTech) and
    Finance at Singapore Management University, and I&apos;m passionate about
    crafting performant, user-focused products.
    <br /><br />
    Let&apos;s connect!
  </Paragraph>
  ```

- [ ] **Step 5: Fix Credit Suisse logo size**

  Find the `<ProfileImage>` for `creditsuisse.jpg` which has `width="200px" height="200px"`. Change both to `"100px"`.

- [ ] **Step 6: Start dev server and verify fixes**

  ```bash
  yarn dev
  # or: npm run dev
  ```

  Open `http://localhost:3000`. Check:
  - No "xxxxxxx" text on any tag chip
  - No stray "Firebase Tag" text visible on the page
  - Onloop shows "Jan 2024 – Sep 2024"
  - Intro text says "close to 2 years"
  - Credit Suisse logo is the same size as the other logos

- [ ] **Step 7: Commit**

  ```bash
  git add pages/index.js
  git commit -m "fix: remove xxxxxxx tag prefixes, stray text nodes, update dates and intro copy"
  ```

---

### Task 2: Create the `ExperienceEntry` component

**Files:**
- Create: `components/experience-entry.js`

This component renders one timeline row. It accepts props for all variable parts so each experience entry in `index.js` becomes a single clean JSX call.

- [ ] **Step 1: Create `components/experience-entry.js` with this exact content**

  ```jsx
  import {
    Box,
    HStack,
    Text,
    Tag,
    TagLeftIcon,
    TagLabel,
    useColorModeValue,
    chakra,
  } from '@chakra-ui/react'
  import Image from 'next/image'

  const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop),
  })

  /**
   * ExperienceEntry — one row in the vertical timeline.
   *
   * Props:
   *   logoSrc      {string|null}  Image path (e.g. "/images/onloop.jpeg"). Pass null to use logoEmoji.
   *   logoEmoji    {string}       Fallback emoji shown when logoSrc is null.
   *   isLatest     {boolean}      True for the most recent entry — renders a teal dot.
   *   isLast       {boolean}      True for the last entry — hides the connecting line.
   *   role         {string}       Job title.
   *   company      {string}       Company name / display label.
   *   dateRange    {string}       e.g. "Sep 2024 – Feb 2026"
   *   description  {string}       Free-text body.
   *   techTags     {Array<{label, colorScheme, icon}>}
   *   skillTags    {Array<{label, icon}>}
   */
  const ExperienceEntry = ({
    logoSrc = null,
    logoEmoji = '🏢',
    isLatest = false,
    isLast = false,
    role,
    company,
    dateRange,
    description,
    techTags = [],
    skillTags = [],
  }) => {
    const dotColor = isLatest ? 'teal.400' : 'gray.600'
    const lineColor = useColorModeValue('gray.300', 'gray.700')
    // Call both unconditionally (Rules of Hooks), then pick based on isLatest
    const tealCompanyColor = useColorModeValue('teal.600', 'teal.300')
    const grayCompanyColor = useColorModeValue('gray.500', 'gray.400')
    const companyColor = isLatest ? tealCompanyColor : grayCompanyColor

    return (
      <Box display="flex" gap={0} mb={isLast ? 0 : 4}>
        {/* Timeline spine */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="28px"
          flexShrink={0}
          mr={3}
        >
          <Box
            w="12px"
            h="12px"
            borderRadius="full"
            bg={dotColor}
            flexShrink={0}
            mt="6px"
          />
          {!isLast && (
            <Box w="2px" flex={1} bg={lineColor} mt={1} minH="80px" />
          )}
        </Box>

        {/* Content */}
        <Box flex={1} pb={isLast ? 0 : 6}>
          {/* Header: logo + role + company/date */}
          <Box display="flex" alignItems="center" gap={3} mb={3}>
            <Box
              w="44px"
              h="44px"
              borderRadius="lg"
              overflow="hidden"
              flexShrink={0}
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg={useColorModeValue('gray.100', 'gray.700')}
              fontSize="22px"
            >
              {logoSrc ? (
                <ProfileImage
                  src={logoSrc}
                  alt={company}
                  width="44px"
                  height="44px"
                />
              ) : (
                logoEmoji
              )}
            </Box>
            <Box>
              <Text fontWeight="bold" fontSize="sm" lineHeight={1.3}>
                {role}
              </Text>
              <Text fontSize="xs" color={companyColor}>
                {company} · {dateRange}
              </Text>
            </Box>
          </Box>

          {/* Description */}
          <Text fontSize="sm" mb={4} lineHeight={1.7}>
            {description}
          </Text>

          {/* Tech Stack */}
          {techTags.length > 0 && (
            <Box mb={3}>
              <Text
                fontSize="xs"
                fontWeight="bold"
                textTransform="uppercase"
                letterSpacing="0.5px"
                color={useColorModeValue('gray.500', 'gray.400')}
                mb={2}
              >
                Tech Stack
              </Text>
              <HStack spacing={2} flexWrap="wrap">
                {techTags.map(({ label, colorScheme, icon: Icon }) => (
                  <Tag
                    key={label}
                    size="sm"
                    variant="solid"
                    borderRadius="full"
                    colorScheme={colorScheme}
                    mb={1}
                  >
                    {Icon && <TagLeftIcon boxSize="13px" as={Icon} />}
                    <TagLabel>{label}</TagLabel>
                  </Tag>
                ))}
              </HStack>
            </Box>
          )}

          {/* Skills */}
          {skillTags.length > 0 && (
            <Box>
              <Text
                fontSize="xs"
                fontWeight="bold"
                textTransform="uppercase"
                letterSpacing="0.5px"
                color={useColorModeValue('gray.500', 'gray.400')}
                mb={2}
              >
                Skills
              </Text>
              <HStack spacing={2} flexWrap="wrap">
                {skillTags.map(({ label, icon: Icon }) => (
                  <Tag
                    key={label}
                    size="sm"
                    variant="solid"
                    borderRadius="full"
                    colorScheme="gray"
                    mb={1}
                  >
                    {Icon && <TagLeftIcon boxSize="13px" as={Icon} />}
                    <TagLabel>{label}</TagLabel>
                  </Tag>
                ))}
              </HStack>
            </Box>
          )}
        </Box>
      </Box>
    )
  }

  export default ExperienceEntry
  ```

- [ ] **Step 2: Verify the file was created**

  ```bash
  cat components/experience-entry.js | head -5
  ```
  Expected: first 5 lines of the file above.

- [ ] **Step 3: Commit**

  ```bash
  git add components/experience-entry.js
  git commit -m "feat: add ExperienceEntry timeline component"
  ```

---

### Task 3: Rebuild the experience section in `pages/index.js`

**Files:**
- Modify: `pages/index.js`

Replace the entire `PROFESSIONAL EXPERIENCE` section with timeline entries using `ExperienceEntry`. The section currently starts at the `<Section delay={0.2}>` block and ends with `</Section>` before the `<br></br>` that precedes the GET IN TOUCH section.

- [ ] **Step 1: Add the import for `ExperienceEntry` at the top of `pages/index.js`**

  After the existing imports, add:

  ```jsx
  import ExperienceEntry from '../components/experience-entry'
  ```

- [ ] **Step 2: Replace the entire `PROFESSIONAL EXPERIENCE` `<Section>` block**

  Find the block starting with:
  ```jsx
  <Section delay={0.2}>
    <Heading as="h5" variant="section-title">
      PROFESSIONAL EXPERIENCE
  ```
  and ending with its closing `</Section>` tag. Replace it entirely with:

  ```jsx
  <Section delay={0.2}>
    <Heading as="h5" variant="section-title">
      PROFESSIONAL EXPERIENCE
    </Heading>
    <Box mt={6}>

      <ExperienceEntry
        logoSrc={null}
        logoEmoji="🚀"
        isLatest={true}
        isLast={false}
        role="Software Engineer (Founding Engineer Scope)"
        company="Stealth Startup"
        dateRange="Sep 2024 – Feb 2026"
        description="Architected and developed 4 production-grade applications from concept to launch, building responsive, accessible user interfaces in ReactJS and TypeScript with reusable component-based architecture and robust state management. Integrated frontend with backend services and RESTful APIs built on Node.js + Firebase Cloud Functions with microservices principles, clean architecture, and stateless design — resulting in 40% better API performance and 99.5%+ uptime while enabling rapid feature delivery. Owned end-to-end software quality by implementing comprehensive Jest unit, integration, and end-to-end tests (80%+ coverage on critical paths), conducting code reviews, and applying security best practices (JWT, role-based access control). Collaborated closely with stakeholders in Agile ceremonies to translate business requirements into robust technical solutions, delivering iterative releases on time. Built a real-time cloud synchronisation engine with offline-first capabilities and conflict resolution using NoSQL (Firestore) data modelling — reducing sync conflicts by 85%. Built and customised Launchpad, an internal low-code platform, integrating the Claude AI API to automate mobile app prototyping — reducing prototyping time by 85%."
        techTags={[
          { label: 'React', colorScheme: 'teal', icon: SiReact },
          { label: 'TypeScript', colorScheme: 'blue', icon: SiTypescript },
          { label: 'Node.js', colorScheme: 'green', icon: IoLogoNodejs },
          { label: 'Firebase', colorScheme: 'yellow', icon: IoLogoFirebase },
          { label: 'Jest', colorScheme: 'purple', icon: SiJest },
        ]}
        skillTags={[
          { label: 'Full Stack Dev', icon: IoApps },
          { label: 'Agile', icon: IoRepeatOutline },
          { label: 'Security (JWT/RBAC)', icon: IoCodeWorking },
          { label: 'Documentation', icon: IoReader },
        ]}
      />

      <ExperienceEntry
        logoSrc="/images/onloop.jpeg"
        isLatest={false}
        isLast={false}
        role="Software Engineering Intern"
        company="Onloop"
        dateRange="Jan 2024 – Sep 2024"
        description="Worked on new features including Slack Integration and Notifications with strong emphasis on responsiveness across different devices, elevating user experience on the Onloop mobile and web platform by collaborating with software engineers and the product manager."
        techTags={[
          { label: 'NextJS', colorScheme: 'green', icon: TbBrandNextjs },
          { label: 'PostgreSQL', colorScheme: 'yellow', icon: SiPostgresql },
          { label: 'TypeScript', colorScheme: 'red', icon: SiTypescript },
          { label: 'GraphQL', colorScheme: 'blue', icon: SiGraphql },
          { label: 'NestJS', colorScheme: 'purple', icon: SiNestjs },
        ]}
        skillTags={[
          { label: 'Full Stack Dev', icon: IoApps },
          { label: 'Agile', icon: IoRepeatOutline },
          { label: 'Collaboration', icon: IoCodeWorking },
        ]}
      />

      <ExperienceEntry
        logoSrc="/images/vibefam.jpg"
        isLatest={false}
        isLast={false}
        role="Software Engineering Intern"
        company="Vibefam"
        dateRange="Sep 2023 – Dec 2023"
        description="Worked on enhancements and new features that elevate user experience on the Vibefam platform, with emphasis on a feature-rich and responsive design that caters to diverse user needs."
        techTags={[
          { label: 'Vue', colorScheme: 'green', icon: IoLogoVue },
          { label: 'Firebase', colorScheme: 'yellow', icon: IoLogoFirebase },
          { label: 'Node.js', colorScheme: 'red', icon: IoLogoNodejs },
        ]}
        skillTags={[
          { label: 'Full Stack Dev', icon: IoApps },
          { label: 'Agile', icon: IoRepeatOutline },
          { label: 'Software Testing', icon: IoCodeWorking },
        ]}
      />

      <ExperienceEntry
        logoSrc="/images/creditsuisse.jpg"
        isLatest={false}
        isLast={false}
        role="Apprentice"
        company="Credit Suisse INSPIRE"
        dateRange="Jun – Dec 2022"
        description="Developed a full-stack web application allowing users to express and discuss unconscious bias in the workplace, guided by Software Engineers at Credit Suisse. Features include a multi-user discussion platform, profile customisation, and subscription to tags."
        techTags={[
          { label: 'React', colorScheme: 'blue', icon: IoLogoVue },
          { label: 'Firebase', colorScheme: 'yellow', icon: IoLogoFirebase },
          { label: 'Node.js', colorScheme: 'red', icon: IoLogoNodejs },
          { label: 'Java', colorScheme: 'purple', icon: FaJava },
          { label: 'SpringBoot', colorScheme: 'green', icon: BiLogoSpringBoot },
        ]}
        skillTags={[
          { label: 'Full Stack Dev', icon: IoApps },
          { label: 'SDLC', icon: IoRepeatOutline },
          { label: 'Software Testing', icon: IoCodeWorking },
        ]}
      />

      <ExperienceEntry
        logoSrc="/images/ensign.jpg"
        isLatest={false}
        isLast={true}
        role="Cyber Strategy Intern"
        company="Ensign Infosecurity"
        dateRange="Jun – Dec 2022"
        description="Worked on various proposals, in-house process enhancement, and research on technical solutions that enhance clients' cybersecurity posture."
        techTags={[]}
        skillTags={[
          { label: 'Consulting', icon: HiOutlinePresentationChartBar },
          { label: 'Research', icon: IoGolfOutline },
          { label: 'Presentation', icon: IoReader },
        ]}
      />

    </Box>
  </Section>
  ```

- [ ] **Step 3: Add missing icon imports**

  At the top of `pages/index.js`, the following icons need to be imported. Add them to the existing import lines:

  From `react-icons/si` (already has `SiPostgresql, SiTypescript, SiGraphql, SiNestjs`), add `SiReact` and `SiJest`:
  ```jsx
  import { SiPostgresql, SiTypescript, SiGraphql, SiNestjs, SiReact, SiJest } from 'react-icons/si'
  ```

  All other icons (`TbBrandNextjs`, `IoLogoVue`, `IoLogoFirebase`, `IoLogoNodejs`, `IoApps`, `IoRepeatOutline`, `IoCodeWorking`, `IoReader`, `IoGolfOutline`, `FaJava`, `BiLogoSpringBoot`, `HiOutlinePresentationChartBar`) are already imported. Remove `BioSection` and `BioYear` from the bio import if they are no longer used elsewhere on the page — check first with a search.

- [ ] **Step 4: Remove unused imports**

  After step 3, check if `BioSection` and `BioYear` are still referenced anywhere in `pages/index.js`. If not, remove them from the import:
  ```jsx
  // Remove this line entirely if neither is used:
  import { BioSection, BioYear } from '../components/bio'
  ```

  Also remove `ProfileImage` and its `chakra(Image, ...)` definition from `pages/index.js` if it is no longer used there (the `ExperienceEntry` component has its own internal `ProfileImage`). Check that no other JSX in `index.js` references `ProfileImage` before removing.

- [ ] **Step 5: Verify in browser**

  With `yarn dev` running, open `http://localhost:3000`. Check:
  - Timeline dots and lines visible connecting all 5 entries
  - Stealth Startup entry has a teal dot and appears at the top
  - Older entries have grey dots
  - No stray text, no xxxxxxx labels
  - All logos display at consistent size
  - Last entry (Ensign) has no trailing line

- [ ] **Step 6: Commit**

  ```bash
  git add pages/index.js
  git commit -m "feat: replace experience section with vertical timeline, add Stealth Startup entry"
  ```

---

### Task 4: Add AI & Bots section to `pages/works.js`

**Files:**
- Modify: `pages/works.js`

Add a new section below the existing grids with 3 new project cards. Since no custom thumbnails exist, use emoji + gradient `Box` placeholders consistent with the existing "Up and Coming" placeholder pattern already in the file.

- [ ] **Step 1: Add the AI & Bots section at the bottom of the container in `pages/works.js`**

  Find the closing `</Container>` tag and insert the following block immediately before it:

  ```jsx
  <Section delay={0.4}>
    <Heading as="h3" fontSize={20} mt={6} mb={2}>
      🤖 AI &amp; Bots
    </Heading>
    <Text fontSize={14} color="gray.500" mb={4}>
      Personal projects exploring AI-powered tools and automation
    </Text>
  </Section>

  <SimpleGrid columns={[1, 1, 2]} gap={6}>
    <Section delay={0.5}>
      <Box w="100%">
        <Box
          h="160px"
          borderRadius="lg"
          bg="linear-gradient(135deg, #1a3a1a, #0d2e0d)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="56px"
          mb={3}
        >
          🐾
        </Box>
        <Text fontSize={16} fontWeight="bold" mb={1}>
          Fluffy Fiesta Bot
        </Text>
        <Text fontSize={14} mb={2}>
          A multi-integration personal assistant chatbot connecting Google
          Calendar, Notion, Slack, and Telegram for unified daily task and
          scheduling management.
        </Text>
        <Link href="https://github.com/jasminelim327/fluffy-fiesta" isExternal>
          <Button size="sm" variant="outline" colorScheme="teal" leftIcon={<IoLogoGithub />}>
            GitHub
          </Button>
        </Link>
      </Box>
    </Section>

    <Section delay={0.5}>
      <Box w="100%">
        <Box
          h="160px"
          borderRadius="lg"
          bg="linear-gradient(135deg, #2a1a3a, #1a0d2e)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="56px"
          mb={3}
        >
          ✨
        </Box>
        <Text fontSize={16} fontWeight="bold" mb={1}>
          Astrology Bot
        </Text>
        <Text fontSize={14} mb={2}>
          A daily newsletter bot that delivers personalised cosmic insights and
          productivity alignment tips — helping users channel their energy
          intentionally each day.
        </Text>
        <Link href="https://github.com/jasminelim327/astrology-bot" isExternal>
          <Button size="sm" variant="outline" colorScheme="purple" leftIcon={<IoLogoGithub />}>
            GitHub
          </Button>
        </Link>
      </Box>
    </Section>

    <Section delay={0.5}>
      <Box w="100%">
        <Box
          h="160px"
          borderRadius="lg"
          bg="linear-gradient(135deg, #1a2a3a, #0d1e2e)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="56px"
          mb={3}
        >
          🎯
        </Box>
        <Text fontSize={16} fontWeight="bold" mb={1}>
          Interview Prep
        </Text>
        <Text fontSize={14} mb={2}>
          A gamified interview prep platform with XP-based progression, mock AI
          interviews powered by Claude, and a 16-week FAANG roadmap — built on
          focus, not willpower.
        </Text>
        <Link href="https://interview-prep-dgb.pages.dev/" isExternal>
          <Button size="sm" variant="outline" colorScheme="blue" leftIcon={<IoApps />}>
            Live Demo
          </Button>
        </Link>
      </Box>
    </Section>
  </SimpleGrid>
  ```

- [ ] **Step 2: Check imports in `pages/works.js`**

  The new JSX uses `Link`, `Button`, `Text`, `Box`, `SimpleGrid`, `Heading` from `@chakra-ui/react` and `IoLogoGithub`, `IoApps` from `react-icons/io5`. Check the existing imports at the top of `pages/works.js` and add anything missing.

  Current imports in works.js include `Container, Heading, SimpleGrid, Text, Box, Image` from chakra and `Section`, `WorkGridItem`. Add `Link` and `Button` to the chakra import, and add an import for the icons:

  ```jsx
  import { Container, Heading, SimpleGrid, Text, Box, Image, Link, Button } from '@chakra-ui/react'
  import { IoLogoGithub, IoApps } from 'react-icons/io5'
  ```

- [ ] **Step 3: Verify in browser**

  Open `http://localhost:3000/works`. Scroll to the bottom. Check:
  - "🤖 AI & Bots" heading and subtitle visible
  - 3 cards visible: Fluffy Fiesta Bot, Astrology Bot, Interview Prep
  - Each card has a coloured gradient background with emoji
  - GitHub / Live Demo buttons are present and link correctly

- [ ] **Step 4: Commit**

  ```bash
  git add pages/works.js
  git commit -m "feat: add AI & Bots section with Fluffy Fiesta Bot, Astrology Bot, Interview Prep"
  ```

---

## Done Checklist

- [ ] All `xxxxxxx` prefixes removed from tag labels
- [ ] Stray `Firebase Tag` text nodes removed
- [ ] Onloop dates show `Jan 2024 – Sep 2024`
- [ ] Intro says "close to 2 years of professional experience"
- [ ] Credit Suisse logo is 100×100px
- [ ] Stealth Startup entry visible at top of timeline with teal dot
- [ ] Timeline connecting lines render between all entries
- [ ] Last entry (Ensign) has no trailing line
- [ ] AI & Bots section shows 3 new project cards on `/works`
- [ ] All links (GitHub × 2, Live Demo × 1) point to correct URLs
- [ ] `yarn build` completes with no errors
