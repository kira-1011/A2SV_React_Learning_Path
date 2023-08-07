import { createData } from "../controllers/controllers";
import ContactForm from "./ContactForm";

export const createContact = async(id: string | undefined) => {

    // await createData()

}

const AddContact = () => {

    return(
       <ContactForm/>
    )
}

export default AddContact;