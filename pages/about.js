import { MDXLayoutRenderer } from '@/components/MDXComponents'
const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const { getFileBySlug } = await import('@/lib/mdx')
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
