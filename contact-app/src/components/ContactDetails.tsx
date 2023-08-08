import { Form, Link, redirect, useLoaderData } from "react-router-dom";
import Contact from "../model/Contact";
import { deleteData, getData } from "../controllers/controllers";

export const getContact = async(id: string | undefined) => {
    const contact = await getData(`http://localhost:8000/contacts/${id}`)
    return contact;
}

export const deleteContact = async(id: string | undefined) => {
    console.log("deleted");
    await deleteData(`http://localhost:8000/contacts/${id}`);
    return redirect("/");
}

const ContactDetails = () => {

    const contact = useLoaderData() as Contact;

    console.log(contact)

    return (
        <div className="flex gap-12 h-1/4 w-fit mt-12 px-32 justify-start">
            {
                contact && 
                <>  
                    <img className="rounded-3xl max-w-sm h-auto" src={contact.avatarURL} alt="Avatar" />
                    <div className="flex flex-col gap-4">
                        <h1 className="text-5xl font-bold">{ contact.first_name + " " + contact.second_name }</h1>
                        <h2 className="text-3xl mb-4 text-blue-400">{ contact.phone }</h2>

                        <p className="h-12 max-w-sm overflow-auto">{contact.notes}</p>

                        <div className="flex gap-4 text-lg">
                            <Link className="text-blue-500 border border-gray-200 p-2 rounded-md shadow-sm shadow-gray-300" to="edit" state={contact}>Edit</Link>
                            <Form
                                method="delete"
                                action="delete"
                                onSubmit={
                                    (e) => {
                                        
                                        if(!window.confirm("Do you want to delete this conact?")){
                                            e.preventDefault();
                                        }
                                    }
                                }   
                            >
                                <button className="text-red-600  border border-gray-200 p-2 rounded-md shadow-sm shadow-gray-300" type="submit">Delete</button> 
                            </Form>
                        </div>
                    </div>
                </>
             }
        </div>
    );
}

export default ContactDetails;