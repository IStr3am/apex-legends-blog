import Link from 'next/link'

interface BlogPost {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

interface BlogPostListProps {
  posts: BlogPost[];
}

export default function BlogPostList({ posts }: BlogPostListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <div key={post.id} className="border rounded-lg overflow-hidden shadow-lg">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">
              {new Date(post.created_at).toLocaleDateString()}
            </p>
            <p className="mb-4">{post.content.slice(0, 150)}...</p>
            <Link 
              href={`/blog/${post.id}`}
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Read more
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

