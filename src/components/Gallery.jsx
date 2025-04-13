import Headline from "./parts/Headline.jsx";
import Card from "./parts/Card.jsx";

import "/src/css/gallery.css";
import creatures from "../data/creatures.js";

import { useEffect, useState } from "react";

export default function Gallery() {
    console.log('Rendering Gallery')
    const [filter, setFilter] = useState("all");

    const filteredCreatures = creatures.filter(c =>
        filter === "all" ? true : c.category === filter
    );
    //buttons #banner-all #banner-beast #banner-human

    // useEffect(() => {
    //     let i = 0;
    //     setDisplayedCreatures([]); // Resetea las cartas

    //     const interval = setInterval(() => {
    //         setDisplayedCreatures(prev => {
    //             const next = [...prev, filteredCreatures[i]];
    //             i++;
    //             if (i >= filteredCreatures.length) clearInterval(interval);
    //             return next;
    //         });
    //     }, 100); // Delay entre cartas
    // }, [filter]);

    let i = 0;
    const interval = setInterval(() => {
        const card = document.querySelector("#card-" + i);
        if (card) {
            card.classList.add('visible');
            i++;
            if (i >= filteredCreatures.length) {
                clearInterval(interval);
            }
        }
    }, 100);

    return (
        <>
            <Headline text="Gallery" showBanners={true} />
            <div id="cards">
                {filteredCreatures.map((creature, i) => (
                    <Card key={i} creature={creature} id={i}/>
                ))}
            </div>
        </>
    );
}
