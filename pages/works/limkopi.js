import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="lim-kopi">
    <Container>
      <Title>
        Limkopi <Badge>2023</Badge>
      </Title>
      <P>
      a mobile application designed to bridge the cross-generational gap and empower the silver generation. Built during the Ellipsis Hackathon 2023, the platform enhances user experience and engagement through functionalities like peer-to-peer learning and gamified learning.
      </P>
      {/* <P>
        So, you can check a shop info as soon as you found a promising ramen
        shop in a food magazine. Let&apos;s go out and have a delicious ramen!
      </P> */}

Achievements:
2nd Runner-up among 80 teams at the Ellipsis Hackathon 2023.
Tech Stack:
Frontend: React
Backend: Firebase
Key Contributions:
Championed front-end design ensuring an elderly-friendly interface.
Integrated peer-to-peer and gamified learning elements.
Ensured a responsive design for an intuitive user experience.
Impact:
Positioned the application favorably among its intended audience.
Enhanced user engagement and learning experience for the elderly.

      <UnorderedList my={4}>
        <ListItem>Ramen shop recommendation based on photo</ListItem>
        <ListItem>Show shops near your current location</ListItem>
        <ListItem>Open in Tabelog/Foursquare</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Objective-C++, Swift, BLVC CaffeNet Model</span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://speakerdeck.com/craftzdog/the-fun-deep-learning">
            The fun Deep Learning <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://speakerdeck.com/craftzdog/caffedeoshou-qing-ben-ge-deipuraninguiosapuri">
            Caffeでお手軽本格ディープラーニングアプリ @potatotips{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/craftzdog/caffe-ios-sample">
            github.com/craftzdog/caffe-ios-sample <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Box align="center" my={6}>
        <Link
          className="link-appstore"
          href="https://itunes.apple.com/app/id1035645520?mt=8"
          target="_blank"
        >
          <Image
            maxW={240}
            src="/images/works/appstore.png"
            className="image-appstore"
            alt="Download on App Store"
          />
        </Link>
      </Box>

      <WorkImage src="/images/works/menkiki_eyecatch.png" alt="menkiki" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/menkiki_01.png" alt="menkiki" />
        <WorkImage src="/images/works/menkiki_02.png" alt="menkiki" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
