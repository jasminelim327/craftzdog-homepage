import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {

  const hideNavBarPaths = ['/works/inapp','/works/crissy', '/works/shopmytee', '/works/limkopi', '/works/finda', '/works/daily', '/works/buddy' ];
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Jasmine Lim's homepage" />
        <meta name="author" content="Jasmine Lim" />
        <meta name="author" content="craftzdog" />
        <link rel="jasmine" href="jasmine.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Jasmine Lim" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Jasmine" />
        <meta name="og:title" content="Jasmine Lim" />
        <meta property="og:type" content="website" />
        <title>Jasmine Lim - Homepage</title>
      </Head>

      {!hideNavBarPaths.includes(router.asPath) && <NavBar path={router.asPath} />}


      <Container maxW="container.md" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
