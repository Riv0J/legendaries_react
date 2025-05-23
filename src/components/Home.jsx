import Headline from "./parts/Headline.jsx";
import Button from "./parts/Button.jsx";
import ButtonLink from "./parts/ButtonLink.jsx";
import Window from "./parts/Window.jsx";
import Mega from "./parts/Mega.jsx";
import "/src/css/home.css";

import giza from '/src/assets/giza.webp';
import reims from '/src/assets/reims.webp';

import { useNavigate } from "react-router-dom";

export default function Home() {
    console.log('Rendering Home')
    const navigate = useNavigate();

    function navigate_to_gallery(){
        navigate("/gallery");
    }
    function navigate_to_quiz(){
        navigate("/quiz");
    }
    return (
    <>
        <Headline text="Remember legends from the past" showBanners={false}/>

        <div className="main-cover gradient-border-dark">
            <div className="cover-content gap-2">
                <h2 className="berkshire backdrop">Do you know any legendary figures from the past?</h2>
                <div className="flex-row flex-center flex-wrap gap-4">
                    <Button text="Test your knowledge" onClick={navigate_to_quiz}/>
                    <ButtonLink text="I dont know any" onClick={navigate_to_gallery}/>
                </div>
            </div>
        </div>

        <section style={{width: "80%"}} className="flex-center flex-column">
            <h2 className="berkshire mx-4 text-center">Some popular legendary characters are actually mythological</h2>
            <p className="center-p">
                "Legendaries" is a collection of characters rooted in the history of various civilizations, across different time periods. While some are widely believed to have existed, their existence has never been definitively proven.
            </p>
            <div className="my-2">
                <Button text="Take the quiz" glow={true} className="button-app-big mt-4" onClick={navigate_to_quiz}/>
            </div>
        </section>

        <Window 
            title="Not all legends walked among us" 
            text="Throughout history, tales of heroes, kings, and monstruous creatures have amazed generations — but some of them were never written in the real records." 
            image={giza}
            alt="Pyramids of Giza, Egypt"
        />

        <section className="divider"></section>

        <Mega buttonText="View Gallery" onButtonClick={navigate_to_gallery}/>

        {/* <section>
            <Button text="View gallery" glow={true}/>
        </section> */}

        <section className="divider"></section>

        <Window
            title="Can you tell myth from reality?"
            text="Some legendary figures were real people whose stories were magnified through time, while others were entirely popular myths. Uncover which ones were real, and the ones that lived in stories and epic tales."
            image={reims}
            alt="Reims Cathedral, France"
            right={true}
        />
    </>
    )
}