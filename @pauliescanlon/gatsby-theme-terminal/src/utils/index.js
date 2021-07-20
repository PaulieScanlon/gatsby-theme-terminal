const IMAGE_KEY = 'image'

export const transformImages = imageArray => {
  if (Array.isArray(imageArray)) {
    return imageArray.reduce((images, image, index) => {
      images[`${IMAGE_KEY}${index + 1}`] = images[
        `${IMAGE_KEY}${index + 1}`
      ] || {
        ...image.childImageSharp,
      }
      return images
    }, {})
  }
  return {}
}
