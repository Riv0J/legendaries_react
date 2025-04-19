

import "/src/css/quiz.css";
import creatures from "../data/creatures.js";

import Card from "./parts/Card.jsx";

import { useEffect, useState } from "react";

export default function Quiz() {

    const [categoryFilter, setCategoryFilter] = useState("all");

    return (
        <>
            <h2>Quiz Page</h2>
            <div id="quiz_container">
                {/* {[...Array(5)].map((_, i) => (
                    
                ))} */}

                <Card key={1} creature={creatures[0]} id={1}/>
            </div>
            <style>
                #quiz_container{
                    
                }
            </style>
        </>
    );
}

