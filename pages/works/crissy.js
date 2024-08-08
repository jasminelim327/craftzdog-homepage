import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Text,
  HStack,
  Tag,
  TagLeftIcon,
  Heading,
  TagLabel,
  Divider
  
} from '@chakra-ui/react'
import Section from '../../components/section'

import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import { CheckCircleIcon, StarIcon } from '@chakra-ui/icons'

import { TbBrandNodejs, TbDeviceDesktop, TbDeviceMobile } from "react-icons/tb";
import {SiJavascript, SiReact} from "react-icons/si"

import { DiMsqlServer } from "react-icons/di";

const Work = () => (
  <Layout title="Crissy">
    <Container>
      <Section delay={0.1}>
      <Title>
        Crissy <Badge>2023</Badge>
      </Title>
      <P>
      Crissy, a platform that allows users to post questions related to workplace issues, bias awareness, diversity, and inclusion. Users receive answers from experts in the field, helping them gain insights, different perspectives, and expert advice on addressing specific challenges or situations in the workplace.
      </P>
      <br></br><br></br>
  
      <WorkImage src="/images/works/crissy1.png" alt="walknote" />
        <WorkImage src="/images/works/crissy2.png" alt="walknote" />
      <WorkImage src="/images/works/crissy3.png" alt="walknote" />    
      </Section>
        
        
    <Section delay={0.3}>
    <List mx={2} my={2} p={2}>
      <ListItem mb={4}>
      <Meta>Source Code</Meta>
      <Link>https://github.com/jasminelim327/Crissy</Link>
      </ListItem>
       <ListItem  mb={4}> 
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
                <TagLeftIcon boxSize="15px" as={TbBrandNodejs} />
                <TagLabel>NodeJS</TagLabel>
              </Tag>

              {/* Database Tag */}
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="gray"
              >
                <TagLeftIcon boxSize="15px" as={DiMsqlServer} />
                <TagLabel>MSQL</TagLabel>
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

               {/* Node.js Tag */}
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="gray"
              >
                <TagLeftIcon boxSize="15px" as={SiReact} />
                <TagLabel> React</TagLabel>
              </Tag>

            </HStack>
            </ListItem>

            <ListItem>
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
        </ListItem>
        <br></br>
            
        <ListItem>
        <Meta>Impact</Meta>
        <br></br>
        <br></br>

        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))' >
   
  <Card colorScheme="gray">
    <CardHeader> 
      <Heading size='md'> <StarIcon /> Provided a platform for open discussions on workplace bias and diversity </Heading>
    </CardHeader>
    <CardBody>
      <Text> Facilitated access to expert advice, promoting a more inclusive work environment.</Text>
    </CardBody>
  </Card>
</SimpleGrid>
</ListItem>
<br></br>

<ListItem>
        <Meta>Key Features</Meta>
        <br></br>
        <br></br>

        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))' >
   
  <Card colorScheme="gray">
    <CardHeader> 
      <Heading size='md'> <CheckCircleIcon /> Get woke about unconscious biasness at workplace</Heading>
    </CardHeader>
    <CardBody>
      <Text>
      Users are able to post questions/ opinion related to their personal experience on unconscious biasness
      <Divider orientation='horizontal' my={2} />
Users and able search content based on tags and interact with other users through comments and reactions to the post
<Divider orientation='horizontal' my={2} />
Users can get updates on their posts and comments through in-app notifications

</Text>
    </CardBody>
  </Card>
</SimpleGrid>
</ListItem>

        </List>
        </Section>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
