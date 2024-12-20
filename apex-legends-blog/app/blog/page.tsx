'use client'

import { useState, useEffect } from 'react'
import BlogPostList from '../components/BlogPostList'
import { fetchBlogPosts } from '../lib/api'

export default function BlogPage() {
  const [posts, setPosts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const loadPosts = async () => {
      const fetchedPosts = await fetchBlogPosts()
      setPosts(fetchedPosts)
    }
    loadPosts()
  }, [])

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <BlogPostList posts={filteredPosts} />
    </div>
  )
}

