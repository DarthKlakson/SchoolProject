import React from 'react'
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Towar } from './towar/TowarPage.jsx';
import { Towary } from './towar/TowaryPage.jsx';
import { Pracownik } from './pracownik/PracownikPage.jsx';
import { Pracownicy } from './pracownik/PracownicyPage.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
    },
    {
        path: "/towar",
        element: <Towar />,
    },
    {
        path: "/towary",
        element: <Towary />,
    },
    {
        path: "/pracownik",
        element: <Pracownik />,
    },
    {
        path: "/pracownicy",
        element: <Pracownicy />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
