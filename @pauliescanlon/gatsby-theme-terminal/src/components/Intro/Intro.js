/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useConfig } from '../../data'

import * as styles from './styles'

export const Intro = () => {
  const {
    site: {
      siteMetadata: { name, description },
    },
  } = useConfig()

  return (
    <section sx={styles.intro}>
      <h1 sx={styles.title}>{name}</h1>
      <p sx={styles.description}>{description}</p>
    </section>
  )
}
