import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
// import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an aspiring software developer based in Singapore!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jasmine Lim Jia Yi
          </Heading>
          <p>Tech Enthusiast / Photographer / Developer </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/jasmine.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          INTRODUCTION

        </Heading>
        <Paragraph>
         Hello, I am Jasmine and I am currently a Penultimate year student
          majoring in Information Systems (Digital Cloud Solutioning and
          Financial Technology) and Finance. As an INTP, I am passionate about
          using my analytical and problem-solving skills to tackle complex
          issues and my academic background in Biotechnology has provided me
          with a unique perspective on the intersections between science,
          technology, and real-world problem-solving.<br /><br /> I believe that technology has the potential to
          revolutionize the way we approach global issues and I am excited to
          connect with like-minded professionals who share my vision and explore
          how we can make a positive impact on the world together.
          <br></br>
          <br></br>

        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false} >
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Projects <br />
            </Button>
          </NextLink>
          &nbsp;
          &nbsp;

          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
             Experience <br />
            </Button>

            
          </NextLink>
          &nbsp;
          &nbsp;

          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Resume <br />
            </Button>

            
          </NextLink>
          <br></br>
        
        </Box>
        
      </Section>

      {/* <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          PAST EXPERIENCE | PROJECTS | HACKATHON 
        </Heading>
        <BioSection>
          <BioYear>Jun - Dec 2022</BioYear><br></br>
          <b>Cyber Strategy Intern</b>
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Completed the Master&apos;s Program in the Graduate School of
          Information Science at Nara Institute of Science and Technology
          (奈良先端科学技術大学院大学情報科学研究科修士課程)
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Worked at Yahoo! Japan (ヤフー株式会社入社)
        </BioSection>
        <BioSection>
          <BioYear>2012 to present</BioYear>
          Working as a freelancer
        </BioSection>
      </Section> */}

      
<br></br>

      <Section delay={0.3} >
        <Heading as="h3" variant="section-title">
          GET IN TOUCH !
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/jasminelim327" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @jasminelim327
              </Button>
            </Link>
          </ListItem>
          
          <ListItem>
            <Link href="https://instagram.com/jasmine.limmm" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @jasmine.limmm
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://www.linkedin.com/in/jasmine-lim-jia-yi/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Jasmine Lim
              </Button>
            </Link>
          </ListItem>
        </List>

       
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
