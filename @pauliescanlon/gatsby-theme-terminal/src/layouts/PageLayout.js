/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from 'theme-ui'
import { Location } from '@reach/router'
import { ContextProvider } from '../context'

import { Seo } from '../components/Seo'
import { Main } from '../components/Main'
import { Intro } from '../components/Intro'
import { useConfig } from '../data'

const PageLayout = ({ children }) => {
  const {
    site: {
      siteMetadata: { name, description, keywords, siteURL, siteImage, lang },
    },
  } = useConfig()

  // console.log('name: ', name)
  // console.log('description: ', description)
  // console.log('keywords: ', keywords)
  // console.log('siteURL: ', siteURL)
  // console.log('siteImage: ', siteImage)
  // console.log('lang: ', lang)

  return (
    <ContextProvider>
      <Main>
        <Location>
          {({ location }) => {
            const { pathname } = location
            console.log('pathName: ', pathname)
            const titleTemplate = pathname.replace(/\//gm, '')
            return (
              <Fragment>
                <Seo
                  type="website"
                  title={name}
                  titleTemplate={titleTemplate}
                  description={description}
                  siteURL={siteURL}
                  image={siteImage}
                  path={pathname}
                  keywords={keywords}
                  lang={lang}
                />
                {pathname === '/' ? <Intro /> : null}
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
