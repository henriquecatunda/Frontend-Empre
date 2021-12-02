/** @type {import('next').NextConfig} */

module.exports = {
  ...withImages(),
    future: {
        webpack5: true,
    },
    reactStrictMode: true,
    images: {
      disableStaticImages: true
    }
}
    
const withImages = require('next-images')
module.exports = withImages({
 esModule: true
})