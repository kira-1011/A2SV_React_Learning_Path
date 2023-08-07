import { Form, useLocation, useNavigate } from "react-router-dom";
import Contact from "../model/Contact";

const ContactForm = ({ contact }: { contact?: Contact }) => {

    const Navigate = useNavigate();
    const Location = useLocation();

    return (  
        <div>
            <Form method="post">
                <table className="table-auto border-separate border-spacing-8">
                    <tbody>
                        <tr className="align-top">
                            <td className="">Name</td>
                            <td><input className="rounded-lg px-4 py-2 shadow-md shadow-gray-300" type="text" name="first_name" placeholder="first" defaultValue={contact? contact.first_name: undefined}/></td>
                            <td><input className="rounded-lg px-4 py-2 shadow-md shadow-gray-300" type="text" name="second_name" placeholder="last" defaultValue={contact? contact.second_name: undefined}/></td>
                        </tr>
                        <tr className="align-top">
                            <td className="pr-12">Phone</td>
                            <td colSpan={2}><input className="rounded-lg px-4 py-2 shadow-md w-full shadow-gray-300" type="text" name="phone" placeholder="+2519111111" defaultValue={contact? contact.phone: undefined}/></td>
                        </tr>
                        <tr className="align-top">
                            <td className="pr-12">Avatar URL</td>
                            <td colSpan={2}><input className="rounded-lg px-4 py-2 shadow-md w-full shadow-gray-300" type="text" name="avatarURL" placeholder="https://example.com/avatar.jpg" defaultValue={contact? contact.avatarURL: undefined}/></td>
                        </tr>
                        <tr className="align-top">
                            <td className="pr-12">Notes</td>
                            <td colSpan={2}><textarea rows={5} className="rounded-lg px-4 py-2 shadow-md w-full shadow-gray-300" name="notes" placeholder="Notes" defaultValue={contact? contact.notes: undefined}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="space-x-4">
                                <button className="rounded-lg text-blue-400 font-medium shadow-md px-4 py-2 border border-gray-200 shadow-gray-300" type="submit">Save</button>
                                <button className="rounded-lg shadow-md px-4 py-2 border border-gray-200 shadow-gray-300" onClick={(e) => {Location.pathname.endsWith("edit")? Navigate(-1) : Navigate("/")}}>Cancel</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Form>
    </div>
    );
}
 
export default ContactForm;