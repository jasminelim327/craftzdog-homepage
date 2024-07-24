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
  <Layout title="Margelo">
    <Container>
      <Title>
      finda <Badge>2022</Badge>
      </Title>
      <P>
      Finda, an investment tool aimed at enhancing financial literacy through gamified and experiential learning. Built during the Ellipsis x Goldman Sachs x AWS Hackathon 2021, the project aimed to offer access to financial inclusion.
      </P>
      <P>
      Source Code: Finda on GitHub
Achievements:
Semi-Finalist among 78 teams at the Ellipsis x Goldman Sachs x AWS Hackathon 2021.
Tech Stack:
Frontend: React
Backend: AWS Cloud Services
Key Contributions:
Led the design and solutioning, focusing on responsive design and personalized content.
Collaborated on Cloud Services Architecture, achieving a 20% faster time to market compared to traditional local server methods.
Impact:
Increased user knowledge and confidence in financial investments.
Provided a scalable and efficient platform for financial education.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://margelo.io/" target="_blank">
              https://margelo.io/ <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Next.js / TypeScript / Vercel / Formspree / Fathom / Embla Carousel
          </span>
        </ListItem>
        <ListItem>
          <Meta>Video</Meta>
          <Link href="https://www.youtube.com/watch?v=GznmPACXBlY">
            How I built a software agency website with Next.js + Tailwind CSS
            (in nature) <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/margelo_eyecatch.png" alt="Website" />

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/GznmPACXBlY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>

      <WorkImage src="/images/works/margelo_01.png" alt="Margelo" />
      <WorkImage src="/images/works/margelo_02.png" alt="Margelo" />
      <WorkImage src="/images/works/margelo_03.png" alt="Margelo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
