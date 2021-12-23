import React from 'react'
import { withPrefix, Link as GatsbyLink } from 'gatsby'
import { Link, Box } from 'theme-ui'
import slugify from 'slugify'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'
import 'tippy.js/animations/shift-away.css'

function padHrefWithAnchor(href, anchor) {
  if (anchor) {
    return `${href}#${slugify(anchor)}`
  }
  return href
}

export const AnchorTag = ({ title, href, references = [], ...restProps }) => {
  const anchorSlug = href

  // tippy customisation
  const tippyStyle = {
    fontSize: 1,
    fontFamily: 'sans',
    wordBreak: 'break-word',
    whiteSpace: 'pre-wrap',
    p: 'var(--space-2xs)',
  }
  const tippyArrow = true
  const tippyInteractive = true
  const tippyAnimation = 'shift-away'
  const tippyTheme = 'light'

  const ref = references.find((x) => {
    let matched = `/${x.refWord}` === href
    if (matched) return matched
    if (x.target) {
      const frontmatter = x.target.frontmatter || {}
      matched =
        frontmatter.title === title ||
        frontmatter.alias === title ||
        (frontmatter.aliases || []).includes(title) ||
        withPrefix(x.target.fields.slug || '') === withPrefix(anchorSlug)
    }
    return matched
  })

  let child

  // console.log(href)

  // bidirectional links via [[]]
  if (ref && ref.target.fields.slug && title) {
    const fileds = ref.target.fields
    title = title || ref.refWord
    child = (
      <Tippy
        arrow={tippyArrow}
        interactive={tippyInteractive}
        theme={tippyTheme}
        animation={tippyAnimation}
        content={
          <Box>
            <Link as={GatsbyLink} href={fileds.slug} sx={tippyStyle}>
              {fileds.slug}
            </Link>
          </Box>
        }
      >
        <Link
          as={GatsbyLink}
          {...restProps}
          to={padHrefWithAnchor(fileds.slug, ref.targetAnchor)}
          title={title}
          sx={{ color: 'secondary' }}
        >
          {title}
        </Link>
      </Tippy>
    )
  }
  // outside links via markdown syntax
  else {
    child = (
      <Tippy
        arrow={tippyArrow}
        interactive={tippyInteractive}
        theme={tippyTheme}
        animation={tippyAnimation}
        content={
          <Box>
            <Link href={href} sx={tippyStyle}>
              {href}
            </Link>
          </Box>
        }
      >
        <Link
          {...restProps}
          href={!href || (href.indexOf && href.indexOf('#') === 0) ? href : withPrefix(href)}
          title={title}
        ></Link>
      </Tippy>
    )
  }

  return child
}
