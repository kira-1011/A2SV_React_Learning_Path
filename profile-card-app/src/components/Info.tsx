import { MdEmail, MdPhone, MdLanguage, MdNotes } from 'react-icons/md';

interface Props{
    user_name: string;
    email: string;
    phone: string;
    website: string;
    bio: string;
}

const Info = ({ user_name, email, phone, website, bio  }: Props) => {

    return (

        <>
            <h2 className="font-bold text-2xl">{user_name}</h2>
            <div className="flex flex-col space-y-2">
                <p className="space-x-2">
                    <span><MdEmail className="inline-block"/></span>
                    <a href={`mailto:${email}`}>{email}</a>
                </p>
                <p className="space-x-2">
                    <span><MdPhone className="inline-block"/></span>
                    <a href={`tel:${phone}`}>{phone}</a>
                </p>
                <p className="space-x-2">
                    <span><MdLanguage className="inline-block"/></span>
                    <a href={`https://www.${website}`}>{website}</a>
                </p>
                <div className="flex gap-2 max-h-32 overflow-auto">
                    <span className="mt-2"><MdNotes/></span>
                    <p>{bio}{bio}</p>
                </div>
            </div>
        </>
    )
}

export default Info;