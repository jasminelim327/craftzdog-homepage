import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="buddy">
    <Container>
      <Title>
        buddy <Badge>2024</Badge>
      </Title>
      <P>
      an AI-powered journaling app designed to help users analyze their feelings and provide personalized recommendations to improve their well-being. This app leverages advanced AI techniques to understand user emotions and references credible sources such as books and renowned psychologists like Freud and Jung for its suggestions.
      </P>

      renowned psychologists like Freud and Jung for its suggestions.
Features:
Emotion Analysis: Uses natural language processing (NLP) to analyze journal entries and identify the user's emotional state.
Personalized Recommendations: Provides tailored advice and coping strategies based on the user's emotions, referencing psychological theories and literature.
Reference Integration: Offers insights and recommendations from reputable sources, including books and works by psychologists such as Freud and Jung.
User-Friendly Interface: Designed to be intuitive and engaging, encouraging regular journaling and self-reflection.
Tech Stack:
Frontend: React Native for cross-platform mobile application development.
Backend: Go or Java for handling API requests and server-side logic.
Database: MongoDB for storing user data and journal entries.
AI/ML: Python with libraries such as TensorFlow and NLTK for emotion analysis and recommendation engine.
API Integration: Access to external databases and references for sourcing information from books and psychological literature.
Impact:
Enhanced Self-Awareness: Helps users gain a deeper understanding of their emotions and mental state.
Improved Mental Health: Provides actionable recommendations to improve well-being based on credible psychological theories.
Educational Value: Introduces users to psychological concepts and literature, fostering a deeper appreciation for mental health.
Future Development:
Expanding Reference Sources: Integrating more diverse sources, including contemporary psychological research and self-help literature.
Advanced Personalization: Enhancing the recommendation engine with machine learning algorithms to better understand and cater to individual user needs.
Community Features: Allowing users to share their experiences and support each other within the app.

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, PHP</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://styly.cc/">
            STYLY <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/YLdHAggLBCw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>

      <WorkImage src="/images/works/styly_eyecatch.png" alt="STYLY" />
      <WorkImage src="/images/works/styly_01.png" alt="STYLY" />
      <WorkImage src="/images/works/styly_02.png" alt="STYLY" />
      <WorkImage src="/images/works/styly_03.png" alt="STYLY" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
