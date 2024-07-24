import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
// import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
// import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
// import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inapp" title="In-App Feedback Solution" thumbnail={thumbInkdrop}>
            SDK designed to provide easily integrable feedback collection and tracking components for existing web and mobile applications 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="crissy"
            title="Crissy"
            thumbnail={thumbWalknote}
          >
            A platform that allows users to post questions related to workplace issues, bias awareness, diversity, and inclusion
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="shopmytee"
            title="ShopMyTee"
            thumbnail={thumbFourPainters}
          >
           An e-commerce platform, built and deployed using Amazon Web Services (AWS)
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="limkopi" thumbnail={thumbMenkiki} title="LimKopi">
          A mobile application designed to bridge the cross-generational gap and empower the silver generation.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Hackathons
        </Heading>
      </Section> */}

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="finda" thumbnail={thumbMargelo} title="Finda">
          An investment tool aimed at enhancing financial literacy through gamified and experiential learning
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="daily"
            thumbnail={thumbModeTokyo}
            title="daily"
          >
            A Flutter-based mobile application aimed at enhancing the accessibility of public donations for non-profit organizations (NPOs)
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="buddy" thumbnail={thumbStyly} title="buddy">
           An AI-powered journaling app designed to help users analyze their feelings and provide personalized recommendations to improve their well-being
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section> */}
        {/* <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
