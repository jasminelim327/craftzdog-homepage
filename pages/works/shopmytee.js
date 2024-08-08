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
import { CheckCircleIcon, StarIcon } from '@chakra-ui/icons'
import Section from '../../components/section'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { TbBrandAmazon, TbBrandVue, TbDeviceDesktop, TbDeviceMobile } from 'react-icons/tb'
import {SiJavascript} from "react-icons/si"


const Work = () => (
  <Layout title="Shop My Tee">
    <Container>
    <Section delay={0.1}>
      <Title>
      Shop My Tee <Badge>2023</Badge>
      </Title>
      <P>
      Developed and implemented various cloud management features for ShopMyTee.net, an e-commerce platform, using Amazon Web Services (AWS). The project focused on enhancing reliability, performance, operational efficiency, and maintainability
      <br/>
      <br/>

      </P>
      </Section> 
     
      <List ml={4} my={4}>
    <Section delay={0.3}>
    <WorkImage
        src="/images/works/shopmytee2.png"
        alt="walknote"
      />
      <WorkImage
        src="/images/works/shopmytee3.png"
        alt="walknote"
      />
      <WorkImage
        src="/images/works/shopmytee4.png"
        alt="walknote"
      />

        <ListItem>
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
                <TagLeftIcon boxSize="15px" as={TbBrandAmazon} />
                <TagLabel>AWS</TagLabel>
              </Tag>

              {/* Database Tag */}
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="gray"
              >
                <TagLeftIcon boxSize="15px" as={TbBrandVue} />
                <TagLabel>Vue</TagLabel>
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
        <br></br>

        <ListItem>
        <Section delay={0.3}>
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
        <br></br>

        <ListItem>
        <Section delay={0.5}>
        <Meta>Impact</Meta>
        <br></br>
        <br></br>

        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))' >
   
  <Card colorScheme="gray">
    <CardHeader> 
      <Heading size='md'> <StarIcon /> Reliability, Performance, Operational Efficiency and Maintainability for e-Commerce Platform</Heading>
    </CardHeader>
    <CardBody>
      <Text>Achieved high availability and fault tolerance through effective use of AWS services. 
      <Divider orientation='horizontal' my={2} />Enhanced platform performance with optimized resource management and scaling capabilities. <Divider orientation='horizontal' my={2}  />Streamlined operations and maintenance processes, reducing manual intervention.<Divider orientation='horizontal' my={2} />
      Improved maintainability with organized resource management and automated scaling.
</Text>
    </CardBody>
  </Card>
</SimpleGrid>
</Section>
</ListItem>
<br/> 

<ListItem>
        <Meta>Key Features</Meta>
        <br></br>
        <br></br>

        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))' >
   
  <Card colorScheme="gray">
    <CardHeader> 
      <Heading size='md'> <CheckCircleIcon /> AWS: Domain, DNS, SSL, EC2, Load Balancing, Auto-Scaling, RDS, S3.</Heading>
    </CardHeader>
    <CardBody>
      <Text>
      Domain Registration and Management: Utilized AWS services for registering and managing the domain.
      <Divider orientation='horizontal' my={2} />
Route 53: Configured Route 53 for DNS management to ensure efficient traffic routing.
<Divider orientation='horizontal' my={2} />
Certificate Manager: Implemented SSL/TLS certificates to secure the platform.
EC2 Instances: Deployed EC2 instances to handle web and application server workloads.
<Divider orientation='horizontal' my={2} />
Target Groups and Load Balancing: Set up Target Groups and Auto Load Balancing for efficient request handling and distribution.
<Divider orientation='horizontal' my={2} />
Auto-Scaling Group: Configured Auto-Scaling Groups to ensure the platform can handle varying levels of traffic.
<Divider orientation='horizontal' my={2} />
Security Groups: Defined Security Groups to control inbound and outbound traffic to the EC2 instances.
<Divider orientation='horizontal' my={2} />
RDS: Managed relational databases using Amazon RDS for data storage and retrieval.
S3: Utilized Amazon S3 for storing and managing assets, ensuring high availability and durability.

</Text>
    </CardBody>
  </Card>
</SimpleGrid>
</ListItem>
        </Section>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
