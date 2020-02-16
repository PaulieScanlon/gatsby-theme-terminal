/** @jsx jsx */

import { jsx } from "theme-ui"
import { useConfig } from "../../data"

import * as styles from "./styles"

export const Intro = () => {
  const {
    site: {
      siteMetadata: { title, description, links },
    },
  } = useConfig()

  return (
    <section sx={styles.intro}>
      <h1 sx={styles.title}>{title}</h1>
      <p sx={styles.description}>{description}</p>
      {Object.keys(links).map((link, index) => (
        <span key={index} sx={styles.linkSpan}>
          {`${link}: `}
          <a sx={styles.link} href={links[link]}>
            {links[link]}
          </a>
        </span>
      ))}
    </section>
  )
}
