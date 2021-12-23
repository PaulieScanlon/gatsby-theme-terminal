import codeTheme from '@theme-ui/prism/presets/night-owl.json'
import { lighten, darken } from '@theme-ui/color'

const codeFontSize = '15px'
const codeBlockFontSize = '14px'

const sansFontPreset = 'Lato, sans-serif'
const serifFontPreset = '"EB Garamond", serif'

const codeFontPreset = '"Inconsolata", monospace'
const codeFontFeature = "'zero' on, 'ss02' on, 'ONUM' on, 'liga' on"

// based font size index from array `theme/fontSizes`
const basedFontInd = 2

const theme = {
  borderWidths: [0, 1, 4],
  colors: {
    text: '#1b262c',
    muted: '#8b87ea',
    primary: '#202f66',
    secondary: '#ff7048',
    success: '#48ADA9',
    background: '#f9f7f7',
    surface: '#EDE8E8',
    highlight: '#5a6084',
    error: '#ff5555',
    black: '#000000',
  },
  fonts: {
    body: serifFontPreset,
    heading: serifFontPreset,
    code: codeFontPreset,
    sans: sansFontPreset,
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.75,
    heading: 1.125,
  },
  // fluid CSS type scales,
  // step 0 = h5, h6 and default text
  // step 4 = h1
  fontSizes: [
    'var(--step--2)',
    'var(--step--1)',
    'var(--step-0)',
    'var(--step-1)',
    'var(--step-2)',
    'var(--step-3)',
    'var(--step-4)',
    'var(--step-5)',
    'var(--step-6)',
  ],
  space: [0, 4, 8, 16, 32, 48, 64],
  shadows: [
    `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`,
    `0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)`,
    `0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)`,
    `0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)`,
    `0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)`,
  ],

  styles: {
    // default html tags
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      // default root fontsize
      fontSize: 16,
      lineHeight: 'body',
      'input:-webkit-autofill:first-line': {
        color: (theme) => `${theme.colors.primary}!important`,
      },
      a: {
        variant: 'styles.focus',
      },
      // code block
      pre: {
        ...codeTheme,
        fontFamily: 'code',
        borderRadius: 0,
        overflow: 'auto',
        fontSize: codeBlockFontSize,
        overflow: 'auto',
        p: 3,
        my: '48px!important',
        backgroundColor: darken('#05192D', 0.075),
      },
      body: {
        fontSize: basedFontInd,
      },
    },

    // ??
    focus: {
      transition: '.2s linear box-shadow',
      ':focus': {
        outline: 'none',
        boxShadow: (theme) => `0 2px 0 0 ${theme.colors.primary}`,
      },
    },
    h1: {
      variant: 'text.heading',
      color: 'primary',
      fontSize: basedFontInd + 4,
    },
    h2: {
      variant: 'text.heading',
      color: 'primary',
      fontSize: basedFontInd + 3,
    },
    h3: {
      variant: 'text.heading',
      color: 'secondary',
      fontSize: basedFontInd + 2,
    },
    h4: {
      variant: 'text.heading',
      color: 'text',
      fontSize: basedFontInd + 1,
    },
    h5: {
      variant: 'text.heading',
      color: 'success',
      fontSize: basedFontInd,
    },
    h6: {
      variant: 'text.heading',
      color: 'error',
      fontSize: basedFontInd,
    },
    p: {
      mt: 0,
      mb: 3,
      code: {
        variant: 'styles.code',
        'font-feature-settings': `${codeFontFeature}`,
      },
    },
    small: {
      color: 'muted',
      fontSize: basedFontInd - 1,
    },
    a: {
      color: 'muted',
      variant: 'styles.focus',
      textDecoration: 'none',
    },
    // inline code
    code: {
      fontFamily: 'code',
      color: 'inherit',
      backgroundColor: 'surface',
      fontSize: codeFontSize,
      px: 2,
      py: 1,
      borderRadius: '4px',
      'font-feature-settings': `${codeFontFeature}`,
    },

    hr: {
      border: 'none',
      mt: 0,
      mb: 3,
    },
    ol: {
      mt: 0,
      mb: 3,
      pl: 4,
    },
    ul: {
      mt: 0,
      mb: 3,
      // special case so ul lines up with ol
      pl: '24px',
      listStyle: 'square',
    },
    li: {
      mb: 1,
      code: {
        variant: 'styles.code',
      },
      pre: {
        variant: 'styles.pre',
      },
    },
    table: {
      borderCollapse: 'collapse',
      mb: 3,
      border: 'none',
      thead: {
        backgroundColor: lighten('background', 0.03),
        tr: {
          th: {
            border: (theme) => `${theme.borderWidths[1]}px solid ${theme.colors.surface}`,
            padding: (theme) => `${theme.space[2]}px ${theme.space[3]}px`,
          },
        },
        td: {
          color: '#666',
        },
      },
      tbody: {
        'tr:nth-of-type(even)': {
          backgroundColor: lighten('background', 0.01),
        },
        tr: {
          td: {
            padding: (theme) => `${theme.space[2]}px ${theme.space[3]}px`,
            border: (theme) => `${theme.borderWidths[1]}px solid ${theme.colors.surface}`,
          },
        },
      },
    },
    blockquote: {
      borderRadius: 0,
      borderLeftColor: 'muted',
      borderLeftStyle: 'solid',
      borderLeftWidth: 2,
      mt: 0,
      ml: 2,
      mb: 3,
      mr: 0,
      p: {
        p: 3,
        mb: 0,
      },
    },
    progress: {
      primary: {
        backgroundColor: 'surface',
        color: 'primary',
      },
      secondary: {
        backgroundColor: 'surface',
        color: 'secondary',
      },
      success: {
        backgroundColor: 'surface',
        color: 'success',
      },
      error: {
        backgroundColor: 'surface',
        color: 'error',
      },
    },
    donut: {
      primary: {
        color: 'primary',
      },
      secondary: {
        color: 'secondary',
      },
      success: {
        color: 'success',
      },
      error: {
        color: 'error',
      },
    },

    spinner: {
      primary: {
        color: 'primary',
      },
      secondary: {
        color: 'secondary',
      },
      success: {
        color: 'success',
      },
      error: {
        color: 'error',
      },
    },
  },

  // components
  alerts: {
    primary: {
      fontWeight: 'body',
      borderRadius: 0,
      px: 3,
      py: 2,
      color: 'text',
      backgroundColor: 'primary',
    },
    secondary: {
      variant: 'alerts.primary',
      color: 'background',
      backgroundColor: 'secondary',
    },
    success: {
      variant: 'alerts.primary',
      color: 'background',
      backgroundColor: 'success',
    },
    error: {
      variant: 'alerts.primary',
      backgroundColor: 'error',
    },
  },

  badges: {
    primary: {
      color: 'primary',
      borderColor: 'primary',
      fontSize: basedFontInd - 1,
      fontFamily: 'sans',
      borderRadius: 0,
      borderWidth: 1,
      borderStyle: 'solid',
      backgroundColor: 'transparent',
      px: 2,
      py: 1,
    },
    secondary: {
      variant: 'badges.primary',
      color: 'secondary',
      borderColor: 'secondary',
    },
    success: {
      variant: 'badges.primary',
      color: 'success',
      borderColor: 'success',
    },
    error: {
      variant: 'badges.primary',
      color: 'error',
      borderColor: 'error',
    },
  },

  buttons: {
    focus: {
      ':focus': {
        outline: 'none',
        transition: '.2s linear box-shadow',
        boxShadow: (theme) => `0 0 0 2px ${theme.colors.muted}`,
      },
    },
    primary: {
      borderRadius: 0,
      cursor: 'pointer',
      minWidth: 120,
      px: 3,
      py: 2,
      variant: 'buttons.focus',
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      backgroundColor: 'secondary',
    },
    success: {
      variant: 'buttons.primary',
      color: 'background',
      backgroundColor: 'success',
    },
    error: {
      variant: 'buttons.primary',
      backgroundColor: 'error',
    },
    ghost: {
      variant: 'buttons.primary',
      backgroundColor: 'background',
    },
    icon: {
      cursor: 'pointer',
      borderRadius: 0,
      variant: 'buttons.focus',
    },
    close: {
      cursor: 'pointer',
      borderRadius: 0,
      variant: 'buttons.focus',
    },
    menu: {
      cursor: 'pointer',
      borderRadius: 0,
      variant: 'buttons.focus',
    },
  },

  cards: {
    primary: {
      boxShadow: 0,
      backgroundColor: 'surface',
    },
  },

  links: {
    variant: 'styles.a',
    nav: {
      fontFamily: 'sans',
      variant: 'styles.a',
      fontWeight: 'body',
      ':before': {
        pr: [2, 2, 2, 0],
        content: [`"-"`, `"-"`, `"-"`, `""`],
      },
      ':after': {
        pl: [0, 0, 0, 2],
        content: [`""`, `""`, `""`, `"-"`],
      },
      ':hover': {
        color: 'text',
        transition: '.2s linear color',
      },
      '&[aria-current="page"]': {
        color: 'text',
        pointerEvents: 'none',
      },
      fontSize: basedFontInd - 1,
    },
  },

  text: {
    color: 'text',
    fontSize: basedFontInd,
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      fontSize: basedFontInd + 1,
      mt: 0,
      mb: 3,
      a: {
        color: 'inherit',
      },
    },
    specialHeading: {
      variant: 'text.heading',
      '::before': {
        content: `'→'`,
        color: 'success',
        mr: 2,
      },
      '::after': {
        content: `'()'`,
        color: 'secondary',
        ml: 1,
      },
    },
  },

  images: {
    avatar: {},
  },

  forms: {
    label: {
      fontWeight: 'bold',
    },
    input: {
      borderRadius: 0,
      borderColor: 'muted',
      variant: 'styles.focus',
    },
    select: {
      borderRadius: 0,
      borderColor: 'muted',
      variant: 'styles.focus',
    },
    textarea: {
      borderRadius: 0,
      borderColor: 'muted',
      variant: 'styles.focus',
    },
    slider: {
      backgroundColor: 'muted',
    },
    radio: {
      color: 'muted',
      backgroundColor: 'background',
    },
    checkbox: {
      color: 'muted',
      backgroundColor: 'background',
    },
  },

  hr: {},

  embed: {},

  sizes: {
    container: {},
  },

  layouts: {
    container: {},
  },

  messages: {
    default: {
      borderRadius: 0,
      backgroundColor: 'surface',
    },
    primary: {
      variant: 'messages.default',
      borderLeftColor: 'primary',
    },
    secondary: {
      variant: 'messages.default',
      borderLeftColor: 'secondary',
    },
    success: {
      variant: 'messages.default',
      borderLeftColor: 'success',
    },
    error: {
      variant: 'messages.default',
      borderLeftColor: 'error',
    },
  },
}

export default theme
