import Headline from "./parts/Headline.jsx";
import Button from "./parts/Button.jsx";
import Link from "./parts/Link.jsx";
import Window from "./parts/Window.jsx";
import Mega from "./parts/Mega.jsx";

import "/src/css/home.css";

function Home() {
    return (
    <>
        <Headline text="Remember legends from the past" showBanners={false} />
        <div className="main-cover gradient-border-dark">
            <div className="cover-content gap-2">
                <h2 className="berkshire backdrop">Do you know any legendary figures from the past?</h2>
                <div className="flex-row flex-center flex-wrap gap-4">
                    <Button text="Test your knowledge"/>
                    <Link text="I dont know any"/>
                </div>
            </div>
        </div>
        <section style={{width: "80%"}} className="flex-center flex-column">
            <h2 className="berkshire mx-4 text-center">Some popular legendary characters are actually mythological</h2>
            <p style={{width: "60%", color: "white"}}>
                "Legendaries" is a collection of characters rooted in the history of various civilizations, across different time periods. While some are widely believed to have existed, their existence has never been definitively proven.
            </p>

        </section>
        <Window 
            title="Not all legends walked among us" 
            text="Throughout history, tales of heroes, kings, and monstruous creatures have amazed generations — but some of them were never written in the real records." 
            image="img/giza.webp"
        />

        <section className="divider"></section>

        <Mega/>

        <section className="divider"></section>
        <Window
            title="Can you tell myth from reality?"
            text="Some legendary figures were real people whose stories were magnified through time, while others were entirely popular myths. Uncover which ones were real, and the ones that lived in stories and epic tales."
            image="img/reims.webp"
            right={true}
        />
    </>
    )
}

export default Home
