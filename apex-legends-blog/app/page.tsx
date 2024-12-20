import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
        Welcome to an Apex community focused on strategy
      </h1>
      <Image 
        src="/apex-legends-logo.jpg" 
        alt="" 
        width={600} 
        height={338} 
        className="rounded-lg shadow-lg mb-8"
      />
      <p className="text-xl mb-8 leading-relaxed">
        Join our community of passionate Apex Legends players dedicated to developing advanced strategies. 
        Level up your game with the latest tactics, team compositions, and in-depth analysis!
      </p>
      <div className="flex space-x-4">
        <Link href="/blog" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Read Our Blog Posts
        </Link>
        <Link href="/create" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Create a Post
        </Link>
      </div>
    </div>
  )
}

