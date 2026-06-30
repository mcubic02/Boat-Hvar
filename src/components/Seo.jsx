import { buildStructuredData } from '../data/seo'

function Seo() {
  const schemas = buildStructuredData()

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}

export default Seo
