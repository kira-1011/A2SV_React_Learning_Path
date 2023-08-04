import Avatar from "../components/Avatar";
import Info from "../components/Info";

const Card = () => {

    const profile_info = {
        user_name: "Kirubel Sentayehu",
        email: "kirakstade@gmail.com",
        phone: "+251926765110",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod architecto dolores non exercitationem nobis ipsa, pariatur ex asperiores id recusandae maxime odit eveniet molestiae sapiente, explicabo molestias dignissimos eligendi nisi.",
        website: "levelup.com"        
    };

    return (

        <div className="flex flex-col space-y-4 h-1/2 items-center px-12 py-8 max-w-sm rounded-md shadow-md shadow-gray-700 bg-blue-950 text-white">
            <Avatar/>
            <Info {...profile_info}/>
        </div>
    )
}

export default Card;