'use client';

import Blog from '@/components/Blog';
import { useGetBlogsQuery } from '../redux/features/blogs/blogsApi';

export default function BlogList() {

  const { data, isSuccess, isError  } = useGetBlogsQuery();
  

  console.log(data);

  return (
    
    <main className="flex flex-col gap-12 items-center">
      <h1 className="mt-8 text-4xl font-bold">My Blogs</h1>
      {isError &&  <div>Something Went wrong...</div> }
      {isSuccess && data.map((blog) =>  <Blog key={blog.id} blog={blog} /> )}
    </main>
  )
}
