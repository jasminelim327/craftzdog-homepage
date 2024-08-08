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
} from '@chakra-ui/react'
import Section from '../../components/section'
import { TbBrandNodejs, TbDeviceDesktop, TbDeviceMobile } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import {SiJavascript, SiReact} from "react-icons/si"
/* eslint-disable react/no-unescaped-entities */
import { CheckCircleIcon, StarIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="In-App Feedback Solution">
    <Container>
    <Section delay={0.1}>
      <Title>
      In-App Feedback Solution <Badge>2024</Badge>
      </Title>
      <P>
      Web applications often require additional components to improve functionality and user experience. However, integrating these components can be challenging and time-consuming. There is a need for a solution that simplifies this process while providing valuable insights through comprehensive metrics.<br></br>
      <br></br>
      The SDK that my team has developed addresses this need by offering pre-built components that can be seamlessly integrated into any web application. It collects metrics to evaluate the performance and user experience, categorized into Effectiveness, Efficiency, and Satisfaction
      </P>
    <br/>
    </Section>
       {/* edit this for images */}

       
      

      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/-qBavwqc_mY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> */}

    <List mx={2} my={2} p={2}>
    <Section delay={0.3}>
       <ListItem  mb={4}> 

       <WorkImage src="/images/works/mtech1.png" alt="Inkdrop" />
      <WorkImage src="/images/works/mtech3.png" alt="Inkdrop" />
      <WorkImage src="/images/works/mtech4.png" alt="Inkdrop" />

      <Meta> Technical Stacks</Meta>
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
        </Section>
        <ListItem>
        <Section delay={0.5}>
        <br></br>
        

          <Meta>Key Features</Meta>
          <br></br>
          <br></br>

  <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))' >
   
  <Card colorScheme="gray">
    <CardHeader> 
      <Heading size='md'> <StarIcon />  Offers Ease of Integration, Comprehensive Metrics, and it is Scalable and Robust </Heading>
    </CardHeader>
    <CardBody>
      <Text>The SDK components can be quickly added to existing web applications, minimizing development time.</Text>Detailed insights into application performance and user satisfaction. Built with modern technologies to ensure scalability and reliability.
    </CardBody>
  </Card>
</SimpleGrid>
</Section>
        </ListItem>
        <ListItem>

        <Meta>Key Impacts</Meta>
          <br></br>
          <br></br>

  <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))' >
  <Card colorScheme="gray">
    <CardHeader> 
      <Heading size='md'> <CheckCircleIcon /> Enhanced User Experience with Minimal Effort</Heading>
    </CardHeader>
    <CardBody>
      <Text>Enhanced application functionality with minimal integration effort.
Improved decision-making through actionable metrics.
Increased user satisfaction and efficiency.</Text>
    </CardBody>
  </Card>
  
</SimpleGrid>

        </ListItem>
        {/* <ListItem>
          <Meta>Link to Demo</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
