
import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="daily">
    <Container>
      <Title>
        daily <Badge>2022</Badge>
      </Title>
      <P>a Flutter-based mobile application aimed at enhancing the accessibility of public donations for non-profit organizations (NPOs). The project, built during the Google x Women in Tech Ignite Program, integrates key features to streamline the donation process and foster a sense of community.
      </P>
      <P>
      Source Code: Project Daily App on GitHub
Slides: Project Daily App Presentation
Achievements:
Finalist among 25 teams in the Google x Women in Tech Ignite Program – Product Sprint.
Tech Stack:
Mobile Framework: Flutter
Key Features:
Payment Channel: Integrated seamless payment processing for donations.
Community Feed: Created a platform for NPOs to share updates and engage with donors.
Rewards System: Implemented a gamified rewards system to incentivize donations.
Impact:
Increased Donations: Enhanced donation accessibility, driving higher contributions.
Community Engagement: Fostered a stronger sense of community among donors and NPOs.
Innovative Approach: Introduced a gamified method to charitable giving, making it more engaging and rewarding.</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Swift</span>
        </ListItem>
        <ListItem>
          <Meta>Press release</Meta>
          <Link href="https://www.isid.co.jp/english/news/release/2015/pdf/20150930_ModeTokyo.pdf">
            ISID Starts a Research Project to Visualize Impact of Media Contents
            on Visit of Foreign High-Intellect Class to Japan{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Press release</Meta>
          <Link href="https://innolab.jp/news/achievement/335">
            メディアコンテンツが訪日行動に与える影響を可視化する研究プロジェクトを始動{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/modetokyo_eyecatch.png" alt="mode.tokyo" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/modetokyo_01.png" alt="mode.tokyo" />
        <WorkImage src="/images/works/modetokyo_02.png" alt="mode.tokyo" />
      </SimpleGrid>
      <WorkImage src="/images/works/modetokyo_03.jpg" alt="mode.tokyo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
