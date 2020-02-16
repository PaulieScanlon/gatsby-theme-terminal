export const commonFocus = {
  transition: ".2s linear box-shadow",
  boxShadow: theme => `${theme.shadows[0]} ${theme.colors.primary}`,
}

const headings = {
  fontFamily: "heading",
  fontWeight: "heading",
  fontSize: 2,
  mt: 0,
  mb: 3,
}

const anchors = {
  color: "muted",
  wordBreak: "break-all",
  ":focus": {
    outline: "none",
    ...commonFocus,
  },
}

const codeBlock = {
  fontSize: 0,
}

export default {
  colors: {
    text: "#ffffff",
    muted: "#8394ca",
    background: "#282a36",
    primary: "#ff79c6",
    secondary: "#8be9fd",
    success: "#50fa7b",
    error: "#ff5555",
  },
  fonts: {
    body: "Inconsolata, monospace",
    heading: "Inconsolata, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
  },
  fontSizes: [14, 16, 18],
  space: [0, 4, 8, 16, 32, 64],
  shadows: ["0 2px 0 0"],
  text: {
    heading: {
      ...headings,
      h1: {
        color: "primary",
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      fontSize: 1,
    },
    h1: {
      ...headings,
      color: "primary",
      "::before": {
        content: `'→'`,
        color: "success",
        mr: 2,
      },
      "::after": {
        content: `'()'`,
        color: "secondary",
        ml: 1,
      },
    },
    h2: { ...headings, color: "secondary" },
    h3: { ...headings },
    h4: { ...headings },
    h5: { ...headings },
    h6: { ...headings },
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
      },
    },
    a: {
      ...anchors,
    },
    code: {
      ...codeBlock,
    },
    pre: {
      ...codeBlock,
    },
    hr: {
      borderColor: "muted",
      borderTop: "none",
      mt: 0,
      mb: 3,
    },
    ul: {
      listStyle: "square",
    },
    li: {
      mb: 1,
      // a: {
      //   ...anchors
      // }
    },
  },
}
