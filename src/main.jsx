import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//import components
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'

import Home from './components/Home.jsx'
import Gallery from './components/Gallery.jsx'
import Quiz from './components/Quiz.jsx'

//initialize app in body
createRoot(q('body')).render(
    <StrictMode>

        {/* router allows to manipulate the browser's url bar */}
        <BrowserRouter basename="/legendaries_react">
            <Header/>

            <main>
                {/* define routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/quiz" element={<Quiz />} />
                </Routes>
            </main>

            <div id="main-background"></div>

            <Footer/>
        </BrowserRouter>
    </StrictMode>,
)

function q(sel){
    return document.querySelector(sel);
}
