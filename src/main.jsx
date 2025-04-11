import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//import components
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import Background from './components/parts/Background.jsx'

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
