import { mix } from '@theme-ui/color'
import * as theme from '../gatsby-plugin-theme-ui'

export const title = {
  mb: 2,
  fontSize: 3,
}

export const tag = ({ index, tags }) => ({
  mb: 2,
  mr: 2,
  color: mix('muted', 'primary', `${index / tags.length}`),
  borderColor: mix('muted', 'primary', `${index / tags.length}`),
  ...theme.default.badges,
})

export const dates = {
  flexWrap: 'wrap',
  mb: 2,
}

export const dateBox = {
  width: ['100%', '50%'],
}

export const dateModified = {
  textAlign: ['left', 'right'],
}
