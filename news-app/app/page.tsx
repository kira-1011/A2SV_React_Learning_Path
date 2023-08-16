import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import Blog from "@/model/Blog";

// Fetch all blogs without caching automaticallly
const fetchBlogs = async(url: string) => {
  const data = await fetch(url, { cache: "no-cache" });
  const blogs: Blog[] = await data.json();
  return blogs;
}

const HomePage = async() => {
 
  const blogs: Blog[] = await fetchBlogs("http://localhost:8000/blogs");
  return (

    <main>

      <div className="flex p-12 justify-center">

        <div className="flex flex-col gap-12 items-center">
          <h1 className="font-bold text-5xl mt-12">Welcome to <span className="mt-4 text-orange-500">Blogify</span></h1>
          <Link href="/blogs/create-blog" className="font-semibold w-fit bg-black text-white border border-orange-500 px-8 py-4 rounded-md text-xl hover:bg-white hover:border-white hover:text-orange-600 transition duration-300">Create new blog</Link>
        </div>

      </div>

      <h2 className="mt-32 mb-8 mx-12 text-center font-semibold text-3xl">Your Blogs</h2>

      <div className="flex justify-center flex-wrap gap-8 p-12">
        {blogs.map((blog, i) => <BlogCard key={i} blog={ blog }/>)}
      </div>

    </main>
  )
}

export default HomePage;