import Blog from "@/model/Blog";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: Blog}) => {
    return ( 
        <div className="flex flex-col gap-4 h-fit p-2 rounded-md max-w-sm border border-white bg-white text-black font-medium hover:cursor-pointer hover:scale-105 transition duration-500">
          {blog.imgURL && <img className="object-cover h-48 w-96 rounded-md" src={blog.imgURL} alt={"Image"} />}
          <p className="text-xl font-bold">{blog.title}</p>
          <p className="flex-1 truncate">{blog.content}</p>
          <Link className="rounded-full border border-orange-500 px-5 py-3 w-fit hover:bg-orange-500  hover:text-white hover:border-white transition duration-300" href={`/blogs/${blog.id}`}>Show more</Link>
        </div>
    );
}
 
export default BlogCard;