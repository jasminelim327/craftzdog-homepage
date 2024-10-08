import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub, IoLogoStackoverflow } from 'react-icons/io5'
import { AiFillLinkedin } from "react-icons/ai";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? undefined: undefined}
        color={active ? undefined : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="left"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
           <LinkItem
            href="works"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoStackoverflow />
            <b>Projects</b>
          </LinkItem>
          <LinkItem
            href="https://linkedin.com/in/jasmine-lim-jia-yi"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <AiFillLinkedin />
            <b>Linkedin</b>
          </LinkItem>

          <LinkItem
            target="_blank"
            href="https://github.com/jasminelim327"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            <b>Github</b>
          </LinkItem>
          
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                {/* <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink> */}
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <NextLink href="https://uses.craftz.dog/" passHref>
                  <MenuItem as={Link}>Uses</MenuItem>
                </NextLink>
                <MenuItem as={Link} href="https://github.com/jasminelim327">
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
