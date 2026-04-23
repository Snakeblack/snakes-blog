import { serialize } from 'next-mdx-remote/serialize'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import readingTime from 'reading-time'
import { visit } from 'unist-util-visit'
import getAllFilesRecursively from './utils/files'
import { formatSlug, dateSortDesc } from './mdx-utils'

// Remark packages
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkExtractFrontmatter from './remark-extract-frontmatter'
import remarkCodeTitles from './remark-code-title'
import remarkTocHeadings from './remark-toc-headings'
import remarkImgToJsx from './remark-img-to-jsx'

// Rehype packages
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import rehypeCitation from 'rehype-citation'
import rehypePrismPlus from 'rehype-prism-plus'

const root = process.cwd()

export function getFiles(type) {
  const prefixPaths = path.join(root, 'data', type)
  const files = getAllFilesRecursively(prefixPaths)
  return files.map((file) => file.slice(prefixPaths.length + 1).replace(/\\/g, '/'))
}

export async function getFileBySlug(type, slug) {
  const mdxPath = path.join(root, 'data', type, `${slug}.mdx`)
  const mdPath = path.join(root, 'data', type, `${slug}.md`)
  const source = fs.existsSync(mdxPath)
    ? fs.readFileSync(mdxPath, 'utf8')
    : fs.readFileSync(mdPath, 'utf8')

  const toc = []

  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [
        remarkExtractFrontmatter,
        [remarkTocHeadings, { exportRef: toc }],
        remarkGfm,
        remarkCodeTitles,
        remarkMath,
        remarkImgToJsx,
      ],
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
        rehypeKatex,
        [rehypeCitation, { path: path.join(root, 'data') }],
        [rehypePrismPlus, { ignoreMissing: true }],
      ],
      format: 'mdx',
    },
  })

  return {
    mdxSource,
    toc,
    frontMatter: {
      readingTime: readingTime(mdxSource.compiledSource),
      slug: slug || null,
      fileName: fs.existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
      ...mdxSource.frontmatter,
      date: mdxSource.frontmatter.date ? new Date(mdxSource.frontmatter.date).toISOString() : null,
    },
  }
}

export async function getAllFilesFrontMatter(folder) {
  const prefixPaths = path.join(root, 'data', folder)

  const files = getAllFilesRecursively(prefixPaths)

  const allFrontMatter = []

  files.forEach((file) => {
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
    if (path.extname(fileName) !== '.md' && path.extname(fileName) !== '.mdx') {
      return
    }
    const source = fs.readFileSync(file, 'utf8')
    const { data: frontmatter } = matter(source)
    if (frontmatter.draft !== true) {
      allFrontMatter.push({
        ...frontmatter,
        slug: formatSlug(fileName),
        date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
      })
    }
  })

  return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date))
}
