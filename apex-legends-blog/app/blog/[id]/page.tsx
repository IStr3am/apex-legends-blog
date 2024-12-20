import { fetchBlogPost } from '../../lib/api'

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const post = await fetchBlogPost(parseInt(params.id));

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
      <p className="mb-4 text-gray-600">Posted on: {new Date(post.created_at).toLocaleDateString()}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}

