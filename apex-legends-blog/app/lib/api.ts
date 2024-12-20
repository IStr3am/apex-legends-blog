const API_URL = 'http://localhost:8000/api';

export async function fetchBlogPosts() {
  const response = await fetch(`${API_URL}/posts/`);
  if (!response.ok) {
    throw new Error('Failed to fetch blog posts');
  }
  return response.json();
}

export async function fetchBlogPost(id: number) {
  const response = await fetch(`${API_URL}/posts/${id}/`);
  if (!response.ok) {
    throw new Error('Failed to fetch blog post');
  }
  return response.json();
}

export async function createBlogPost(title: string, content: string) {
  const response = await fetch(`${API_URL}/posts/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content }),
  });
  if (!response.ok) {
    throw new Error('Failed to create blog post');
  }
  return response.json();
}

