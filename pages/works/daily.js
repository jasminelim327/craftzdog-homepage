
import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Tag,
  TagLeftIcon,
  TagLabel,
  HStack,
  SimpleGrid,
  CardHeader,
  Card,
  Heading,
  CardBody,
  Text,
  Divider

} from '@chakra-ui/react'
import Section from '../../components/section'
import Layout from '../../components/layouts/article'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import { CheckCircleIcon, StarIcon } from '@chakra-ui/icons'
import { TbBrandFlutter, TbTrophy } from 'react-icons/tb'


const Work = () => (
  <Layout title="daily">
    <Container>
      <Title>
        Daily <Badge>2022</Badge>
      </Title>
      <P>A Flutter-based mobile application aimed at enhancing the accessibility of public donations for non-profit organizations (NPOs). The project, built during the Google x Women in Tech Ignite Program, integrates key features to streamline the donation process and foster a sense of community.
      </P>
      <List ml={4} my={4}>
      <ListItem>
      <Section delay={0.3}>
        <Tag size={'md'} key={'md'} variant='outline' colorScheme='teal'>
        <TagLeftIcon as={TbTrophy} />
          <TagLabel>Finalist @ Google x Women in Tech Ignite Program </TagLabel>
        </Tag>
        <br/>
        <br/>

        <WorkImage src="/images/works/daily2.png" alt="menkiki" />
        <WorkImage src="/images/works/daily3.png" alt="menkiki" />
        <WorkImage src="/images/works/daily4.png" alt="menkiki" />

        </Section>
        </ListItem>

        <ListItem mb={4}>
          <Meta>Source Code</Meta>
          <Link>https://github.com/y4nrui/project-daily-app</Link>
          </ListItem>
        
          <ListItem>
          <Meta>Tech Stack</Meta>
          <br/><br/>
          <HStack spacing={0}>
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="gray"
              >
                <TagLeftIcon boxSize="15px" as={TbBrandFlutter} />
                <TagLabel>Flutter</TagLabel>
              </Tag>
          </HStack>
          </ListItem>
      <br />
        <ListItem>
        <Meta>Key Features </Meta>
 <br />
 <br />

        <Section delay={0.8}>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))' >
   
        <Card colorScheme="gray">
          <CardHeader> 
            <Heading size='md'> <CheckCircleIcon /> A Social App dedicated for like -minded donors and charity organizations</Heading>
          </CardHeader>
          <CardBody>
            <Text>Payment Channel: Integrated seamless payment processing for donations.
            <Divider orientation='horizontal' my={2} />Community Feed: Created a platform for NPOs to share updates and engage with donors.<Divider orientation='horizontal' my={2}  />
            Rewards System: Implemented a gamified rewards system to incentivize donations.
      </Text>
          </CardBody>
        </Card>
      </SimpleGrid>
          </Section>
        </ListItem>


        <ListItem>
        <Meta>Key Impacts</Meta>
 <br />
 <br />

        <Section delay={0.8}>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))' >
   
        <Card colorScheme="gray">
          <CardHeader> 
            <Heading size='md'> <StarIcon />  Boost Awareness and Educate the Public on the Charity Community in Singapore</Heading>
          </CardHeader>
          <CardBody>
Community Engagement: Fostered a stronger sense of community among donors and NPOs.

            <Divider orientation='horizontal' my={2} />Community Feed: Created a platform for NPOs to share updates and engage with donors.<Divider orientation='horizontal' my={2}  />
            Innovative Approach: Introduced a gamified method to charitable giving, making it more engaging and rewarding.
          </CardBody>
        </Card>
      </SimpleGrid>
          </Section>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
