import { tailwind } from '@theme-ui/presets';

export default {
  ...tailwind,
  initialColorMode: 'light',
  useCustomProperties: true,
  colors: {
    ...tailwind.colors,
    primary: '#EE2F24',
    secondary: '#3E0000',
    text: '#612B2B',
    background: '#FFF6F6'
  },
  styles: {
    ...tailwind.styles,
    root: {
      ...tailwind.styles.root,
      color: 'text',
      backgroundColor: 'background',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      minHeight: '100vh'
    },
    Footer: {
      textAlign: 'center',
      display: 'block',
      color: 'secondary',
      px: [2, 3],
      py: [3, 4],
      flexShrink: 0
    },
    Header: {
      px: [3, 4],
      py: [2, 0],
      fontSize: 2,
      height: ['auto', '9rem'],
      display: 'grid',
      gridTemplateColumns: ['1fr 3fr 1fr', '160px 160px auto'],
      flexShrink: 0,
      backgroundColor: 'white'
    },
    Main: {
      ...tailwind.styles.Main,
      position: 'relative',
      width: '100%',
      flexGrow: 1,
      flexShrink: 0
    },
    Container: {
      maxWidth: '5xl'
    },
    p: {
      fontSize: [1, 2],
      letterSpacing: '-0.003em',
      lineHeight: 'body',
      '--baseline-multiplier': 0.179,
      '--x-height-multiplier': 0.35
    },
    h1: {
      ...tailwind.styles.h1,
      fontSize: [5, 6],
      mt: 2
    },
    h2: {
      ...tailwind.styles.h2,
      fontSize: [4, 5],
      mt: 2
    },
    h3: {
      ...tailwind.styles.h3,
      fontSize: [3, 4],
      mt: 3
    },
    h4: {
      ...tailwind.styles.h4,
      fontSize: [2, 3]
    },
    h5: {
      ...tailwind.styles.h5,
      fontSize: [1, 2]
    },
    h6: {
      ...tailwind.styles.h6,
      fontSize: 1,
      mb: 2
    }
  },
  buttons: {
    toggle: {
      color: 'background',
      border: 'none',
      backgroundColor: 'text',
      cursor: 'pointer',
      alignSelf: 'center',
      px: 3,
      py: 2,
      ml: 3
    }
  }
};
