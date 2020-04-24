/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from 'theme-ui'
import { Location } from '@reach/router'
import { ContextProvider } from '../context'

import { Seo } from '../components/Seo'
import { Main } from '../components/Main'

import { useConfig } from '../data'

const PageLayout = ({ children }) => {
  const {
    site: {
      siteMetadata: { name, description, keywords, siteUrl, siteImage, lang },
    },
  } = useConfig()

  return (
    <ContextProvider>
      <Main>
        <Location>
          {({ location }) => {
            const { pathname } = location
            // console.log('pathName: ', pathname)
            const titleTemplate = pathname.replace(/\//gm, '')
            return (
              <Fragment>
                <Seo
                  type="website"
                  title={name}
                  titleTemplate={titleTemplate}
                  description={description}
                  siteUrl={siteUrl}
                  image={siteImage}
                  path={pathname}
                  keywords={keywords}
                  lang={lang}
                />
              </Fragment>
            )
          }}
        </Location>
        {children}
      </Main>
    </ContextProvider>
  )
}

export default PageLayout
