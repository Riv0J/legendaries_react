

import "/src/css/quiz.css";
import creatures from "../data/creatures.js";

import Headline from "./parts/Headline.jsx";
import Button from "./parts/Button.jsx";
import Card from "./parts/Card.jsx";
import { useState, useMemo, useEffect, useRef } from "react";

// Función para barajar y tomar 10 aleatorios
function getRandomCreatures(count = 10) {
    const shuffled = [...creatures].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

export default function Quiz() {
    document.querySelector('footer').style.display = "none";
    const [quiz_status, set_quiz_status] = useState("answering");
    let index = useRef(0);
    let score = useRef(0);
    let is_correct = useRef(false);
    
    const randomCreatures = useMemo(() => {
        return getRandomCreatures();
    }, []);
    const current_creature = randomCreatures[index.current];
    console.log(current_creature);

    function process_answer(answer){
        if(index.current == randomCreatures.length){
            console.log("FINISH!");
            return;
        }
        console.log("NEXT");
        if(answer == current_creature.myth){
            console.log("---- CORRECT!");
            score.current++;
            console.log(score.current);
        } else{
            console.log("--- INCORRECT");
        }
        is_correct.current = answer == current_creature.myth;
        set_quiz_status("show-result");
    }
    function onNextClick(){
        index.current++;
        set_quiz_status("answering");
    }

    function is_answering(){
        return quiz_status == "answering";
    }
    /*                        */
    const startX = useRef(null);
    const handlePointerDown = (e) => {
        if(!is_answering()){ return };
        startX.current = e.clientX;
        console.log("STARTX "+startX.current);
    };
    const handlePointerUp = (e) => {
        if(!is_answering()){ return };
        const endX = e.clientX;
        const deltaX = endX - startX.current;
        console.log("delta: "+deltaX);
        
        const threshold = 100 * 0.25;
        if (Math.abs(deltaX) >= threshold) {
            let answer = 0;
            if (deltaX > 0) {
                console.log("Swipe RIGHT");
                set_quiz_status("swiping-right");
            } else {
                console.log("Swipe LEFT");
                set_quiz_status("swiping-left");
                answer = 1;
            }

            setTimeout(() =>{
                process_answer(answer);
            }, 600);
        }
    };
    console.log(quiz_status);
    
    return (
        <>
            <h2>Quiz Page</h2>
            <div>{index.current+1}/{randomCreatures.length}</div>
            <div>SWIPE LEFT FOR MYTH OR RIGHT FOR HISTORY</div>
            <div id="swipe-container"
                    onPointerDown={handlePointerDown}
                    onPointerUp={handlePointerUp}>
                <div id="card-container" className={`${quiz_status.includes("swiping") ? quiz_status : "" }`}>
                    <Card creature={current_creature} id={index.current} status={"initial"} quiz_mode={true} />
                </div>

                {quiz_status == "show-result" && (
                <div className={`quiz-result glow`}>
                    
                    <div className="quiz-result-title  gradient-border-top gradient-border">
                        <div className="bg-blue-alone"></div>
                        <div className="bg-bricks-alone"></div>
                        <h3>{current_creature.myth ? "Mythical" : "Historical"}</h3>
                    </div>
                    <div className="quiz-result-content">
                        <span className="quiz-result-result">
                            <i className={is_correct.current ? 'icon-check' : 'icon-x'} />
                            {is_correct.current ? 'Correct' : 'Incorrect'}
                        </span>
                        <div className="card-content">
                            <div
                                className="card-img"
                                style={{ backgroundImage: `url(${current_creature.img})` }}
                            >
                                <span className={`card-name ${current_creature.name.length > 10 ? "card-name-small" : ""}`}>{current_creature.name}</span>
                                <div className="card-name-banner"></div>
                            </div>
                        </div>
                        
                        <p>{current_creature.description}</p>
                        <Button text="Next Legend" onClick={onNextClick}/>
                    </div>
                </div>
                )}

            </div>
        </>
    );
}