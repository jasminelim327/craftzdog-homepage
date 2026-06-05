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
  Text,
  Tag,
  TagLeftIcon,
  TagLabel,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { TbBrandNextjs } from 'react-icons/tb'
import {
  SiPostgresql,
  SiTypescript,
  SiGraphql,
  SiNestjs,
  SiReact,
  SiJest,
} from 'react-icons/si'
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
  IoReader,
  IoDownloadOutline,
  IoChatbubblesOutline,
} from 'react-icons/io5'
import { FaJava } from 'react-icons/fa'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop),
})

const SectionLabel = ({ children }) => {
  const color = useColorModeValue('rgba(0,0,0,0.38)', 'rgba(255,255,255,0.32)')
  return (
    <Text
      fontSize="10px"
      fontWeight="bold"
      textTransform="uppercase"
      letterSpacing="1.5px"
      color={color}
      mb={3}
      mt={5}
    >
      {children}
    </Text>
  )
}

const SkillChip = ({ icon: IconComp, label, colorScheme = 'gray' }) => (
  <WrapItem>
    <Tag size="sm" variant="subtle" borderRadius="full" colorScheme={colorScheme} px={2}>
      {IconComp && <TagLeftIcon boxSize="11px" as={IconComp} />}
      <TagLabel fontSize="10px">{label}</TagLabel>
    </Tag>
  </WrapItem>
)

