import {
  Container,
  Badge,
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
import Layout from '../../components/layouts/article'
import {  StarIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Section from '../../components/section'
import { TbBrandAmazon, TbBrandReact, TbTrophy } from 'react-icons/tb'
import {SiJavascript} from "react-icons/si"

const Work = () => (
  <Layout title="Finda">
    <Container>
    <Section delay={0.1}>

      <Title>
      Finda <Badge>2022</Badge>
      </Title>
      <P>
      Finda, an investment tool aimed at enhancing financial literacy through gamified and experiential learning. Built during the Ellipsis x Goldman Sachs x AWS Hackathon 2021, the project aimed to offer access to financial inclusion.
      </P>
    </Section>


      <List ml={4} my={4}>
      <ListItem>
      <Section delay={0.3}>
        <Tag size={'md'} key={'md'} variant='outline' colorScheme='teal'>
        <TagLeftIcon as={TbTrophy} />
          <TagLabel>Semi-Finalist @ Ellipsis x Goldman Sachs x AWS Hackathon 2021</TagLabel>
        </Tag>
        <br/>
        <br/>

        <WorkImage src="/images/works/finda1.png" alt="menkiki" />
        <WorkImage src="/images/works/finda2.png" alt="menkiki" />
        </Section>
    </ListItem>
    <Section delay={0.8}>

        <ListItem>
        

        </ListItem>
        <ListItem>
          <Meta>Tech Stack</Meta>
          <br/><br/>
          <HStack spacing={2}>
              {/* Vue.js Tag */}
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="gray"
              >
                <TagLeftIcon boxSize="15px" as={TbBrandAmazon} />
                <TagLabel>Amazon Web Services</TagLabel>
              </Tag>

              {/* Database Tag */}
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="gray"
              >
                <TagLeftIcon boxSize="15px" as={TbBrandReact} />
                <TagLabel>React</TagLabel>
              </Tag>

              {/* JavaScript Tag */}
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="gray"
              >
                <TagLeftIcon boxSize="15px" as={SiJavascript} />
                <TagLabel>JavaScript</TagLabel>
              </Tag>
            </HStack>

        </ListItem>
        </Section>
        <ListItem>
        <Meta>Key Impacts</Meta>
 <br />
 <br />

        <Section delay={0.8}>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))' >
   
        <Card colorScheme="gray">
          <CardHeader> 
            <Heading size='md'> <StarIcon /> Empowering the Younger Generation to Pick Up Financial Literacy</Heading>
          </CardHeader>
          <CardBody>
            <Text>Developed a Duolingo dupe on financial knowledge across different literacy level
            <Divider orientation='horizontal' my={2} />Thoughtful designs to ease the learning curve<Divider orientation='horizontal' my={2}  />
            Facilitate learning and hands-on experience with investment
            <Divider orientation='horizontal' my={2} />
            Increased user knowledge and confidence in financial investments.
            <Divider orientation='horizontal' my={2} />
Provided a scalable and efficient platform for financial education.
      </Text>
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
