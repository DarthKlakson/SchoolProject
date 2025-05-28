import React from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout'; 
import { Diety } from './pages/DietyPage.jsx';
import { Home } from './pages/HomePage.jsx';
import { Jadlospis } from './pages/JadlospisPage.jsx';
import { Kalkulator } from './pages/KalkulatorPage.jsx';
import { Przepisy } from './pages/PrzepisyPage.jsx';
import { Kontakt } from './pages/KontaktPage.jsx';
import { Login } from './pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css'; 



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/przepisy" element={<Przepisy />} />
                    <Route path="/jadlospis" element={<Jadlospis />} />
                    <Route path="/kalkulator" element={<Kalkulator />} />
                    <Route path="/diety" element={<Diety />} />
                    <Route path="/kontakt" element={<Kontakt />} />
                    <Route path="/login" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)