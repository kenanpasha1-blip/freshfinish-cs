type Props = { data: object | object[] };

/**
 * Renders JSON-LD structured data in a type-safe way.
 * Accepts either a single object or an array of graphs.
 */
export default function StructuredData({ data }: Props) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <>
      {payload.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}
