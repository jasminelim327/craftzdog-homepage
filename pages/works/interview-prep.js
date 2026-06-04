import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Text,
  HStack,
  Tag,
  TagLeftIcon,
  TagLabel,
  Heading,
} from '@chakra-ui/react'
import { CheckCircleIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { IoApps, IoTrophyOutline, IoSparklesOutline } from 'react-icons/io5'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Interview Prep">
    <Container>
      <Section delay={0.1}>
        <Title>
          Interview Prep <Badge>2024</Badge>
        </Title>
        <P>
          A gamified interview preparation platform built on the principle of focus, not willpower.
          Rather than cramming, it uses structured time-boxed sessions, XP-based progression, and
          mock AI interviews powered by Claude to help you build real interview readiness through
          consistent, intentional practice — targeting big tech companies on a 16-week roadmap.
        </P>
      </Section>

      <Section delay={0.3}>
        <List mx={2} my={2} p={2}>

          <ListItem mb={4}>
            <Meta>Live Demo</Meta>
            <Link href="https://interview-prep-dgb.pages.dev/" isExternal>
              https://interview-prep-dgb.pages.dev/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem mb={4}>
            <Meta>Tech Stack</Meta>
            <br /><br />
            <HStack spacing={2} flexWrap="wrap">
              <Tag size="md" variant="solid" borderRadius="full" colorScheme="gray">
                <TagLeftIcon boxSize="15px" as={IoApps} />
                <TagLabel>HTML / Vanilla JS</TagLabel>
              </Tag>
              <Tag size="md" variant="solid" borderRadius="full" colorScheme="gray">
                <TagLeftIcon boxSize="15px" as={IoSparklesOutline} />
                <TagLabel>Claude AI API</TagLabel>
              </Tag>
              <Tag size="md" variant="solid" borderRadius="full" colorScheme="gray">
                <TagLeftIcon boxSize="15px" as={IoTrophyOutline} />
                <TagLabel>Cloudflare Pages</TagLabel>
              </Tag>
            </HStack>
          </ListItem>

          <ListItem mb={4}>
            <Meta>Platform</Meta>
            <br /><br />
            <HStack spacing={2}>
              <Tag size="md" variant="solid" borderRadius="full" colorScheme="gray">
                <TagLabel>Web (PWA)</TagLabel>
              </Tag>
            </HStack>
          </ListItem>

          <ListItem>
            <Meta>Key Features</Meta>
            <br /><br />
            <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
              <Card>
                <CardHeader>
                  <Heading size="md"><CheckCircleIcon mr={2} />XP-Based Progression</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Earn XP for every session, streak bonus, and reflection — gamified consistency that keeps you coming back.</Text>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <Heading size="md"><CheckCircleIcon mr={2} />Mock AI Interviews</Heading>
                </CardHeader>
                <CardBody>
                  <Text>45-minute mock sessions powered by Claude — realistic interview simulation with instant feedback.</Text>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <Heading size="md"><CheckCircleIcon mr={2} />16-Week FAANG Roadmap</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Structured curriculum targeting FAANG and tier-1 companies, broken into weekly focus areas with clear milestones.</Text>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <Heading size="md"><CheckCircleIcon mr={2} />Journal & Reflection</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Built-in session journaling and an activity calendar to track growth and identify patterns over time.</Text>
                </CardBody>
              </Card>
            </SimpleGrid>
          </ListItem>

        </List>
      </Section>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
