import Link from "next/link";

const Header = () => {
    return (  
        <header className="text-white text-center py-8 space-y-8 border-b border-b-orange-500">
            <h1 className="text-6xl font-bold">Blogify</h1>
            <nav className="space-x-28 text-xl">
               <Link href="/" className="py-2 hover:border-b hover:border-b-white">Home</Link>
               <Link href="/blogs/create-blog" className="py-2 hover:border-b hover:border-b-white">Create new blog</Link>
            </nav>
        </header>
    );
}
 
export default Header;
