"use client";

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";
import { useDeleteBlogMutation, useGetBlogQuery } from "@/redux/features/blogs/blogsApi";
import { useRouter } from "next/navigation";

const BlogDetailPage = ({ params }: { params: Params }) => {

  const router = useRouter();

  const { data: blog, isError, isSuccess } = useGetBlogQuery(params.id);
  const [ deleteBlog  ] = useDeleteBlogMutation();

  const deleteHandler = () => {

    deleteBlog(params.id);
    router.push("/");
  };

  return (
    <>
      {isError && <div>Something went wrong ...</div>}
      {isSuccess && (
        <div className="py-4 px-8 mt-4">
            <div className="flex flex-col items-center gap-12">
              <div className="space-y-4">
                <h1 className="font-bold text-4xl break-words">{blog.title}</h1>
              </div>
              <p className="text-2xl break-words">{blog.content}</p>

              <div className="space-x-4">
                <button>
                  <Link
                    className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-600 hover:text-white disabled:bg-gray-200 disabled:text-gray-500"
                    type="button"
                    href={`/blogs/edit/${blog.id}`}
                  >
                    Edit Post
                  </Link>
                </button>
                <button
                  onClick={deleteHandler}
                  className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-600 hover:text-white disabled:bg-gray-200 disabled:text-gray-500"
                >
                  Delete Post
                </button>
              </div>
            </div>
          </div>
      )}
    </>
  );
};

export default BlogDetailPage;
