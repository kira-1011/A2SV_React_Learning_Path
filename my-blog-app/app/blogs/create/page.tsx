"use client";

import { useAddBlogMutation } from "@/redux/features/blogs/blogsApi";
import { BlogType } from "@/redux/features/blogs/blogsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddPostForm = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [addBlog, {isSuccess}] = useAddBlogMutation();

  const isValid = Boolean(title) && Boolean(content);

  console.log(isSuccess)

  const router = useRouter();

  const submitHandler = () => {
    const new_blog: BlogType = {
      id: nanoid(),
      title,
      date: "",
      reactions: {
        thumbsup: 0,
        heart: 0,
        thumbsdown: 0,
        thinking: 0,
        fire: 0,
      },
      content,
    };

    addBlog(new_blog);

    setTitle("");
    setContent("");

    router.push("/")
  };

  return (
    <section className="flex flex-col gap-12 items-center my-16">
      <h1 className="text-3xl">Create new Blog</h1>
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
            disabled={!isValid}
            onClick={submitHandler}
          >
            Save Blog
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddPostForm;
