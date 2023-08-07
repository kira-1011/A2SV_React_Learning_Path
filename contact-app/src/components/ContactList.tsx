import { Link, NavLink } from 'react-router-dom';
import Contact from '../model/Contact';

const ContactList = ({ contacts }: {contacts: Contact[]}) => {

    return (

        <div className="flex flex-col bg-gray-200 w-1/3 h-full border-r border-r-gray-400 overflow-auto lg:w-1/4">

            <div className="flex flex-col justify-center gap-4 p-4 border-b border-b-gray-400 w-full md:flex-row">
                {/* <MdSearch className="absolute"/> */}
                <input 
                    className="outline-none rounded-lg shadow-md p-2 md:p-0 lg:p-1"
                    type="search"
                    placeholder="Search"
                />
                    <Link
                        to="contacts/add" 
                        className="bg-white p-2 rounded-lg shadow-md text-blue-400 font-semibold"
                    >
                        Add
                    </Link>
            </div>

            {/* Render list of contacts */}
            <div className="flex flex-col gap-4 p-8 h-full">
                { 
                    contacts?
                     contacts.map((contact) => 
                        
                        <NavLink
                            
                            className = {({ isActive }) =>
                                isActive ?  "rounded-md p-2 bg-blue-500 text-white hover:bg-blue-500 hover:text-white" : 
                                "rounded-md p-2 hover:bg-blue-500 hover:text-white"
                                }

                            to={`/contacts/${contact.id}`} 
                            key={contact.id}>{`${contact.first_name} ${contact.second_name}`}
                        </NavLink>)
                        :
                        <i>No Contacts Found</i> 
                }
            </div>

        </div>
    )

}

export default ContactList;