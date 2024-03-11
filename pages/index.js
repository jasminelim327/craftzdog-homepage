/* eslint-disable react/no-unescaped-entities */
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
  TagLabel,
  HStack,
} from '@chakra-ui/react'
import { TbBrandNextjs } from "react-icons/tb";
import { SiPostgresql, SiTypescript, SiGraphql, SiNestjs} from "react-icons/si";


import { BiLogoSpringBoot } from 'react-icons/bi'
import { HiOutlinePresentationChartBar } from 'react-icons/hi2'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoGolfOutline,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoVue,
  IoLogoFirebase,
  IoLogoNodejs,
  IoApps,
  IoRepeatOutline,
  IoCodeWorking,
  IoReader
} from 'react-icons/io5'

import { FaJava } from 'react-icons/fa'
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
          <p>Tech Enthusiast / Developer </p>
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
          Technology) and Finance.I am passionate about using my analytical and
          problem-solving skills to tackle complex issues! <br></br>
          <br></br>
          Let&apos;s connect!
        </Paragraph>
        {/* <Box align="center" my={6}>
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
        </Box> */}
      </Section>

      <Section delay={0.2}>
        <Heading as="h5" variant="section-title">
          PROFESSIONAL EXPERIENCE
        </Heading>
        <br></br>
        <Box display={{ md: 'flex' }}>
          <Box px={1} mx={2}>
            <ProfileImage
              src="/images/onloop.jpeg"
              borderRadius="full"
              width="120px"
              height="120px"
            />
          </Box>
          <BioSection>
            <Box flexGrow={1}>
              <p />
              <BioYear>Jan 2024 - Now</BioYear>
              <br></br>
              <i>Software Engineering Intern @ Onloop </i>
              <br></br>
              <br></br>I work on new features such as Slack Integration and Notifications with strong emphasis on responsiveness across different devices, that elevate user
              experience on the Onloop mobile and web platform by collaborating with software engineers and product manager
            </Box>
            <br></br>

            <b> Technical Stacks</b>
            <br></br>
            <br></br>
            <HStack spacing={2}>
              {/* Vue.js Tag */}
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="green"
              >
                <TagLeftIcon boxSize="15px" as={TbBrandNextjs} />
                <TagLabel> xxxxxxx NextJS</TagLabel>
              </Tag>

              {/* Firebase Tag */}
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="yellow"
              >
                <TagLeftIcon boxSize="15px" as={SiPostgresql} />
                <TagLabel>xxxxxxx PostgreSQL</TagLabel>
              </Tag>

              {/* Node.js Tag */}
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="red"
              >
                <TagLeftIcon boxSize="15px" as={SiTypescript} />
                <TagLabel> xxxxxxx Typescript</TagLabel>
              </Tag>

               {/* Node.js Tag */}
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="blue"
              >
                <TagLeftIcon boxSize="15px" as={SiGraphql} />
                <TagLabel> xxxxxxx GraphQL</TagLabel>
              </Tag>

            </HStack>
            <HStack spacing={2} >
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="purple"
                mt={2}
              >
                <TagLeftIcon boxSize="15px" as={SiNestjs} />
                <TagLabel> xxxxxxx Nestjs</TagLabel>
              </Tag>
              
            </HStack>
            <br></br>
            <b> Skills Developed</b>
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
                <TagLeftIcon boxSize="15px" as={IoApps} />
                <TagLabel> xxxxxxx Full Stack Web Development</TagLabel>
              </Tag>
              Firebase Tag
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="gray"
              >
                <TagLeftIcon boxSize="15px" as={IoRepeatOutline} />
                <TagLabel>xxxxxxx Agile </TagLabel>
              </Tag>
              {/* Node.js Tag */}
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="gray"
              >
                <TagLeftIcon boxSize="15px" as={IoCodeWorking} />
                <TagLabel> xxxxxxx Collaboration </TagLabel>
              </Tag>
              {/* Node.js Tag */}
            </HStack>
            <br></br>
          </BioSection>
        </Box>

        <br></br>
        <Box display={{ md: 'flex' }}>
          <Box px={1} mx={2}>
            <ProfileImage
              src="/images/vibefam.jpg"
              borderRadius="full"
              width="120px"
              height="120px"
            />
          </Box>
          <BioSection>
            <Box flexGrow={1}>
              <p />
              <BioYear>Sep 2023 - Dec 2023</BioYear>
              <br></br>
              <i>Software Engineering Intern @ Vibefam </i>
              <br></br>
              <br></br>I work on enhancements and new features that elevate user
              experience on the Vibefam platform, while emphasizing a
              feature-rich and responsive design that could cater to diverse
              user needs.
            </Box>
            <br></br>

            <b> Technical Stacks</b>
            <br></br>
            <br></br>
            <HStack spacing={2}>
              {/* Vue.js Tag */}
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="green"
              >
                <TagLeftIcon boxSize="15px" as={IoLogoVue} />
                
                <TagLabel> xxxxxxx Vue</TagLabel>
              </Tag>

              {/* Firebase Tag */}
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="yellow"
              >
                <TagLeftIcon boxSize="15px" as={IoLogoFirebase} />
                <TagLabel>xxxxxxx Firebase</TagLabel>
              </Tag>

              {/* Node.js Tag */}
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="red"
              >
                <TagLeftIcon boxSize="15px" as={IoLogoNodejs} />
                <TagLabel> xxxxxxx Node JS</TagLabel>
              </Tag>
            </HStack>
            <br></br>
            <b> Skills Developed</b>
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
                <TagLeftIcon boxSize="15px" as={IoApps} />
                <TagLabel> xxxxxxx Full Stack Web Development</TagLabel>
              </Tag>
              Firebase Tag
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="gray"
              >
                <TagLeftIcon boxSize="15px" as={IoRepeatOutline} />
                <TagLabel>xxxxxxx Agile </TagLabel>
              </Tag>
              {/* Node.js Tag */}
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="gray"
              >
                <TagLeftIcon boxSize="15px" as={IoCodeWorking} />
                <TagLabel> xxxxxxx Software Testing </TagLabel>
              </Tag>
              {/* Node.js Tag */}
            </HStack>
            <br></br>
          </BioSection>
        </Box>

        <br></br>
        <Box display={{ md: 'flex' }}>
          <Box px={1} mx={2}>
            <ProfileImage
              src="/images/creditsuisse.jpg"
              borderRadius="full"
              width="200px"
              height="200px"
            />
          </Box>

          <BioSection>
            <p />
            <BioYear>Jun - Dec 2022</BioYear>
            <br></br>
            <i>Apprentice @ Credit Suisse INSPIRE </i>
            <p></p>
            <br></br>I developed a full-stack web application that allow users
            to express and discuss about unconsious biasness in the workplace
            with the guidance from Software Engineers at Credit Suisse. The
            features includes a discussion platform for multiple users, profile
            customisation and subscription to tags.
            <br></br>
            <br></br>
            <b> Technical Stacks</b>
            <br></br>
            <br></br>
            <HStack spacing={2}>
              {/* Vue.js Tag */}
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="blue"
              >
                <TagLeftIcon boxSize="15px" as={IoLogoVue} />
                <TagLabel> xxxxxxx React</TagLabel>
              </Tag>

              {/* Firebase Tag */}
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="yellow"
              >
                <TagLeftIcon boxSize="15px" as={IoLogoFirebase} />
                <TagLabel>xxxxxxx Firebase</TagLabel>
              </Tag>

              {/* Node.js Tag */}
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="red"
              >
                <TagLeftIcon boxSize="15px" as={IoLogoNodejs} />
                <TagLabel> xxxxxxx Node JS</TagLabel>
              </Tag>

              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="purple"
              >
                <TagLeftIcon boxSize="15px" as={FaJava} />
                <TagLabel> xxxxxxx Java</TagLabel>
              </Tag>
            </HStack>
            <HStack>
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="green"
                mt={2}
              >
                <TagLeftIcon boxSize="15px" as={BiLogoSpringBoot} />
                <TagLabel> xxxxxxx Springboot</TagLabel>
              </Tag>
            </HStack>
            <br></br>
            <b> Skills Developed</b>
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
                <TagLeftIcon boxSize="15px" as={IoApps} />
                <TagLabel> xxxxxxx Full Stack Web Development</TagLabel>
              </Tag>
              Firebase Tag
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="gray"
              >
                <TagLeftIcon boxSize="15px" as={IoRepeatOutline} />
                <TagLabel>xxxxxxx SDLC </TagLabel>
              </Tag>
              {/* Node.js Tag */}
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="gray"
              >
                <TagLeftIcon boxSize="15px" as={IoCodeWorking} />
                <TagLabel> xxxxxxx Software Testing </TagLabel>
              </Tag>
              {/* Node.js Tag */}
            </HStack>
            <br></br>
          </BioSection>
        </Box>
        <br></br>

        <Box display={{ md: 'flex' }}>
          <Box px={1} mx={2}>
            <ProfileImage
              src="/images/ensign.jpg"
              borderRadius="full"
              width="100px"
              height="100px"
            />
          </Box>
          <BioSection>
            <p></p>
            <BioYear>Jun - Dec 2022</BioYear>
            <br></br>
            <i>Cyber Strategy Intern @ Ensign Infosecurity</i>
            <br></br>
            <br></br>I work on various proposals, in-house process enhancement
            and reaserch on technical solutions that enhance client's
            cybersecurity posture.
            <br></br>
            <br></br>
            <b>Skills Developed</b>
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
                <TagLeftIcon
                  boxSize="15px"
                  as={HiOutlinePresentationChartBar}
                />
                <TagLabel> xxxxxxx Consulting</TagLabel>
              </Tag>

              {/* Firebase Tag */}
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="gray"
              >
                <TagLeftIcon boxSize="15px" as={IoGolfOutline} />
                <TagLabel>xxxxxxx Research</TagLabel>
              </Tag>

              {/* Node.js Tag */}
              <Tag
                size="md"
                variant="solid"
                borderRadius="full"
                colorScheme="gray"
              >
                <TagLeftIcon boxSize="15px" as={IoReader} />
                <TagLabel> xxxxxxx Presentation</TagLabel>
              </Tag>
            </HStack>
            <br></br>
          </BioSection>
        </Box>
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
