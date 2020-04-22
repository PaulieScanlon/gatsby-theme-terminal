<a href="https://gatsby-theme-termninal.netlify.com/" target="_blank">
<img src="https://gatsby-theme-terminal.netlify.com/images/terminal-open-graph-image.jpg" alt="gatsby-theme-termninal main image" />
</a>

## gatsby-theme-terminal

Gatsby Theme Terminal aims to be a **zero component theme**. It provides _data_ components to aid in the abstraction of presentational and data layers which together provide the most flexibility

The theme handles the data but how it's displayed is up to you!

You can create any page layout or component combination you like using your own components or components provided by [theme-ui/components](https://theme-ui.com/components)

## 👀 Preview

- [Live Demo](https://gatsby-theme-terminal.netlify.com/)

## 🚀 Getting started

To help you get started you can either clone the starter [gatsby-starter-terminal](https://github.com/PaulieScanlon/gatsby-starter-terminal) or read the below.

### Install

```
npm install @pauliescanlon/gatsby-theme-terminal
```

### Install Peer Dependencies

```
npm install @mdx-js/mdx @mdx-js/react gatsby gatsby-plugin-mdx gatsby-source-filesystem react react-dom
```

## Setup

### gatsby-config.js

Add the `siteMetaData` and `@pauliescanlon/gatsby-theme-terminal` to your `gatsby-config.js`

```
// gatsby-config.js
module.exports = {
  siteMetadata: {
    name: "Your blog title",
    description: "I like tech",
    keywords: ["tech", "blog", "boop"],
    siteUrl: 'https://gatsby-theme-terminal.netlify.com',
    siteImage: 'name-of-open-graph-image.jpg', // pop an image in the static folder to use it as the og:image,
    profileImage: 'name-of-profile-image.jpg'
    lang: `eng`,
    config: {
      sidebarWidth: 240 // optional,
    },
  },
  plugins: ['@pauliescanlon/gatsby-theme-terminal']
}
```

### directory structure

To add pages create `.mdx` files in the `src/pages` directory. You need at least one file called `index.mdx` located at `src/pages` or you'll see a GraphQL error.

<!-- prettier-ignore -->
```
|-- src
    |-- pages
        |-- index.mdx
        |-- about.mdx
        |-- contact.mdx 

```

### frontmatter setup

#### Pages

Pages must include `navigationLabel` in the `frontmatter`

```
// src/pages/about.mdx
---
navigationLabel: About
---

# About

This is about page

```

#### Theme options

Additional `.mdx` can be sourced from _anywhere_ outside the `pages` directory but you need to tell the theme where to source these files from.

Use the `source` option in `gatsby-config.js`

```
// gatsby-config.js
...
  plugins: [
    {
      resolve: `@pauliescanlon/gatsby-theme-terminal`,
      options: {
        source: [`posts`, `projects`], // can be a string or array of strings
      },
    },
  ],
}
```

Then create the relevant files and directories

<!-- prettier-ignore -->
```
|-- src
    |-- pages
    ...
    |-- posts 
      |--2020
        |--02
          |-- some-post.mdx
          |-- featuredImage: markus-spiske-466ENaLuhLY-unsplash.jpg
          |-- markus-spiske-FXFz-sW0uwo-unsplash.jpg
    |-- projects
      |-- some-project.mdx  

```

Any file that is _not_ sourced from `pages` can contain any of the following `frontmatter` but a `title` is required, this is how the theme distinguishes between pages and other `.mdx` files

<!-- prettier-ignore -->
```
// src/posts/2020/02/some-post.mdx
---
title: Some Post
date: 2020-01-01
dateModified: 20-20-2020
status: draft // => means it won't be rendered
isPrivate: // -> it will be rendered but you can use this prop as a filter
author: Paul Scanlon
tags: ["JavaScript", "React", "GatsbyJs", "HTML", "CSS", "theme-ui"]
featuredImage: markus-spiske-466ENaLuhLY-unsplash.jpg
embeddedImages:
  - markus-spiske-FXFz-sW0uwo-unsplash.jpg
---
```

### Embedded Images

By using the The `<Img />` component from `gatsby-image` you can pass the image data queried by GraphQL.

The `original`, `fixed` and `fluid` data is available via `props.embedded.image(n)`

```
<Img fluid={props.embedded.image1.fluid} />
<Img fixed={props.embedded.image1.fixed} />
```

You can also use the Theme UI `<Image />` component but passing it a `src`

```
<Image src={props.embedded.image1.fluid.src} />
```

`image1` in this example would be `markus-spiske-FXFz-sW0uwo-unsplash.jpg`

### markdown

The theme supports the complete markdown spec and you can see how to use markdown in the [demo](https://gatsby-theme-terminal.netlify.com/markdown/)

### theme-ui/components

The theme supports _all_ the components provided by [theme-ui/components](https://theme-ui.com/components) and you can see in the [demo](https://gatsby-theme-terminal.netlify.com/theme-ui-components/) how they are used.

### gatsby-theme-terminal/components

The theme also comes with it's own components _but_... These are purely to provide access to the source nodes. What you choose to render is completely up to you!

For example to display a list of _all_ files sourced from the `source` theme option you _could_ do something like this. This component can be used in ANY `.mdx` file 😎

```javascript
<SourceList>
  {source => (
    <ul>
      {source.map((edge, index) => {
        const {
          frontmatter: { title },
        } = edge.node
        return <li key={index}>{title}</li>
      })}
    </ul>
  )}
</SourceList>
```

You can see more about how to use the theme components in the [demo](https://gatsby-theme-terminal.netlify.com/components/)

### Component Shadowing

There is very little to shadow because almost everything is exposed by the components but you might want to add your own logo.

To do this create the following directories `@pauliescanlon/gatsby-theme-terminal/components/Logo` in the `src` directory of your project and then create a `Logo.js` file. You can do anything you like in here.

```
|-- src
    |-- @pauliescanlon
      |-- gatsby-theme-terminal
        |-- components
          |-- Logo
            |-- Logo.js
```

If you would like to customize any part of the theme you can do so by shadowing the theme file.

To do this create the following directory `src/gatsby-plugin-theme-ui` and then create an `index.js`

```javascript
// src/gatsby-plugin-theme-ui/index.js

import baseTheme from '@pauliescanlon/gatsby-theme-terminal/src/gatsby-plugin-theme-ui'

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: '#FF4081',
    secondary: '#03A9F4',
    success: '#FFEB3B',
    background: '#232323',
    surface: '#393939',
  },
}
```

### favicon

favicon(s) need to be saved in `static/images` and named `favicon-16x16.png` and `favicon-32x32.png` along with an `.icon` file called `favicon.ico`

If you're using **gatsby-theme-terminal** in your project i'd love to hear from you [@pauliescanlon](https://twitter.com/PaulieScanlon)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/P5P31B7G8)
