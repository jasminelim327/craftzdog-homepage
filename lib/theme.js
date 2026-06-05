import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f7f3ee', '#141414')(props),
    },
  }),
}

const components = {
  Heading: {
    variants: {
      'section-title': props => ({
        fontSize: 10,
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        color: mode('rgba(0,0,0,0.4)', 'rgba(255,255,255,0.35)')(props),
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 3,
        textDecoration: 'none',
      }),
    },
  },
  Link: {
    baseStyle: props => ({
      color: mode('#0d7a70', '#2dd4bf')(props),
      textUnderlineOffset: 3,
    }),
  },
}

const fonts = {
  heading: "'Arial'",
}

const colors = {
  grassTeal: '#88ccca',
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
