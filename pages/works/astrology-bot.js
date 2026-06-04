import {
  Container,
  Badge,
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
import { IoLogoNodejs, IoMailOutline, IoCalendarOutline } from 'react-icons/io5'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Astrology Bot">
    <Container>
      <Section delay={0.1}>
        <Title>
          Astrology Bot <Badge>2026</Badge>
        </Title>
        <P>
          A daily newsletter bot that delivers personalised cosmic insights and productivity
          alignment tips — helping users understand their energy patterns and channel them
          intentionally throughout the day. Inspired by the idea that self-awareness and timing
          can meaningfully improve how we work and make decisions.
        </P>
      </Section>

      <Section delay={0.3}>
        <List mx={2} my={2} p={2}>

          <ListItem mb={4}>
            <Meta>Tech Stack</Meta>
            <br /><br />
            <HStack spacing={2} flexWrap="wrap">
              <Tag size="md" variant="solid" borderRadius="full" colorScheme="gray">
                <TagLeftIcon boxSize="15px" as={IoLogoNodejs} />
                <TagLabel>Node.js</TagLabel>
              </Tag>
              <Tag size="md" variant="solid" borderRadius="full" colorScheme="gray">
                <TagLeftIcon boxSize="15px" as={IoMailOutline} />
                <TagLabel>Newsletter / Email API</TagLabel>
              </Tag>
              <Tag size="md" variant="solid" borderRadius="full" colorScheme="gray">
                <TagLeftIcon boxSize="15px" as={IoCalendarOutline} />
                <TagLabel>Scheduled Jobs</TagLabel>
              </Tag>
            </HStack>
          </ListItem>

          <ListItem>
            <Meta>Key Features</Meta>
            <br /><br />
            <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
              <Card>
                <CardHeader>
                  <Heading size="md"><CheckCircleIcon mr={2} />Daily Personalised Insights</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Sends a daily digest with cosmic insights tailored to help users align their energy with the work ahead.</Text>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <Heading size="md"><CheckCircleIcon mr={2} />Productivity Alignment Tips</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Goes beyond horoscopes — each message includes actionable recommendations for focus, creativity, and decision-making.</Text>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <Heading size="md"><CheckCircleIcon mr={2} />Automated Scheduling</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Fully automated delivery via scheduled jobs — no manual triggers needed, content arrives at the right time each day.</Text>
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
