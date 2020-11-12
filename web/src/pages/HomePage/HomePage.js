import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <BlogLayout>
      <h1>Home</h1>
      <p>
        <BlogPostCell />
      </p>
    </BlogLayout>
  )
}

export default HomePage
