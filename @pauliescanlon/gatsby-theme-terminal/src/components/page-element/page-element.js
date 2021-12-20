import React, { useEffect } from 'react'
import { Global, css } from '@emotion/react'
import { Fragment } from 'react'

import { useConfig } from '../../data'

export const PageElement = ({ children }) => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useConfig()

  return (
    <Fragment>
      {/* import mono font */}
      <Global
        styles={css`
          @font-face {
            font-family: 'Inconsolata';
            src: url('${siteUrl}/fonts/Inconsolata-Regular.woff2') format('woff2');
            font-weight: 400;
            font-style: normal;
          }
          @font-face {
            font-family: 'Inconsolata';
            src: url('${siteUrl}/fonts/Inconsolata-Bold.woff2') format('woff2');
            font-weight: 700;
            font-style: normal;
          }
        `}
      />

      <Global
        styles={css`
          /* cyrillic-ext */
          @font-face {
            font-family: 'EB Garamond';
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg8KC0VCIEdhcmFtb25kEAIQCiAFKgIIADgB.woff2)
              format('woff2');
            unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
          }
          /* cyrillic */
          @font-face {
            font-family: 'EB Garamond';
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg8KC0VCIEdhcmFtb25kEAIQAyAFKgIIADgB.woff2)
              format('woff2');
            unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }
          /* greek-ext */
          @font-face {
            font-family: 'EB Garamond';
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg8KC0VCIEdhcmFtb25kEAIQCyAFKgIIADgB.woff2)
              format('woff2');
            unicode-range: U+1F00-1FFF;
          }
          /* greek */
          @font-face {
            font-family: 'EB Garamond';
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg8KC0VCIEdhcmFtb25kEAIQBCAFKgIIADgB.woff2)
              format('woff2');
            unicode-range: U+0370-03FF;
          }
          /* vietnamese */
          @font-face {
            font-family: 'EB Garamond';
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg8KC0VCIEdhcmFtb25kEAIQCCAFKgIIADgB.woff2)
              format('woff2');
            unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9,
              U+20AB;
          }
          /* latin-ext */
          @font-face {
            font-family: 'EB Garamond';
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg8KC0VCIEdhcmFtb25kEAIQCSAFKgIIADgB.woff2)
              format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
              U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'EB Garamond';
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg8KC0VCIEdhcmFtb25kEAIQByAFKgIIAA==.woff2)
              format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
              U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* cyrillic-ext */
          @font-face {
            font-family: 'EB Garamond';
            font-style: italic;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg8KC0VCIEdhcmFtb25kEAIQCiAFKgIIADgB.woff2)
              format('woff2');
            unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
          }
          /* cyrillic */
          @font-face {
            font-family: 'EB Garamond';
            font-style: italic;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg8KC0VCIEdhcmFtb25kEAIQAyAFKgIIADgB.woff2)
              format('woff2');
            unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }
          /* greek-ext */
          @font-face {
            font-family: 'EB Garamond';
            font-style: italic;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg8KC0VCIEdhcmFtb25kEAIQCyAFKgIIADgB.woff2)
              format('woff2');
            unicode-range: U+1F00-1FFF;
          }
          /* greek */
          @font-face {
            font-family: 'EB Garamond';
            font-style: italic;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg8KC0VCIEdhcmFtb25kEAIQBCAFKgIIADgB.woff2)
              format('woff2');
            unicode-range: U+0370-03FF;
          }
          /* vietnamese */
          @font-face {
            font-family: 'EB Garamond';
            font-style: italic;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg8KC0VCIEdhcmFtb25kEAIQCCAFKgIIADgB.woff2)
              format('woff2');
            unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9,
              U+20AB;
          }
          /* latin-ext */
          @font-face {
            font-family: 'EB Garamond';
            font-style: italic;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg8KC0VCIEdhcmFtb25kEAIQCSAFKgIIADgB.woff2)
              format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
              U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'EB Garamond';
            font-style: italic;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg8KC0VCIEdhcmFtb25kEAIQByAFKgIIAA==.woff2)
              format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
              U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* cyrillic-ext */
          @font-face {
            font-family: 'EB Garamond';
            font-style: italic;
            font-weight: 600;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg8KC0VCIEdhcmFtb25kEAIQCiAFKgIIADgB.woff2)
              format('woff2');
            unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
          }
          /* cyrillic */
          @font-face {
            font-family: 'EB Garamond';
            font-style: italic;
            font-weight: 600;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg8KC0VCIEdhcmFtb25kEAIQAyAFKgIIADgB.woff2)
              format('woff2');
            unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }
          /* greek-ext */
          @font-face {
            font-family: 'EB Garamond';
            font-style: italic;
            font-weight: 600;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg8KC0VCIEdhcmFtb25kEAIQCyAFKgIIADgB.woff2)
              format('woff2');
            unicode-range: U+1F00-1FFF;
          }
          /* greek */
          @font-face {
            font-family: 'EB Garamond';
            font-style: italic;
            font-weight: 600;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg8KC0VCIEdhcmFtb25kEAIQBCAFKgIIADgB.woff2)
              format('woff2');
            unicode-range: U+0370-03FF;
          }
          /* vietnamese */
          @font-face {
            font-family: 'EB Garamond';
            font-style: italic;
            font-weight: 600;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg8KC0VCIEdhcmFtb25kEAIQCCAFKgIIADgB.woff2)
              format('woff2');
            unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9,
              U+20AB;
          }
          /* latin-ext */
          @font-face {
            font-family: 'EB Garamond';
            font-style: italic;
            font-weight: 600;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg8KC0VCIEdhcmFtb25kEAIQCSAFKgIIADgB.woff2)
              format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
              U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'EB Garamond';
            font-style: italic;
            font-weight: 600;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg8KC0VCIEdhcmFtb25kEAIQByAFKgIIAA==.woff2)
              format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
              U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* cyrillic-ext */
          @font-face {
            font-family: 'EB Garamond';
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg8KC0VCIEdhcmFtb25kEAIQCiAFKgIIADgB.woff2)
              format('woff2');
            unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
          }
          /* cyrillic */
          @font-face {
            font-family: 'EB Garamond';
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg8KC0VCIEdhcmFtb25kEAIQAyAFKgIIADgB.woff2)
              format('woff2');
            unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }
          /* greek-ext */
          @font-face {
            font-family: 'EB Garamond';
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg8KC0VCIEdhcmFtb25kEAIQCyAFKgIIADgB.woff2)
              format('woff2');
            unicode-range: U+1F00-1FFF;
          }
          /* greek */
          @font-face {
            font-family: 'EB Garamond';
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg8KC0VCIEdhcmFtb25kEAIQBCAFKgIIADgB.woff2)
              format('woff2');
            unicode-range: U+0370-03FF;
          }
          /* vietnamese */
          @font-face {
            font-family: 'EB Garamond';
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg8KC0VCIEdhcmFtb25kEAIQCCAFKgIIADgB.woff2)
              format('woff2');
            unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9,
              U+20AB;
          }
          /* latin-ext */
          @font-face {
            font-family: 'EB Garamond';
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg8KC0VCIEdhcmFtb25kEAIQCSAFKgIIADgB.woff2)
              format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
              U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'EB Garamond';
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg8KC0VCIEdhcmFtb25kEAIQByAFKgIIAA==.woff2)
              format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
              U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* cyrillic-ext */
          @font-face {
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg0KC0VCIEdhcmFtb25kEAogBSoCCAA4AQ==.woff2)
              format('woff2');
            unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
          }
          /* cyrillic */
          @font-face {
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg0KC0VCIEdhcmFtb25kEAMgBSoCCAA4AQ==.woff2)
              format('woff2');
            unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }
          /* greek-ext */
          @font-face {
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg0KC0VCIEdhcmFtb25kEAsgBSoCCAA4AQ==.woff2)
              format('woff2');
            unicode-range: U+1F00-1FFF;
          }
          /* greek */
          @font-face {
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg0KC0VCIEdhcmFtb25kEAQgBSoCCAA4AQ==.woff2)
              format('woff2');
            unicode-range: U+0370-03FF;
          }
          /* vietnamese */
          @font-face {
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg0KC0VCIEdhcmFtb25kEAggBSoCCAA4AQ==.woff2)
              format('woff2');
            unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9,
              U+20AB;
          }
          /* latin-ext */
          @font-face {
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg0KC0VCIEdhcmFtb25kEAkgBSoCCAA4AQ==.woff2)
              format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
              U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg0KC0VCIEdhcmFtb25kEAcgBSoCCAA=.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
              U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* cyrillic-ext */
          @font-face {
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg0KC0VCIEdhcmFtb25kEAogBSoCCAA4AQ==.woff2)
              format('woff2');
            unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
          }
          /* cyrillic */
          @font-face {
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg0KC0VCIEdhcmFtb25kEAMgBSoCCAA4AQ==.woff2)
              format('woff2');
            unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }
          /* greek-ext */
          @font-face {
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg0KC0VCIEdhcmFtb25kEAsgBSoCCAA4AQ==.woff2)
              format('woff2');
            unicode-range: U+1F00-1FFF;
          }
          /* greek */
          @font-face {
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg0KC0VCIEdhcmFtb25kEAQgBSoCCAA4AQ==.woff2)
              format('woff2');
            unicode-range: U+0370-03FF;
          }
          /* vietnamese */
          @font-face {
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg0KC0VCIEdhcmFtb25kEAggBSoCCAA4AQ==.woff2)
              format('woff2');
            unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9,
              U+20AB;
          }
          /* latin-ext */
          @font-face {
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg0KC0VCIEdhcmFtb25kEAkgBSoCCAA4AQ==.woff2)
              format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
              U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg0KC0VCIEdhcmFtb25kEAcgBSoCCAA=.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
              U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* cyrillic-ext */
          @font-face {
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg0KC0VCIEdhcmFtb25kEAogBSoCCAA4AQ==.woff2)
              format('woff2');
            unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
          }
          /* cyrillic */
          @font-face {
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg0KC0VCIEdhcmFtb25kEAMgBSoCCAA4AQ==.woff2)
              format('woff2');
            unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }
          /* greek-ext */
          @font-face {
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg0KC0VCIEdhcmFtb25kEAsgBSoCCAA4AQ==.woff2)
              format('woff2');
            unicode-range: U+1F00-1FFF;
          }
          /* greek */
          @font-face {
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg0KC0VCIEdhcmFtb25kEAQgBSoCCAA4AQ==.woff2)
              format('woff2');
            unicode-range: U+0370-03FF;
          }
          /* vietnamese */
          @font-face {
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg0KC0VCIEdhcmFtb25kEAggBSoCCAA4AQ==.woff2)
              format('woff2');
            unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9,
              U+20AB;
          }
          /* latin-ext */
          @font-face {
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg0KC0VCIEdhcmFtb25kEAkgBSoCCAA4AQ==.woff2)
              format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
              U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg0KC0VCIEdhcmFtb25kEAcgBSoCCAA=.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
              U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* cyrillic-ext */
          @font-face {
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg0KC0VCIEdhcmFtb25kEAogBSoCCAA4AQ==.woff2)
              format('woff2');
            unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
          }
          /* cyrillic */
          @font-face {
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg0KC0VCIEdhcmFtb25kEAMgBSoCCAA4AQ==.woff2)
              format('woff2');
            unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }
          /* greek-ext */
          @font-face {
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg0KC0VCIEdhcmFtb25kEAsgBSoCCAA4AQ==.woff2)
              format('woff2');
            unicode-range: U+1F00-1FFF;
          }
          /* greek */
          @font-face {
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg0KC0VCIEdhcmFtb25kEAQgBSoCCAA4AQ==.woff2)
              format('woff2');
            unicode-range: U+0370-03FF;
          }
          /* vietnamese */
          @font-face {
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg0KC0VCIEdhcmFtb25kEAggBSoCCAA4AQ==.woff2)
              format('woff2');
            unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9,
              U+20AB;
          }
          /* latin-ext */
          @font-face {
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg0KC0VCIEdhcmFtb25kEAkgBSoCCAA4AQ==.woff2)
              format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
              U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'EB Garamond';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ebgaramond/v19/~Cg0KC0VCIEdhcmFtb25kEAcgBSoCCAA=.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
              U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
        `}
      />

      {/* import Lato font */}
      <Global
        styles={css`
          /* latin-ext */
          @font-face {
            font-family: 'Lato';
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/lato/v20/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2) format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
              U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'Lato';
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/lato/v20/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
              U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* latin-ext */
          @font-face {
            font-family: 'Lato';
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/lato/v20/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2) format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
              U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'Lato';
            font-style: italic;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/lato/v20/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
              U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* latin-ext */
          @font-face {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/lato/v20/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2) format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
              U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/lato/v20/S6uyw4BMUTPHjx4wXiWtFCc.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
              U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* latin-ext */
          @font-face {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/lato/v20/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2) format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
              U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/lato/v20/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
              U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
        `}
      />

      {/* Utopia font style */}
      <Global
        styles={css`
          /* @link https://utopia.fyi/type/calculator?c=320,20,1.25,1200,22,1.414,6,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l */

          :root {
            --fluid-min-width: 320;
            --fluid-max-width: 1200;

            --fluid-screen: 100vw;
            --fluid-bp: calc(
              (var(--fluid-screen) - var(--fluid-min-width) / 16 * 1rem) /
                (var(--fluid-max-width) - var(--fluid-min-width))
            );
          }

          @media screen and (min-width: 1200px) {
            :root {
              --fluid-screen: calc(var(--fluid-max-width) * 1px);
            }
          }

          :root {
            --f--2-min: 12.8;
            --f--2-max: 11;
            --step--2: calc(((var(--f--2-min) / 16) * 1rem) + (var(--f--2-max) - var(--f--2-min)) * var(--fluid-bp));

            --f--1-min: 16;
            --f--1-max: 15.56;
            --step--1: calc(((var(--f--1-min) / 16) * 1rem) + (var(--f--1-max) - var(--f--1-min)) * var(--fluid-bp));

            --f-0-min: 20;
            --f-0-max: 22;
            --step-0: calc(((var(--f-0-min) / 16) * 1rem) + (var(--f-0-max) - var(--f-0-min)) * var(--fluid-bp));

            --f-1-min: 25;
            --f-1-max: 31.11;
            --step-1: calc(((var(--f-1-min) / 16) * 1rem) + (var(--f-1-max) - var(--f-1-min)) * var(--fluid-bp));

            --f-2-min: 31.25;
            --f-2-max: 43.99;
            --step-2: calc(((var(--f-2-min) / 16) * 1rem) + (var(--f-2-max) - var(--f-2-min)) * var(--fluid-bp));

            --f-3-min: 39.06;
            --f-3-max: 62.2;
            --step-3: calc(((var(--f-3-min) / 16) * 1rem) + (var(--f-3-max) - var(--f-3-min)) * var(--fluid-bp));

            --f-4-min: 48.83;
            --f-4-max: 87.95;
            --step-4: calc(((var(--f-4-min) / 16) * 1rem) + (var(--f-4-max) - var(--f-4-min)) * var(--fluid-bp));

            --f-5-min: 61.04;
            --f-5-max: 124.36;
            --step-5: calc(((var(--f-5-min) / 16) * 1rem) + (var(--f-5-max) - var(--f-5-min)) * var(--fluid-bp));

            --f-6-min: 76.29;
            --f-6-max: 175.84;
            --step-6: calc(((var(--f-6-min) / 16) * 1rem) + (var(--f-6-max) - var(--f-6-min)) * var(--fluid-bp));
          }
        `}
      />

      {/* Utopia space */}
      <Global
        styles={css`
          /* @link https://utopia.fyi/space/calculator?c=320,20,1.25,1200,22,1.414,6,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l */

          :root {
            --fluid-min-width: 320;
            --fluid-max-width: 1200;

            --fluid-screen: 100vw;
            --fluid-bp: calc(
              (var(--fluid-screen) - var(--fluid-min-width) / 16 * 1rem) /
                (var(--fluid-max-width) - var(--fluid-min-width))
            );
          }

          @media screen and (min-width: 1200px) {
            :root {
              --fluid-screen: calc(var(--fluid-max-width) * 1px);
            }
          }

          :root {
            --fc-3xs-min: (var(--fc-s-min) * 0.25);
            --fc-3xs-max: (var(--fc-s-max) * 0.25);

            --fc-2xs-min: (var(--fc-s-min) * 0.5);
            --fc-2xs-max: (var(--fc-s-max) * 0.5);

            --fc-xs-min: (var(--fc-s-min) * 0.75);
            --fc-xs-max: (var(--fc-s-max) * 0.75);

            --fc-s-min: (var(--f-0-min, 20));
            --fc-s-max: (var(--f-0-max, 22));

            --fc-m-min: (var(--fc-s-min) * 1.5);
            --fc-m-max: (var(--fc-s-max) * 1.5);

            --fc-l-min: (var(--fc-s-min) * 2);
            --fc-l-max: (var(--fc-s-max) * 2);

            --fc-xl-min: (var(--fc-s-min) * 3);
            --fc-xl-max: (var(--fc-s-max) * 3);

            --fc-2xl-min: (var(--fc-s-min) * 4);
            --fc-2xl-max: (var(--fc-s-max) * 4);

            --fc-3xl-min: (var(--fc-s-min) * 6);
            --fc-3xl-max: (var(--fc-s-max) * 6);

            /* T-shirt sizes */
            --space-3xs: calc(
              ((var(--fc-3xs-min) / 16) * 1rem) + (var(--fc-3xs-max) - var(--fc-3xs-min)) * var(--fluid-bp)
            );
            --space-2xs: calc(
              ((var(--fc-2xs-min) / 16) * 1rem) + (var(--fc-2xs-max) - var(--fc-2xs-min)) * var(--fluid-bp)
            );
            --space-xs: calc(
              ((var(--fc-xs-min) / 16) * 1rem) + (var(--fc-xs-max) - var(--fc-xs-min)) * var(--fluid-bp)
            );
            --space-s: calc(((var(--fc-s-min) / 16) * 1rem) + (var(--fc-s-max) - var(--fc-s-min)) * var(--fluid-bp));
            --space-m: calc(((var(--fc-m-min) / 16) * 1rem) + (var(--fc-m-max) - var(--fc-m-min)) * var(--fluid-bp));
            --space-l: calc(((var(--fc-l-min) / 16) * 1rem) + (var(--fc-l-max) - var(--fc-l-min)) * var(--fluid-bp));
            --space-xl: calc(
              ((var(--fc-xl-min) / 16) * 1rem) + (var(--fc-xl-max) - var(--fc-xl-min)) * var(--fluid-bp)
            );
            --space-2xl: calc(
              ((var(--fc-2xl-min) / 16) * 1rem) + (var(--fc-2xl-max) - var(--fc-2xl-min)) * var(--fluid-bp)
            );
            --space-3xl: calc(
              ((var(--fc-3xl-min) / 16) * 1rem) + (var(--fc-3xl-max) - var(--fc-3xl-min)) * var(--fluid-bp)
            );

            /* One-up pairs */
            --space-3xs-2xs: calc(
              ((var(--fc-3xs-min) / 16) * 1rem) + (var(--fc-2xs-max) - var(--fc-3xs-min)) * var(--fluid-bp)
            );
            --space-2xs-xs: calc(
              ((var(--fc-2xs-min) / 16) * 1rem) + (var(--fc-xs-max) - var(--fc-2xs-min)) * var(--fluid-bp)
            );
            --space-xs-s: calc(
              ((var(--fc-xs-min) / 16) * 1rem) + (var(--fc-s-max) - var(--fc-xs-min)) * var(--fluid-bp)
            );
            --space-s-m: calc(((var(--fc-s-min) / 16) * 1rem) + (var(--fc-m-max) - var(--fc-s-min)) * var(--fluid-bp));
            --space-m-l: calc(((var(--fc-m-min) / 16) * 1rem) + (var(--fc-l-max) - var(--fc-m-min)) * var(--fluid-bp));
            --space-l-xl: calc(
              ((var(--fc-l-min) / 16) * 1rem) + (var(--fc-xl-max) - var(--fc-l-min)) * var(--fluid-bp)
            );
            --space-xl-2xl: calc(
              ((var(--fc-xl-min) / 16) * 1rem) + (var(--fc-2xl-max) - var(--fc-xl-min)) * var(--fluid-bp)
            );
            --space-2xl-3xl: calc(
              ((var(--fc-2xl-min) / 16) * 1rem) + (var(--fc-3xl-max) - var(--fc-2xl-min)) * var(--fluid-bp)
            );

            /* Custom pairs */
            --space-s-l: calc(((var(--fc-s-min) / 16) * 1rem) + (var(--fc-l-max) - var(--fc-s-min)) * var(--fluid-bp));
          }
        `}
      />
      {children}
    </Fragment>
  )
}
