import siteMetadata from '@/data/siteMetadata'

const NewsletterForm = ({ title = '' }) => {
  return (
    <div>
      <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</div>
      <a
        className="w-72 pt-2 text-sm text-gray-800 dark:text-gray-100"
        href="https://buttondown.email/snakeblack"
        target="_blank"
        rel="noopener noreferrer"
      >
        Suscribete a la Newsletter de Snake&apos;s Blog
      </a>
    </div>
  )
}

export default NewsletterForm

export const BlogNewsletterForm = ({ title }) => (
  <div className="flex items-center justify-center">
    <div className="bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8">
      <NewsletterForm title={title} />
    </div>
  </div>
)
