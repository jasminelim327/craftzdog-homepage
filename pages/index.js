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
  chakra,
  Tag,
  TagLeftIcon,
  TagLabel
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoVue
} from 'react-icons/io5'
import Image from 'next/image'
import { BioSection, BioYear } from '../components/bio'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        my={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an aspiring software engineer based in Singapore!
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
            borderWidth={0}
            borderStyle=""
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
          Hello, I am Jasmine and I am currently a Final year student majoring
          in Information Systems (Digital Cloud Solutioning and Financial
          Technology) and Finance. As an INTP, I am passionate about using my
          analytical and problem-solving skills to tackle complex issues{' '}
          <br></br>
          <br></br>I believe that technology has the potential to revolutionize
          the way we approach global issues and I am excited to connect with
          like-minded professionals who share my vision and explore how we can
          make a positive impact on the world together.
          <br></br>
          <br></br>
          Let's connect!
        </Paragraph>
        <Box align="center" my={6}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Experience <br />
            </Button>
          </NextLink>
          &nbsp; &nbsp;
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Projects <br />
            </Button>
          </NextLink>
          &nbsp; &nbsp;
          <br></br>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h5" variant="section-title">
          PROFESSIONAL EXPERIENCE
        </Heading>

        <BioSection>
          <BioYear>Sep 2023 - Now</BioYear>
          <br></br>
          <i>Software Engineering Intern</i>
          <br></br>
          <br></br>I am responsible for elevating the user experience on the
          Vibefam platform, emphasizing a feature-rich and responsive design
          that could cater to diverse user needs.
          <br></br>
          <Tag size="lg" variant="subtle" borderRadius="full">
            <TagLeftIcon boxSize="12px" as={IoLogoVue} />
            <TagLabel>Vue.js</TagLabel>
          </Tag>
          <Tag size="lg" variant="subtle" borderRadius="full">
            <TagLeftIcon boxSize="12px" as={IoLogoVue} />
            <TagLabel>Vue.js</TagLabel>
          </Tag>
        </BioSection>

        <BioSection>
          <BioYear>Jun - Dec 2022</BioYear>
          <br></br>
          <i>Cyber Strategy Intern</i>
          <p></p>

          <br></br>
          <br></br>
        </BioSection>

        <BioSection>
          <BioYear>2010</BioYear>
          Completed the Master&apos;s Program in the Graduate School of
          Information Science at Nara Institute of Science and Technology
          (奈良先端科学技術大学院大学情報科学研究科修士課程)
          <br></br>
          <br></br>
        </BioSection>

        <BioSection>
          <BioYear>2010</BioYear>
          Worked at Yahoo! Japan (ヤフー株式会社入社)
          <br></br>
          <br></br>
        </BioSection>

        <BioSection>
          <BioYear>2012 to present</BioYear>
          Working as a freelancer
          <br></br>
          <br></br>
        </BioSection>
      </Section>
      <br></br>

      <Section delay={0.3}>
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
            <Link
              href="https://www.linkedin.com/in/jasmine-lim-jia-yi/"
              target="_blank"
            >
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
