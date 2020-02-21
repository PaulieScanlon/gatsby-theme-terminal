/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Location } from '@reach/router'

import { Main } from '../components/Main'
import { Intro } from '../components/Intro'

const PageLayout = ({ children }) => (
  <Main>
    <Location>
      {({ location }) => {
        const { pathname } = location
        return pathname === '/' ? <Intro /> : null
      }}
    </Location>
    {children}
  </Main>
)

export default PageLayout
