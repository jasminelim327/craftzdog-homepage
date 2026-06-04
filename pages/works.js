import { Container, Heading, SimpleGrid, Text, Box, Link, Button, Divider, Badge } from '@chakra-ui/react'
import { IoLogoGithub, IoApps } from 'react-icons/io5'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbCrissy from '../public/images/works/crissy1.png'
import thumbInApp from '../public/images/works/mtech1.png'
import shopmytee1 from '../public/images/works/shopmytee1.png'
import thumbLimkopi from '../public/images/works/limkopi1.png'
import findaThumbnail from '../public/images/works/finda1.png'
import thumbDaily from '../public/images/works/daily1.png'

const BotCard = ({ href, gradient, emoji, title, year, description, children }) => (
  <NextLink href={href} passHref scroll={false}>
    <Box w="100%" cursor="pointer" role="group">
      <Box
        h="160px"
        borderRadius="lg"
        bg={gradient}
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="56px"
        mb={3}
        transition="opacity 0.2s"
        _groupHover={{ opacity: 0.85 }}
      >
        {emoji}
      </Box>
      <Text fontSize={20} mt={2} mb={1}>
        {title}
        {year && (
          <Badge ml={2} colorScheme="teal" fontSize="0.55em" verticalAlign="middle">
            {year}
          </Badge>
        )}
      </Text>
      <Text fontSize={14} mb={2}>{description}</Text>
      {children}
    </Box>
  </NextLink>
)

const YearHeading = ({ year }) => (
  <Box mt={8} mb={4}>
    <Heading as="h4" fontSize={15} color="gray.500" letterSpacing="widest" textTransform="uppercase">
      {year}
    </Heading>
    <Divider mt={2} />
  </Box>
)

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      {/* ── 2024 ── */}
      <Section delay={0.0}>
        <YearHeading year="2024" />
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem id="inapp" title="In-App Feedback Solution" thumbnail={thumbInApp} year="2024">
            SDK designed to provide easily integrable feedback collection and tracking components for existing web and mobile applications
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <BotCard
            href="/works/fluffy-fiesta"
            gradient="linear-gradient(135deg, #1a3a1a, #0d2e0d)"
            emoji="🐾"
            title="Fluffy Fiesta Bot"
            year="2024"
            description="A multi-integration personal assistant chatbot connecting Google Calendar, Notion, Slack, and Telegram for unified daily task and scheduling management."
          >
            <Link href="https://github.com/jasminelim327/fluffy-fiesta" isExternal onClick={e => e.stopPropagation()}>
              <Button size="sm" variant="outline" colorScheme="teal" leftIcon={<IoLogoGithub />}>
                GitHub
              </Button>
            </Link>
          </BotCard>
        </Section>

        <Section delay={0.1}>
          <BotCard
            href="/works/astrology-bot"
            gradient="linear-gradient(135deg, #2a1a3a, #1a0d2e)"
            emoji="✨"
            title="Astrology Bot"
            year="2024"
            description="A daily newsletter bot that delivers personalised cosmic insights and productivity alignment tips — helping users channel their energy intentionally each day."
          />
        </Section>

        <Section delay={0.1}>
          <BotCard
            href="/works/interview-prep"
            gradient="linear-gradient(135deg, #1a2a3a, #0d1e2e)"
            emoji="🎯"
            title="Interview Prep"
            year="2024"
            description="A gamified interview prep platform with XP-based progression, mock AI interviews powered by Claude, and a 16-week FAANG roadmap — built on focus, not willpower."
          >
            <Link href="https://interview-prep-dgb.pages.dev/" isExternal onClick={e => e.stopPropagation()}>
              <Button size="sm" variant="outline" colorScheme="blue" leftIcon={<IoApps />}>
                Live Demo
              </Button>
            </Link>
          </BotCard>
        </Section>
      </SimpleGrid>

      {/* ── 2023 ── */}
      <Section delay={0.2}>
        <YearHeading year="2023" />
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="crissy" title="Crissy" thumbnail={thumbCrissy} year="2023">
            A platform that allows users to post questions related to workplace issues, bias awareness, diversity, and inclusion
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem id="limkopi" thumbnail={thumbLimkopi} title="LimKopi" year="2023">
            A mobile application designed to bridge the cross-generational gap and empower the silver generation.
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem id="shopmytee" title="ShopMyTee" thumbnail={shopmytee1} year="2023">
            An e-commerce platform, built and deployed using Amazon Web Services (AWS)
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* ── 2022 ── */}
      <Section delay={0.4}>
        <YearHeading year="2022" />
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="finda" thumbnail={findaThumbnail} title="Finda" year="2022">
            An investment tool aimed at enhancing financial literacy through gamified and experiential learning
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem id="daily" thumbnail={thumbDaily} title="daily" year="2022">
            A Flutter-based mobile application aimed at enhancing the accessibility of public donations for non-profit organizations (NPOs)
          </WorkGridItem>
        </Section>
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
