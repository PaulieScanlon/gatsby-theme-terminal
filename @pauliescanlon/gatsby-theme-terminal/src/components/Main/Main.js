/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import * as themeUiComponents from '@theme-ui/components'
import { Image } from '@theme-ui/components'

import { Nav } from '../Nav'
import { useConfig } from '../../data'

// components
import { Intro } from '../Intro'
import { SourceList } from '../SourceList'
import { TagList } from '../TagList'

import * as styles from './styles'

const components = {
  Intro,
  SourceList,
  TagList,
  EmbeddedImage: props => <Image src={props.src.fluid.src} />,
  ...themeUiComponents,
}

export const Main = ({ children }) => {
  const {
    site: {
      siteMetadata: {
        config: { sidebarWidth },
      },
    },
  } = useConfig()

  return (
    <div sx={styles.site}>
      <div sx={styles.lightbox} />
      <div sx={styles.sidebar({ sidebarWidth })}>
        <Nav />
      </div>
      <MDXProvider components={components}>
        <main sx={styles.main({ sidebarWidth })}>{children}</main>
      </MDXProvider>
    </div>
  )
}

Main.propTypes = {
  /** React children */
  children: PropTypes.any,
}
