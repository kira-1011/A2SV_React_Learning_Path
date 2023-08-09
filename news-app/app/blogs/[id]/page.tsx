import BlogDetail from "@/components/BlogDetail";
import Blog from "@/model/Blog";

export const fetchBlog = async(url: string) => {

    const res = await fetch(url, {cache:"no-store"});
    const blog: Blog = await res.json();

    return blog;
};

const BlogDetailPage = async({ params }: any) => {

    const blog = await fetchBlog("http://localhost:8000/blogs/" + params.id);

    return (  
        <BlogDetail blog={blog}/>
    );
}
 
export default BlogDetailPage;