"use client";

import Blog from "@/model/Blog";
import { useRouter } from "next/navigation";
import { useState } from "react";

const BlogEditForm = ({ blog }: { blog: Blog}) => {

    const [title, setTitle] = useState<string>(blog.title);
    const [content, setContent] = useState<string>(blog.content);
    const [imgURL, setImgURL] = useState<string>(blog.imgURL);
    const Router = useRouter();

    const handleSubmit = async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        
        const date = new Date();
        const updated_blog = {
            id: blog.id,
            title, 
            content, 
            date: date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear(), 
            imgURL
        }

        e.preventDefault();
        
        try {
            await fetch("http://localhost:8000/blogs/" + blog.id, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: 'PUT',
                body: JSON.stringify(updated_blog)
            });
            
            console.log("http://localhost:8000/blogs/" + blog.id);
            Router.push('/');

        } catch (err) {
            console.log(err);
        }
    }

    const handleCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        Router.back();
    }

    return (  
        <div className="grid place-items-center py-12 text-xl">
            <form>
                <table className="border-separate border-spacing-5">
                    <tbody>
                        <tr>
                           <td><label htmlFor="title">Blog Title</label></td>
                            <td><input className="text-black px-4 py-2 outline-none rounded-sm" type="text" name="title" required defaultValue={title} onChange={(e) => setTitle(e.target.value)}/></td>
                        </tr>
                        <tr>
                           <td><label htmlFor="title">Blog Image URL</label></td>
                            <td><input className="text-black px-4 py-2 outline-none rounded-sm" type="text" name="title" defaultValue={imgURL} onChange={(e) => setImgURL(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="title">Blog Content</label>
                            </td>
                            <td>
                                <textarea className="text-black px-4 py-2 outline-none rounded-sm" name="content" defaultValue={content} cols={30} rows={10} required minLength={50} onChange={(e) => setContent(e.target.value)}></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="space-x-8">
                                <button className="border border-orange-500 px-4 py-2 rounded-sm hover:border-white hover:bg-white hover:text-orange-500 transition duration-300" onClick={(e) => handleSubmit(e)}>Save</button>
                                <button className="border border-orange-500 px-4 py-2 rounded-sm hover:border-white hover:bg-white hover:text-orange-500 transition duration-300" onClick={(e) => handleCancel(e)}>Cancel</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default BlogEditForm;