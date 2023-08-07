import { createContext } from "react";
import Contact from "../model/Contact";

interface Props{
    contacts: Contact[];
    setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
    error: boolean;
    setError: React.Dispatch<React.SetStateAction<boolean>>;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};


const ContactContext = createContext<Props>({

    contacts: [],
    setContacts: () => {},
    error: false,
    setError: () => {},
    isLoading: false,
    setIsLoading: () => {}

});

export default ContactContext;