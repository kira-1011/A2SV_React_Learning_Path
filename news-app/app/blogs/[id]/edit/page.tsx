import BlogEditForm from "@/components/BlogEditForm";
import { fetchBlog } from "../page";

const BlogEditPage = async({ params }: { params: any}) => {

    const blog = await fetchBlog("http://localhost:8000/blogs/" + params.id);

    return (  
        <BlogEditForm blog={blog}/>
    );
}
 
export default BlogEditPage;