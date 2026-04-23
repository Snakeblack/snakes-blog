import { MDXRemote } from 'next-mdx-remote'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { BlogNewsletterForm } from './NewsletterForm'

import AuthorLayout from '../layouts/AuthorLayout'
import PostLayout from '../layouts/PostLayout'
import PostSimple from '../layouts/PostSimple'

const layouts = {
  AuthorLayout,
  PostLayout,
  PostSimple,
}

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm: BlogNewsletterForm,
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const Layout = layouts[layout]
  if (!Layout) {
    return <MDXRemote {...mdxSource} components={MDXComponents} {...rest} />
  }

  return (
    <Layout {...rest}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </Layout>
  )
}

