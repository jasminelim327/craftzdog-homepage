import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="In-App Feedback Solution">
    <Container>
      <Title>
      In-App Feedback Solution <Badge>2024</Badge>
      </Title>
      <P>
      Web applications often require additional components to improve functionality and user experience. However, integrating these components can be challenging and time-consuming. There is a need for a solution that simplifies this process while providing valuable insights through comprehensive metrics.<br></br>
      <br></br>
      The SDK that my team has developed addresses this need by offering pre-built components that can be seamlessly integrated into any web application. It collects metrics to evaluate the performance and user experience, categorized into Effectiveness, Efficiency, and Satisfaction.

      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Technology Stack</Meta> <span>Frontend: React, JavaScript
Backend: Node.js
Database: AzureSQL</span>



        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Electron, React Native</span>

          Key Features:
Ease of Integration: The SDK components can be quickly added to existing web applications, minimizing development time.
Comprehensive Metrics: Detailed insights into application performance and user satisfaction.
Scalable and Robust: Built with modern technologies to ensure scalability and reliability.
Impact:
Enhanced application functionality with minimal integration effort.
Improved decision-making through actionable metrics.
Increased user satisfaction and efficiency.

        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
      <WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/-qBavwqc_mY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
