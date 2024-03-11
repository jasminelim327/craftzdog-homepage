import Head from 'next/head'
import { GridItemStyle } from '../grid-item'


const Layout = ({ children, title }) => {
  const t = `${title} - Jasmine Lim`
  return (
    // <motion.article
    //   initial="hidden"
    //   animate="enter"
    //   exit="exit"
    //   variants={variants}
    //   transition={{ duration: 0.4, type: 'easeInOut' }}
    //   style={{ position: 'relative' }}
    // >
      <>
        {title && (
          <Head>
            <title>{t}</title>
            <meta name="twitter:title" content={t} />
            <meta property="og:title" content={t} />
          </Head>
        )}
        {children}

        <GridItemStyle />
      </>
    // </motion.article>
  )
}

export default Layout
