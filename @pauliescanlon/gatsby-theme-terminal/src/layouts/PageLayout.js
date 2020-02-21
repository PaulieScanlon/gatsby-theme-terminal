/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Location } from '@reach/router'
import { ContextProvider } from '../context'

import { Main } from '../components/Main'
import { Intro } from '../components/Intro'

const PageLayout = ({ children }) => (
  <ContextProvider>
    <Main>
      <Location>
        {({ location }) => {
          const { pathname } = location
          return pathname === '/' ? <Intro /> : null
        }}
      </Location>
      {children}
    </Main>
  </ContextProvider>
)

export default PageLayout