const Home = () => {
  const heroBg = useColorModeValue('rgba(0,0,0,0.04)', 'rgba(255,255,255,0.05)')
  const heroBorder = useColorModeValue('rgba(0,0,0,0.08)', 'rgba(255,255,255,0.08)')
  const cardBg = useColorModeValue('rgba(0,0,0,0.02)', 'rgba(255,255,255,0.03)')
  const cardBorder = useColorModeValue('rgba(0,0,0,0.07)', 'rgba(255,255,255,0.07)')
  const tealAccentBg = useColorModeValue('rgba(13,148,136,0.06)', 'rgba(13,148,136,0.1)')
  const tealAccentBorder = useColorModeValue('rgba(13,148,136,0.2)', 'rgba(13,148,136,0.25)')
  const subtitleColor = useColorModeValue('rgba(0,0,0,0.4)', 'rgba(255,255,255,0.35)')
  const descColor = useColorModeValue('gray.700', 'gray.300')
  const nameGradient = useColorModeValue(
    'linear-gradient(90deg, #111 0%, #0d9488 100%)',
    'linear-gradient(90deg, #fff 0%, #0d9488 100%)'
  )

  return (
    <Layout>
      <Container>

        {/* Hero banner */}
        <Box
          borderRadius="xl"
          my={6}
          p={3}
          textAlign="center"
          bg={heroBg}
          border="1px solid"
          borderColor={heroBorder}
          fontSize="sm"
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m a software engineer based in Singapore!
        </Box>

        {/* Name + subtitle + CV */}
        <Box display={{ md: 'flex' }} alignItems="center" mb={2}>
          <Box flexGrow={1}>
            <Heading
              as="h2"
              fontSize={28}
              fontWeight={800}
              letterSpacing="-0.5px"
              lineHeight={1.2}
              mb={2}
              sx={{
                background: nameGradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Jasmine Lim Jia Yi
            </Heading>
            <Text fontSize="xs" color={subtitleColor} letterSpacing="0.5px" mb={4}>
              FULL-STACK SOFTWARE ENGINEER · SINGAPORE
            </Text>
            <Link href="https://www.linkedin.com/in/jasmine-lim-jia-yi/" isExternal>
              <Button
                size="sm"
                variant="outline"
                colorScheme="teal"
                leftIcon={<IoDownloadOutline />}
                borderRadius="md"
              >
                Download CV
              </Button>
            </Link>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 6, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              w="90px"
              h="90px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
              border="2px solid"
              borderColor={tealAccentBorder}
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

        {/* Introduction */}
        <Section delay={0.1}>
          <SectionLabel>About</SectionLabel>
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

        {/* Skills */}
        <Section delay={0.15}>
          <SectionLabel>Skills</SectionLabel>

          <Text fontSize="10px" fontWeight="semibold" color={subtitleColor} mb={2} letterSpacing="0.5px">
            Frontend
          </Text>
          <Wrap spacing={1} mb={4}>
            <SkillChip icon={SiReact} label="React" colorScheme="teal" />
            <SkillChip icon={SiTypescript} label="TypeScript" colorScheme="blue" />
            <SkillChip icon={TbBrandNextjs} label="Next.js" colorScheme="gray" />
            <SkillChip icon={IoLogoVue} label="Vue.js" colorScheme="green" />
          </Wrap>

          <Text fontSize="10px" fontWeight="semibold" color={subtitleColor} mb={2} letterSpacing="0.5px">
            Backend
          </Text>
          <Wrap spacing={1} mb={4}>
            <SkillChip icon={IoLogoNodejs} label="Node.js" colorScheme="green" />
            <SkillChip icon={SiNestjs} label="NestJS" colorScheme="red" />
            <SkillChip icon={FaJava} label="Java" colorScheme="orange" />
            <SkillChip icon={BiLogoSpringBoot} label="Spring Boot" colorScheme="green" />
          </Wrap>

          <Text fontSize="10px" fontWeight="semibold" color={subtitleColor} mb={2} letterSpacing="0.5px">
            Data &amp; Cloud
          </Text>
          <Wrap spacing={1} mb={4}>
            <SkillChip icon={IoLogoFirebase} label="Firebase" colorScheme="yellow" />
            <SkillChip icon={SiPostgresql} label="PostgreSQL" colorScheme="blue" />
            <SkillChip icon={SiGraphql} label="GraphQL" colorScheme="pink" />
          </Wrap>

          <Text fontSize="10px" fontWeight="semibold" color={subtitleColor} mb={2} letterSpacing="0.5px">
            Testing &amp; Practices
          </Text>
          <Wrap spacing={1}>
            <SkillChip icon={SiJest} label="Jest" colorScheme="purple" />
            <SkillChip icon={IoRepeatOutline} label="Agile / Scrum" colorScheme="gray" />
            <SkillChip icon={IoCodeWorking} label="CI/CD" colorScheme="gray" />
            <SkillChip icon={IoApps} label="Full Stack Dev" colorScheme="gray" />
          </Wrap>
        </Section>

        {/* Education */}
        <Section delay={0.18}>
          <SectionLabel>Education</SectionLabel>
          <Box
            p={4}
            bg={cardBg}
            border="1px solid"
            borderColor={cardBorder}
            borderRadius="xl"
            display="flex"
            gap={3}
            alignItems="flex-start"
            transition="border-color 0.2s"
            _hover={{ borderColor: useColorModeValue('rgba(0,0,0,0.15)', 'rgba(255,255,255,0.15)') }}
          >
            <Box
              w="40px"
              h="40px"
              borderRadius="lg"
              bg={tealAccentBg}
              border="1px solid"
              borderColor={tealAccentBorder}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexShrink={0}
              fontSize="18px"
            >
              🎓
            </Box>
            <Box>
              <Text fontWeight="bold" fontSize="sm">
                Singapore Management University
              </Text>
              <Text fontSize="xs" color={subtitleColor} mb={2}>
                B.Sc. Information Systems (Digital Cloud Solutioning &amp; FinTech) · Finance · Class of 2024
              </Text>
              <Wrap spacing={1}>
                {['Cloud Computing', 'FinTech', 'Finance', 'Software Engineering'].map(t => (
                  <WrapItem key={t}>
                    <Tag size="sm" colorScheme="teal" borderRadius="full" variant="subtle">
                      <TagLabel fontSize="10px">{t}</TagLabel>
                    </Tag>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          </Box>
        </Section>

        {/* Experience */}
        <Section delay={0.2}>
          <SectionLabel>Professional Experience</SectionLabel>
          <Box mt={2}>

            <ExperienceEntry
              logoSrc={null}
              logoEmoji="🚀"
              isLatest={true}
              isLast={false}
              role="Software Engineer (Founding Engineer Scope)"
              company="Stealth Startup"
              dateRange="Sep 2024 – Present"
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
                { label: 'React', colorScheme: 'blue', icon: SiReact },
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

        {/* Get in Touch */}
        <Section delay={0.3}>
          <SectionLabel>Get in Touch</SectionLabel>
          <Box
            p={5}
            bg={tealAccentBg}
            border="1px solid"
            borderColor={tealAccentBorder}
            borderRadius="xl"
          >
            <Box display="flex" alignItems="center" gap={2} mb={1}>
              <IoChatbubblesOutline />
              <Text fontWeight="bold" fontSize="sm">Open to opportunities ✦</Text>
            </Box>
            <Text fontSize="sm" color={descColor} mb={4}>
              Feel free to reach out for full-time roles, collaborations, or just a chat!
            </Text>
            <List spacing={1}>
              <ListItem>
                <Link href="https://github.com/jasminelim327" isExternal>
                  <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoGithub />} size="sm">
                    @jasminelim327
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://www.linkedin.com/in/jasmine-lim-jia-yi/" isExternal>
                  <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoLinkedin />} size="sm">
                    Jasmine Lim
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://instagram.com/jasmine.limmm" isExternal>
                  <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoInstagram />} size="sm">
                    @jasmine.limmm
                  </Button>
                </Link>
              </ListItem>
            </List>
          </Box>
        </Section>

      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
