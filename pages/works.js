import { Container, Heading, SimpleGrid,Text, Box, Image  } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbCrissy from '../public/images/works/crissy1.png'
import thumbInApp from '../public/images/works/mtech1.png'
import shopmytee1 from '../public/images/works/shopmytee1.png'
import thumbLimkopi from '../public/images/works/limkopi1.png'
import findaThumbnail from '../public/images/works/finda1.png'
import thumbDaily from '../public/images/works/daily1.png'
// import thumbStyly from '../public/images/works/styly_eyecatch.png'
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
          <WorkGridItem id="inapp" title="In-App Feedback Solution" thumbnail={thumbInApp}>
            SDK designed to provide easily integrable feedback collection and tracking components for existing web and mobile applications 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="crissy"
            title="Crissy"
            thumbnail={thumbCrissy}
          >
            A platform that allows users to post questions related to workplace issues, bias awareness, diversity, and inclusion
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="shopmytee"
            title="ShopMyTee"
            thumbnail={shopmytee1}
          >
           An e-commerce platform, built and deployed using Amazon Web Services (AWS)
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="limkopi" thumbnail={thumbLimkopi} title="LimKopi">
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
          <WorkGridItem id="finda" thumbnail={findaThumbnail} title="Finda">
          An investment tool aimed at enhancing financial literacy through gamified and experiential learning
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
        <WorkGridItem
            id="daily"
            thumbnail={thumbDaily}
            title="daily"
          >
            A Flutter-based mobile application aimed at enhancing the accessibility of public donations for non-profit organizations (NPOs)
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>

        <br/>
        <Heading as="h3" fontSize={20} mb={4}>
        🔥  Up and Coming!
        </Heading>

        <Box w="100%" textAlign="center">
        <Image
          src="images/works/styly_eyecatch.png"
          alt={'buddy'}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
          <Text mt={2} fontSize={20}>
            buddy
          </Text>
        <Text fontSize={14}> An AI-powered journaling app designed to help users analyze their feelings and provide personalized recommendations to improve their well-being
        </Text>
  </Box>
          {/* <WorkGridItem id="buddy" thumbnail={thumbStyly} title="buddy">
          </WorkGridItem> */}
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
