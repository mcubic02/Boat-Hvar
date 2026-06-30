import sharp from 'sharp'

const SOURCE = 'public/images/galerija1.webp'
const OUTPUT = 'public/og-image.jpg'

await sharp(SOURCE)
  .resize(1200, 630, { fit: 'cover', position: 'center' })
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(OUTPUT)

const { width, height } = await sharp(OUTPUT).metadata()
console.log(`OG image saved: ${OUTPUT} (${width}x${height})`)
