import codeTheme from '@theme-ui/prism/presets/night-owl.json'
import { lighten } from '@theme-ui/color'

const theme = {
  borderWidths: [0, 1, 4],
  colors: {
    text: '#ffffff',
    background: '#282a36',
    muted: '#8394ca',
    highlight: '#5a6084',
    surface: '#323442',
    primary: '#ff79c6',
    secondary: '#8be9fd',
    success: '#50fa7b',
    error: '#ff5555',
    black: '#000000',
  },
  fonts: {
    body: 'Inconsolata, monospace',
    heading: 'Inconsolata, monospace',
    code: 'monospace',
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
  fontSizes: [12, 16, 18, 28],
  space: [0, 4, 8, 16, 32, 48, 64],
  shadows: [
    `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`,
    `0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)`,
    `0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)`,
    `0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)`,
    `0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)`,
  ],

  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: 1,
      lineHeight: 'body',
      a: {
        variant: 'styles.focus',
      },
    },
    focus: {
      transition: '.2s linear box-shadow',
      ':focus': {
        outline: 'none',
        boxShadow: (theme) => `0 2px 0 0 ${theme.colors.primary}`,
      },
    },
    h1: {
      variant: 'text.specialHeading',
      color: 'primary',
      fontSize: 3,
    },
    h2: {
      variant: 'text.specialHeading',
      color: 'primary',
    },
    h3: {
      variant: 'text.heading',
      color: 'secondary',
    },
    h4: {
      variant: 'text.heading',
      color: 'text',
    },
    h5: {
      variant: 'text.heading',
      color: 'success',
    },
    h6: {
      variant: 'text.heading',
      color: 'error',
    },
    p: {
      mt: 0,
      mb: 3,
      code: {
        variant: 'styles.code',
      },
    },
    small: {
      color: 'muted',
      fontSize: 0,
    },
    a: {
      color: 'muted',
      variant: 'styles.focus',
    },
    code: {
      ...codeTheme,
      fontFamily: 'code',
      color: 'inherit',
      backgroundColor: 'surface',
      fontSize: '13px',
      p: 1,
    },
    pre: {
      ...codeTheme,
      fontFamily: 'code',
      borderRadius: 0,
      overflow: 'auto',
      fontSize: '13px',
      p: 3,
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
      fontSize: 0,
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
    },
  },

  text: {
    color: 'text',
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
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
