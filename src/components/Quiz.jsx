

import "/src/css/quiz.css";
import creatures from "../data/creatures.js";

import Mega from "./parts/Mega";
import ScrollToTop from "./parts/ScrollToTop";
import Button from "./parts/Button.jsx";
import Card from "./parts/Card.jsx";

import { useState, useMemo, useRef } from "react";

function getRandomCreatures(count = 10) {
    const shuffled = [...creatures].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}
export default function Quiz() {
    const [randomCreatures, set_creatures] = useState(() => getRandomCreatures());
    const [quiz_status, set_quiz_status] = useState("answering");
    let index = useRef(0);
    let score = useRef(0);
    let is_correct = useRef(false);

    function restart(){
        index.current = 0;
        score.current = 0;
        set_quiz_status("answering");
        set_creatures(getRandomCreatures());
    }

    const current_creature = randomCreatures[index.current];
    console.log(current_creature);

    function process_answer(answer){
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
        if(index.current == randomCreatures.length){
            set_quiz_status("finished");
            console.log("FINISH!");
        } else {
            set_quiz_status("answering");
        }
    }

    function is_answering(){
        return quiz_status == "answering";
    }

    const startX = useRef(null);
    const handlePointerDown = (e) => {
        if(!is_answering()){ return };
        startX.current = e.clientX;
    };
    const handlePointerUp = (e) => {
        if(!is_answering()){ return };
        const endX = e.clientX;
        const deltaX = endX - startX.current;
        
        const threshold = 100 * 0.25;
        if (Math.abs(deltaX) >= threshold) {
            let answer = 0;
            if (deltaX > 0) {
                set_quiz_status("swiping-right");
            } else {
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
            <ScrollToTop/>
            <h2>Quiz Page</h2>
            {quiz_status != "finished" && (
                <div>
                    <div>{index.current+1}/{randomCreatures.length}</div>
                    <div>SWIPE LEFT FOR MYTH OR RIGHT FOR HISTORY</div>
                </div>
            )}

            <div id="swipe-container" onPointerDown={handlePointerDown} onPointerUp={handlePointerUp}>
                {quiz_status != "finished" && (
                    <div id="card-container" className={`${quiz_status.includes("swiping") ? quiz_status : "" }`}>
                        <Card creature={current_creature} id={index.current} status={"initial"} quiz_mode={true} />
                    </div>
                )}

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
                            <div className="card-img"
                                style={{ backgroundImage: `url(${current_creature.img})` }}
                            >
                                <span className={`card-name ${current_creature.name.length > 10 ? "card-name-small" : ""}`}>{current_creature.name}</span>
                                <div className="card-name-banner"></div>
                            </div>
                        </div>
                        
                        <p>{current_creature.description}</p>
                        
                        <Button text={index.current+1 == randomCreatures.length ? "Show Score" : "Next Legend" } onClick={onNextClick}/>
                    </div>
                </div>
                )}
                {quiz_status == "finished" && (
                    <Mega buttonText="Try again" onButtonClick={restart} showCounter={true} counterText={`${score.current}/10`}/>
                )}
                
            </div>
        </>
    );
}