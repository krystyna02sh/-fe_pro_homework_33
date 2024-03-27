
import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import About from './components/About/About'
import Contact from './components/Contact/Contact';
import Main from './components/Main/Main'
import NoPage from './components/NoPage/NoPage';

function App() {
    return (

        <HashRouter>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Main />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />

                </Route>
            </Routes>
        </HashRouter>

    );
}

export default App;