import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom';
import Root from './components/Root';
import EditNoteForm from './features/notes/EditNoteForm';
import NotePage from './features/notes/NotePage';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(createRoutesFromChildren(
  <Route path="/" element={<Root/>}>
    <Route  path="/" element={<App/>}/>
    <Route  path={`/notes/:noteId`} element={<NotePage/>}/>
    <Route path={'/notes/:noteId/edit'} element={<EditNoteForm/>}/>
  </Route>
))

root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);