import { Form, redirect, useLocation, useNavigate } from "react-router-dom";
import { updateData } from "../controllers/controllers";
import ContactForm from "./ContactForm";

export const updateContact = async(request: Request, id: string | undefined) => {

    const data = await request.formData();
    await updateData(data, `http://localhost:8000/contacts/${id}`);
    return redirect(`/contacts/${id}`);
    
}

const EditContact = ( ) => {

    const Location = useLocation();
    const contact = Location.state;

    return(
       <ContactForm contact={contact}/>
    )
}

export default EditContact;