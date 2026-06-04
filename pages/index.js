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
} from '@chakra-ui/react'
import { TbBrandNextjs } from "react-icons/tb";
import { SiPostgresql, SiTypescript, SiGraphql, SiNestjs, SiReact, SiJest } from "react-icons/si";
import ExperienceEntry from '../components/experience-entry'


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
          Hello, I&apos;m Jasmine — a software engineer with close to 2 years of
          professional experience building production-grade applications. I majored
          in Information Systems (Digital Cloud Solutioning &amp; FinTech) and
          Finance at Singapore Management University, and I&apos;m passionate about
          crafting performant, user-focused products.
          <br /><br />
          Let&apos;s connect!
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h5" variant="section-title">
          PROFESSIONAL EXPERIENCE
        </Heading>
        <Box mt={6}>

          <ExperienceEntry
            logoSrc={null}
            logoEmoji="🚀"
            isLatest={true}
            isLast={false}
            role="Software Engineer (Founding Engineer Scope)"
            company="Stealth Startup"
            dateRange="Sep 2024 – Feb 2026"
            description="Architected and developed 4 production-grade applications from concept to launch, building responsive, accessible user interfaces in ReactJS and TypeScript with reusable component-based architecture and robust state management. Integrated frontend with backend services and RESTful APIs built on Node.js + Firebase Cloud Functions with microservices principles, clean architecture, and stateless design — resulting in 40% better API performance and 99.5%+ uptime while enabling rapid feature delivery. Owned end-to-end software quality by implementing comprehensive Jest unit, integration, and end-to-end tests (80%+ coverage on critical paths), conducting code reviews, and applying security best practices (JWT, role-based access control). Collaborated closely with stakeholders in Agile ceremonies to translate business requirements into robust technical solutions, delivering iterative releases on time. Built a real-time cloud synchronisation engine with offline-first capabilities and conflict resolution using NoSQL (Firestore) data modelling — reducing sync conflicts by 85%. Built and customised Launchpad, an internal low-code platform, integrating the Claude AI API to automate mobile app prototyping — reducing prototyping time by 85%."
            techTags={[
              { label: 'React', colorScheme: 'teal', icon: SiReact },
              { label: 'TypeScript', colorScheme: 'blue', icon: SiTypescript },
              { label: 'Node.js', colorScheme: 'green', icon: IoLogoNodejs },
              { label: 'Firebase', colorScheme: 'yellow', icon: IoLogoFirebase },
              { label: 'Jest', colorScheme: 'purple', icon: SiJest },
            ]}
            skillTags={[
              { label: 'Full Stack Dev', icon: IoApps },
              { label: 'Agile', icon: IoRepeatOutline },
              { label: 'Security (JWT/RBAC)', icon: IoCodeWorking },
              { label: 'Documentation', icon: IoReader },
            ]}
          />

          <ExperienceEntry
            logoSrc="/images/onloop.jpeg"
            isLatest={false}
            isLast={false}
            role="Software Engineering Intern"
            company="Onloop"
            dateRange="Jan 2024 – Sep 2024"
            description="Worked on new features including Slack Integration and Notifications with strong emphasis on responsiveness across different devices, elevating user experience on the Onloop mobile and web platform by collaborating with software engineers and the product manager."
            techTags={[
              { label: 'NextJS', colorScheme: 'green', icon: TbBrandNextjs },
              { label: 'PostgreSQL', colorScheme: 'yellow', icon: SiPostgresql },
              { label: 'TypeScript', colorScheme: 'red', icon: SiTypescript },
              { label: 'GraphQL', colorScheme: 'blue', icon: SiGraphql },
              { label: 'NestJS', colorScheme: 'purple', icon: SiNestjs },
            ]}
            skillTags={[
              { label: 'Full Stack Dev', icon: IoApps },
              { label: 'Agile', icon: IoRepeatOutline },
              { label: 'Collaboration', icon: IoCodeWorking },
            ]}
          />

          <ExperienceEntry
            logoSrc="/images/vibefam.jpg"
            isLatest={false}
            isLast={false}
            role="Software Engineering Intern"
            company="Vibefam"
            dateRange="Sep 2023 – Dec 2023"
            description="Worked on enhancements and new features that elevate user experience on the Vibefam platform, with emphasis on a feature-rich and responsive design that caters to diverse user needs."
            techTags={[
              { label: 'Vue', colorScheme: 'green', icon: IoLogoVue },
              { label: 'Firebase', colorScheme: 'yellow', icon: IoLogoFirebase },
              { label: 'Node.js', colorScheme: 'red', icon: IoLogoNodejs },
            ]}
            skillTags={[
              { label: 'Full Stack Dev', icon: IoApps },
              { label: 'Agile', icon: IoRepeatOutline },
              { label: 'Software Testing', icon: IoCodeWorking },
            ]}
          />

          <ExperienceEntry
            logoSrc="/images/creditsuisse.jpg"
            isLatest={false}
            isLast={false}
            role="Apprentice"
            company="Credit Suisse INSPIRE"
            dateRange="Jun – Dec 2022"
            description="Developed a full-stack web application allowing users to express and discuss unconscious bias in the workplace, guided by Software Engineers at Credit Suisse. Features include a multi-user discussion platform, profile customisation, and subscription to tags."
            techTags={[
              { label: 'React', colorScheme: 'blue', icon: IoLogoVue },
              { label: 'Firebase', colorScheme: 'yellow', icon: IoLogoFirebase },
              { label: 'Node.js', colorScheme: 'red', icon: IoLogoNodejs },
              { label: 'Java', colorScheme: 'purple', icon: FaJava },
              { label: 'SpringBoot', colorScheme: 'green', icon: BiLogoSpringBoot },
            ]}
            skillTags={[
              { label: 'Full Stack Dev', icon: IoApps },
              { label: 'SDLC', icon: IoRepeatOutline },
              { label: 'Software Testing', icon: IoCodeWorking },
            ]}
          />

          <ExperienceEntry
            logoSrc="/images/ensign.jpg"
            isLatest={false}
            isLast={true}
            role="Cyber Strategy Intern"
            company="Ensign Infosecurity"
            dateRange="Jun – Dec 2022"
            description="Worked on various proposals, in-house process enhancement, and research on technical solutions that enhance clients' cybersecurity posture."
            techTags={[]}
            skillTags={[
              { label: 'Consulting', icon: HiOutlinePresentationChartBar },
              { label: 'Research', icon: IoGolfOutline },
              { label: 'Presentation', icon: IoReader },
            ]}
          />

        </Box>
      </Section>

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
