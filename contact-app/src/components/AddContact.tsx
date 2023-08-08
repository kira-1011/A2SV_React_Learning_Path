import { redirect } from "react-router-dom";
import { createData } from "../controllers/controllers";
import ContactForm from "./ContactForm";

export const createContact = async(request: Request) => {

    const data = await request.formData();
    await createData(data, "http://localhost:8000/contacts");
    return redirect("/");
}

const AddContact = () => {

    return(
       <ContactForm/>
    )
}

export default AddContact;