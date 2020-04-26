import codeTheme from '@theme-ui/prism/presets/night-owl.json'
import { lighten } from '@theme-ui/color'

export const anchorFocus = {
  transition: '.2s linear box-shadow',
  boxShadow: theme => `0 2px 0 0 ${theme.colors.primary}`,
}

export const commonFocus = {
  outline: 'none',
  transition: '.2s linear box-shadow',
  boxShadow: theme => `0 0 0 2px ${theme.colors.muted}`,
}

const headings = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  fontSize: 2,
  mt: 0,
  mb: 3,
  a: {
    color: 'inherit',
  },
}

const specialHeadings = {
  color: 'primary',
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
}

const anchors = {
  color: 'muted',
  wordBreak: 'break-all',
  ':focus': {
    outline: 'none',
    ...anchorFocus,
  },
}

const codeBlock = {
  ...codeTheme,
  backgroundColor: 'surface',
  // special case
  fontSize: '13px',
  p: 1,
}

const preBlock = {
  borderRadius: 0,
  overflow: 'auto',
  p: 3,
}

const buttons = {
  borderRadius: 0,
  minWidth: 120,
  p: theme => `${theme.space[2]}px ${theme.space[3]}px`,
  ':focus': {
    ...commonFocus,
  },
}

const badges = {
  fontSize: 0,
  borderRadius: 0,
  borderWidth: 1,
  borderStyle: 'solid',
  backgroundColor: 'transparent',
  p: theme => `${theme.space[0]}px ${theme.space[1]}px`,
}

const alerts = {
  fontWeight: 'body',
  borderRadius: 0,
  p: theme => `${theme.space[2]}px ${theme.space[3]}px`,
}

export const blockquotes = {
  borderRadius: 0,
  borderLeft: theme => `${theme.borderWidths[2]}px solid ${theme.colors.muted}`,
  mt: 0,
  ml: 2,
  mb: 3,
  mr: 0,
  p: {
    p: 3,
    mb: 0,
  },
}

export const messages = {
  borderRadius: 0,
  backgroundColor: 'surface',
}

export const progress = {
  backgroundColor: 'surface',
}

export default {
  // tokens
  borderWidths: [0, 1, 4],
  colors: {
    text: '#ffffff',
    muted: '#8394ca',
    background: '#282a36',
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

  // styles
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: 1,
      lineHeight: 'body',
    },
    h1: {
      ...headings,
      ...specialHeadings,
      fontSize: 3,
    },
    h2: { ...headings, ...specialHeadings },
    h3: { ...headings, color: 'secondary' },
    h4: { ...headings },
    h5: { ...headings, color: 'success' },
    h6: { ...headings, color: 'error' },
    p: {
      mt: 0,
      mb: 3,
      a: {
        ...anchors,
      },
      code: {
        ...codeBlock,
      },
      pre: {
        ...codeBlock,
        ...preBlock,
      },
    },
    small: {
      color: 'muted',
      fontSize: 0,
    },
    a: {
      ...anchors,
    },
    code: {
      ...codeBlock,
      color: 'inherit',
    },
    pre: {
      ...codeBlock,
      ...preBlock,
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
      pl: '27px',
      listStyle: 'square',
    },
    li: {
      mb: 1,
      a: {
        ...anchors,
      },
      code: {
        ...codeBlock,
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
            border: theme =>
              `${theme.borderWidths[1]}px solid ${theme.colors.surface}`,
            padding: theme => `${theme.space[2]}px ${theme.space[3]}px`,
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
            padding: theme => `${theme.space[2]}px ${theme.space[3]}px`,
            border: theme =>
              `${theme.borderWidths[1]}px solid ${theme.colors.surface}`,
          },
        },
      },
    },
    blockquote: {
      ...blockquotes,
    },
    progress: {
      ...progress,
      primary: {
        ...progress,
        color: 'primary',
      },
      secondary: {
        ...progress,
        color: 'secondary',
      },
      success: {
        ...progress,
        color: 'success',
      },
      error: {
        ...progress,
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
    // default
    primary: {
      ...alerts,
      color: 'text',
      backgroundColor: 'primary',
    },
    secondary: {
      ...alerts,
      color: 'background',
      backgroundColor: 'secondary',
    },
    success: {
      ...alerts,
      color: 'background',
      backgroundColor: 'success',
    },
    error: {
      ...alerts,
      backgroundColor: 'error',
    },
  },

  badges: {
    // primary is supposed to be default but it isn't
    primary: {
      ...badges,
      color: 'primary',
      borderColor: 'primary',
    },
    secondary: {
      ...badges,
      color: 'secondary',
      borderColor: 'secondary',
    },
    success: {
      ...badges,
      color: 'success',
      borderColor: 'success',
    },
    error: {
      ...badges,
      color: 'error',
      borderColor: 'error',
    },
  },

  buttons: {
    // default
    primary: {
      ...buttons,
    },
    secondary: {
      ...buttons,
      color: 'background',
      backgroundColor: 'secondary',
    },
    success: {
      ...buttons,
      color: 'background',
      backgroundColor: 'success',
    },
    error: {
      ...buttons,
      backgroundColor: 'error',
    },
    icon: {
      borderRadius: 0,
      ':focus': {
        ...commonFocus,
      },
    },
    ghost: {
      borderRadius: 0,
      backgroundColor: 'background',
      ':focus': {
        ...commonFocus,
      },
    },
    close: {
      cursor: 'pointer',
      borderRadius: 0,
      backgroundColor: 'background',
      ':focus': {
        ...commonFocus,
      },
    },
    menu: {
      cursor: 'pointer',
      borderRadius: 0,
      backgroundColor: 'background',
      ':focus': {
        ...commonFocus,
      },
    },
  },

  cards: {
    primary: {
      boxShadow: 0,
      backgroundColor: 'surface',
    },
  },

  links: {
    ...anchors,
    nav: {
      ...anchors,
      ':hover': {
        color: 'text',
        transition: '.2s linear color',
      },
    },
  },

  text: {
    color: 'text',
    heading: {
      ...headings,
      ...specialHeadings,
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
      ':focus': {
        ...commonFocus,
      },
    },
    select: {
      borderRadius: 0,
      borderColor: 'muted',
      ':focus': {
        ...commonFocus,
      },
    },
    textarea: {
      borderRadius: 0,
      borderColor: 'muted',
      ':focus': {
        ...commonFocus,
      },
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
    //default
    container: {},
  },

  messages: {
    primary: {
      ...messages,
      borderLeftColor: 'primary',
    },
    secondary: {
      ...messages,
      borderLeftColor: 'secondary',
    },
    success: {
      ...messages,
      borderLeftColor: 'success',
    },
    error: {
      ...messages,
      borderLeftColor: 'error',
    },
  },
}
