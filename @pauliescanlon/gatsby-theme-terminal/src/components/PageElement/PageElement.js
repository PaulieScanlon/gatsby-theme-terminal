import React from 'react'
import { Global, css } from '@emotion/core'
import { Fragment } from 'react'

export const PageElement = ({ children }) => (
  <Fragment>
    <Global
      styles={css`
        @font-face {
          font-family: 'inconsolata';
          src: url('./fonts/Inconsolata-Regular.woff') format('woff');
          font-weight: 400;
          font-style: normal;
        }
        @font-face {
          font-family: 'inconsolata';
          src: url('./fonts/Inconsolata-Bold.woff') format('woff');
          font-weight: 700;
          font-style: normal;
        }
      `}
    />
    {children}
  </Fragment>
)
