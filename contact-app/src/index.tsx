import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { getContacts } from './App';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Home from './components/Home';
import ContactDetails, { deleteContact, getContact } from './components/ContactDetails';
import EditContact, { updateContact } from './components/EditContact';
import AddContact, { createContact } from './components/AddContact';
import Error from './components/Error';


const routes = createBrowserRouter(createRoutesFromElements(
  <Route path = "/" element = { <App />} loader={getContacts} errorElement={<Error/>}>
    <Route index element = { <Home/> } />
    <Route path="contacts/:id" element = { <ContactDetails/> } loader={({params}) => getContact(params.id)} />
    <Route path="contacts/:id/edit" element = { <EditContact/> } action={({ request, params }) => updateContact(request, params.id)} />
    <Route path="contacts/add" element = { <AddContact/> } action={({request, params}) => createContact(request)}/>
    <Route path="contacts/:id/delete" action={({ params }) => deleteContact(params.id)}/>
  </Route>

))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
