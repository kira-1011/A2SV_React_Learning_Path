import { BlogType } from '../redux/features/blogs/blogsSlice'
import Link from 'next/link'
import React from 'react'
import ReactionButtons from './ReactionButtons'

const Blog = ({ blog }: { blog: BlogType }) => {
  return (
    <div
      className="rounded px-4 py-2 border space-y-4 border-gray-400 w-fit hover:border-gray-900"
    >
      <div className="space-y-2">
        <h3 className="font-bold text-2xl truncate">{blog.title}</h3>
      </div>
      <p className="truncate text-xl">{blog.content}</p>

      <div className="space-y-4">
      <ReactionButtons blog={blog} />
      <Link href={`/blogs/${blog.id}`} className="inline-block space-y-4">
        <button className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-600 hover:text-white disabled:bg-gray-200 disabled:text-gray-500">
          Read blog
        </button>
      </Link>
      </div>
    </div>
  )
}

export default Blog