import { mix } from '@theme-ui/color'
import * as theme from '../gatsby-plugin-theme-ui'

export const featuredImage = {
  mb: 4,
}

export const title = {
  mb: 4,
}

export const tag = ({ index, tags }) => ({
  mb: 2,
  mr: 2,
  color: mix('muted', 'primary', `${index / tags.length}`),
  borderColor: mix('muted', 'primary', `${index / tags.length}`),
  ...theme.default.badges,
})

export const flex = {
  flexWrap: 'wrap',
}

export const box = {
  width: ['100%', '50%'],
}

export const text = {
  color: 'muted',
}

export const rightText = {
  ...text,
  textAlign: ['left', 'right'],
}
