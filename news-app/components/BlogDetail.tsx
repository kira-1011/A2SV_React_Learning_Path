'use client';
import Blog from "@/model/Blog";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BlogDetail = ({ blog }: {blog: Blog}) => {

       const router = useRouter();
       const deleteHandler = async() => {

        try {

            await fetch("http://localhost:8000/blogs/" + blog.id, {
                method: "DELETE"
            });

            router.push("/")
            
        } catch (err) {
            console.log(err)
        }
       }

       return (  
        <div className="flex flex-col items-center space-y-12 py-24">
            <div>
                <h1 className="font-bold text-4xl mb-2 text-center">{blog.title}</h1>
                <span className="text-sm text-slate-300">Date:{blog.date}</span>
            </div>
            {blog.imgURL && <img className="block object-cover h-72 w-96 rounded-md" src={blog.imgURL} alt="Image" />}
            <p className="text-2xl">{blog.content}</p>

            <div className="space-x-8">
            <Link href={`${blog.id}/edit`}>
                <button className="border border-orange-500 px-4 py-2 rounded-sm hover:border-white hover:bg-white hover:text-orange-500 transition duration-300">Edit</button>
            </Link>
                <button className="border border-orange-500 px-4 py-2 rounded-sm hover:border-white hover:bg-white hover:text-orange-500 transition duration-300" onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    );
}
 
export default BlogDetail;