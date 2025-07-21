import Headline from "./parts/Headline.jsx";
import Card from "./parts/Card.jsx";
import ScrollToTop from "./parts/ScrollToTop";

import "/src/css/gallery.css";
import creatures from "../data/creatures.js";

import { useEffect, useState } from "react";

export default function Gallery() {
    console.log('Rendering Gallery')
    // cuando cambia un useState, se vuelve a renderizar
    const [categoryFilter, setCategoryFilter] = useState("all");

    // tomamos el use state para aplicar el filtro
    let filteredCreatures = creatures.filter(creature => {
        if (categoryFilter === "all") return true;
        return creature.category === categoryFilter;
    });
    if(categoryFilter === "all"){
        filteredCreatures = filteredCreatures.sort(() => Math.random() - 0.5); // randomiza el orden
    }

    return (
        <>
            <ScrollToTop/>
            <Headline text="Gallery" showBanners={true} onFilterChange={setCategoryFilter} />
            <div id="cards" key={categoryFilter}>
                {filteredCreatures.map((creature, i) => (
                    <Card key={i} creature={creature} status="hidden" id={i} delay={i*100}/>
                ))}
            </div>
        </>
    );
}
