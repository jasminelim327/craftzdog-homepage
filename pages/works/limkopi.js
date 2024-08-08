import {
  Badge,
  List,
  ListItem,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody, 
  Text,
  Container,
  Heading,
  Tag,
  TagLeftIcon,
  TagLabel,
  HStack,  
  Divider
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import {  TbDeviceDesktop, TbDeviceMobile, TbTrophy } from 'react-icons/tb'
import Section from '../../components/section'
import {SiJavascript} from "react-icons/si"
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import { TbBrandFirebase, TbBrandReact } from 'react-icons/tb'

const Work = () => (
  <Layout title="lim-kopi">
    <Container>
    <Section delay={0.1}>
      <Title>
        Limkopi <Badge>2023</Badge>
      </Title>
      <P>
      Mobile application designed to bridge the cross-generational gap and empower the silver generation. Built during the Ellipsis Hackathon 2023, the platform enhances user experience and engagement through functionalities like peer-to-peer learning and gamified learning.
      </P>
    </Section>

    

      <List ml={4} my={4}>
        <ListItem>
        <Tag size={'md'} key={'md'} variant='outline' colorScheme='teal'>
    <TagLeftIcon as={TbTrophy} />
      <TagLabel>2nd Runner-up @ Ellipsis Hackathon 2023</TagLabel>
    </Tag>
    <br/>
    <br/>
        <Section delay={0.3}>
        <WorkImage src="/images/works/limkopi2.png" alt="menkiki" />
        <WorkImage src="/images/works/limkopi3.png" alt="menkiki" />
        </Section>

        </ListItem>

        <ListItem>
        <Section delay={0.3}>

          <Meta>Technical Stack</Meta>
          <br/><br/>
          <HStack spacing={2}>
              {/* Vue.js Tag */}
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="gray"
              >
                <TagLeftIcon boxSize="15px" as={TbBrandFirebase} />
                <TagLabel>Firebase</TagLabel>
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
            </Section>
        </ListItem>
        <ListItem>
        <Section delay={0.5}>

        <Meta>Platform</Meta>
        <br></br>
        <br></br>
            <HStack spacing={2}>
              {/* Vue.js Tag */}
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="gray"
              >
                <TagLeftIcon boxSize="15px" as={TbDeviceMobile} />
                <TagLabel> Mobile</TagLabel>
              </Tag>

              {/* Firebase Tag */}
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="gray"
              >
                <TagLeftIcon boxSize="15px" as={TbDeviceDesktop} />
                <TagLabel>Desktop</TagLabel>
              </Tag>
            </HStack>
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
            <Heading size='md'> <StarIcon />Empowering the Silver Generation & Bridge the Intergenerational Gap</Heading>
          </CardHeader>
          <CardBody>
            <Text>Developed a network to enhance the cohesion between the millenials and silver generation
            <Divider orientation='horizontal' my={2} />Thoughtful designs to ease the learning curve for silver generation <Divider orientation='horizontal' my={2}  />
            Facilitate learning and communications in different dialects 
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
