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
import { CheckCircleIcon } from '@chakra-ui/icons'
import { IoLogoNodejs, IoCalendarOutline, IoListOutline } from 'react-icons/io5'
import { SiNotion, SiSlack } from 'react-icons/si'
import { TbBrandTelegram } from 'react-icons/tb'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Fluffy Fiesta Bot">
    <Container>
      <Section delay={0.1}>
        <Title>
          Fluffy Fiesta Bot <Badge>2024</Badge>
        </Title>
        <P>
          A multi-integration personal assistant chatbot that connects Google Calendar, Notion,
          Slack, and Telegram into a single conversational interface — helping you manage your day,
          tasks, and notes without switching between apps.
        </P>
      </Section>

      <Section delay={0.3}>
        <List mx={2} my={2} p={2}>

          <ListItem mb={4}>
            <Meta>Source Code</Meta>
            <Link href="https://github.com/jasminelim327/fluffy-fiesta" isExternal>
              https://github.com/jasminelim327/fluffy-fiesta
            </Link>
          </ListItem>

          <ListItem mb={4}>
            <Meta>Tech Stack</Meta>
            <br /><br />
            <HStack spacing={2} flexWrap="wrap">
              <Tag size="md" variant="solid" borderRadius="full" colorScheme="gray">
                <TagLeftIcon boxSize="15px" as={IoLogoNodejs} />
                <TagLabel>Node.js</TagLabel>
              </Tag>
              <Tag size="md" variant="solid" borderRadius="full" colorScheme="gray">
                <TagLeftIcon boxSize="15px" as={IoCalendarOutline} />
                <TagLabel>Google Calendar API</TagLabel>
              </Tag>
              <Tag size="md" variant="solid" borderRadius="full" colorScheme="gray">
                <TagLeftIcon boxSize="15px" as={SiNotion} />
                <TagLabel>Notion API</TagLabel>
              </Tag>
              <Tag size="md" variant="solid" borderRadius="full" colorScheme="gray">
                <TagLeftIcon boxSize="15px" as={SiSlack} />
                <TagLabel>Slack API</TagLabel>
              </Tag>
              <Tag size="md" variant="solid" borderRadius="full" colorScheme="gray">
                <TagLeftIcon boxSize="15px" as={TbBrandTelegram} />
                <TagLabel>Telegram Bot API</TagLabel>
              </Tag>
            </HStack>
          </ListItem>

          <ListItem mb={4}>
            <Meta>Platform</Meta>
            <br /><br />
            <HStack spacing={2}>
              <Tag size="md" variant="solid" borderRadius="full" colorScheme="gray">
                <TagLeftIcon boxSize="15px" as={IoListOutline} />
                <TagLabel>CLI / Bot</TagLabel>
              </Tag>
            </HStack>
          </ListItem>

          <ListItem>
            <Meta>Key Features</Meta>
            <br /><br />
            <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
              <Card>
                <CardHeader>
                  <Heading size="md"><CheckCircleIcon mr={2} />Calendar Management</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Create, view, and manage events across Google Calendar and Apple Calendar through natural conversation.</Text>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <Heading size="md"><CheckCircleIcon mr={2} />Notion Integration</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Create and retrieve Notion pages and database entries directly from the chat interface.</Text>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <Heading size="md"><CheckCircleIcon mr={2} />Multi-Channel Messaging</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Deploy across Slack and Telegram so the assistant lives wherever you work.</Text>
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
