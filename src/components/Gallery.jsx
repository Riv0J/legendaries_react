import Headline from "./parts/Headline.jsx";
import Card from "./parts/Card.jsx";

import "/src/css/gallery.css";
import creatures from "../data/creatures.js";

import { useEffect, useState } from "react";

export default function Gallery() {
    console.log('Rendering Gallery')
    // cuando cambia un useState, se vuelve a renderizar
    const [categoryFilter, setCategoryFilter] = useState("all");

    // tomamos el use state para aplicar el filtro
    const filteredCreatures = creatures.filter(creature => {
        if (categoryFilter === "all") return true;
        return creature.category === categoryFilter;
    });

    return (
        <>
            <Headline text="Gallery" showBanners={true} onFilterChange={setCategoryFilter} />
            <div id="cards" key={categoryFilter}>
                {filteredCreatures.map((creature, i) => (
                    <Card key={i} creature={creature} status="hidden" id={i} delay={i*100}/>
                ))}
            </div>
        </>
    );
}
