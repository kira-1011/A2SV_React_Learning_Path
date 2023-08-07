import ContactList from "./components/ContactList";
import Contact from "./model/Contact";
import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import { getData } from "./controllers/controllers";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const getContacts = async(): Promise<Contact[]> => {
    
  const URL = "http://localhost:8000/contacts";
    return await getData(URL);
  }

  const App = () => {

  const contacts = useLoaderData() as Contact[];
  const navigation = useNavigation();

  return (
        
        <div className="flex h-screen">
        
          <ContactList contacts={contacts}/>

          {/* This is the section where intro page, contact details, edit contact, and add contact pages are rendered */}
          <div className="h-full w-full">

            {
              navigation.state === "loading" && 
              <div className="h-full grid place-items-center">
                <AiOutlineLoading3Quarters className="animate-spin text-8xl text-blue-500"/> 
              </div>
            }
            
            <Outlet/>
            
          </div>
        </div>

  );
}

export default App;
