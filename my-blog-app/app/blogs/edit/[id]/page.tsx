"use client";

import { useGetBlogQuery, useUpdateBlogMutation } from "@/redux/features/blogs/blogsApi";
import { BlogType } from "@/redux/features/blogs/blogsSlice";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const BlogEditForm = () => {
  
  const { id } = useParams();
  const router = useRouter();

  const { data: blog, isSuccess: isFetchSucess } = useGetBlogQuery(id as string)

  const [title, setTitle] = useState<string>(blog? blog.title : "" );
  const [content, setContent] = useState<string>(blog? blog.content : "");

  const [ updateBlog, {isSuccess, isError} ] = useUpdateBlogMutation();

  const isValid = Boolean(title) && Boolean(content);

  const onSubmitHandler = () => {
    
    updateBlog({
        id: blog?.id,
        content,
        title,
        date: "",
        reactions: blog?.reactions
    });
    
  };

  return (
    <div className="p-4 space-y-12">
        {isError && <div>Error ...</div> }
        {isFetchSucess &&  <div className="flex justify-center">
        <form className="w-1/4 flex flex-col gap-2">
          <label className="text-xl" htmlFor="title">
            Title
          </label>
          <input
            className="outline-none shadow-md shadow-gray-300 px-4 py-2 rounded focus:shadow-gray-400"
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="mt-8 text-xl" htmlFor="content">
            Content
          </label>
          <textarea
            className="outline-none shadow-md shadow-gray-300 px-4 py-2 rounded focus:shadow-gray-400"
            name="content"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <div className="mt-8">
            <button
              className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-600 hover:text-white disabled:bg-gray-200 disabled:text-gray-500"
              type="button"
              onClick={onSubmitHandler}
              disabled={!isValid}
            >
              Save Post
            </button>
          </div>
        </form>
      </div>}
     
    </div>
  );
};

export default BlogEditForm;
