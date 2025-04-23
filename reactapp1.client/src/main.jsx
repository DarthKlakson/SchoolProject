import React from 'react'
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout'; // Zaimportuj nowy komponent Layout
import { Diety } from './pages/DietyPage.jsx';
import { Home } from './pages/HomePage.jsx';
import { Jadlospis } from './pages/JadlospisPage.jsx';
import { Kalkulator } from './pages/KalkulatorPage.jsx';
import { Przepisy } from './pages/PrzepisyPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<App />} />
                    <Route path="/przepisy" element={<Przepisy />} />
                    <Route path="/jadlospis" element={<Jadlospis />} />
                    <Route path="/kalkulator" element={<Kalkulator />} />
                    <Route path="/diety" element={<Diety />} />
                    <Route path="/kontakt" element={<Kontkat />} />

                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)