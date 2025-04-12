import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//import components
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Background from './components/layout/Background.jsx'
import Home from './components/Home.jsx'

//initialize app in body
createRoot(q('body')).render(
    <StrictMode>
        <Header/>
        <main>
            <Home/>
        </main>
        <Background/>
        <Footer/>
    </StrictMode>,
)

function q(sel){
    return document.querySelector(sel);
}
