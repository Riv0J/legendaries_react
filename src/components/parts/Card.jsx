import "./card.css";
import { useEffect, useState } from "react";

export default function Card({ creature, id, status, delay, quiz_mode }) {
    let [flipStatus, setFlipStatus] = useState(status);
    
    console.log("CARD STATUS: "+flipStatus);
    //ciclo es initial => card-flipped => card-flip-back

    function onClickCard_Gallery(){
        if (quiz_mode) return;
        switch (flipStatus) {
            case "flipped":
                setFlipStatus("flip-back");
                break;
            case "initial":
            case "flip-back":
                setFlipStatus("flipped");
                break;
            default:
                break;
        }
    }

    let flipClass = "";
    switch (flipStatus) {
        case "initial":
            flipClass = "card-appear"
            break;
        case "flipped":
            flipClass = "card-flipped"
            break;
        case "flip-back":
            flipClass = "card-flip-back"
            break;
        case "swipe-right":
            flipClass = "card-swipe-right"
            break;
        case "swipe-left":
            flipClass = "card-swipe-left"
            break;
        default:
            break;
    }
    if(flipStatus != "hidden" && flipStatus != "initial"){
        flipClass += " card-visible"
    }
    const {
        name,
        title,
        myth,
        period,
        img,
        difficulty,
        description,
        category
    } = creature;

    useEffect(() => {
        setFlipStatus(status);
    }, [status]);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            if(status == "hidden"){
                setFlipStatus("initial");
            }
            console.log(delay);
            
        }, delay);
    
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div key={flipStatus} className={`card card-${category} card-${period} ${flipClass} ${quiz_mode ? "card-quiz" : ""}`} id={`card-${id}`} onClick={() => onClickCard_Gallery()}>
            <div className="card-background"></div>
            <div className="card-markings">
                <div className="card-markings-bottom">
                    <div className="card-markings-difficulty">{difficulty}</div>
                    <img src="icons/fire.webp" alt="Difficulty" />
                </div>
            </div>
            <div className="card-content">
                <div
                    className="card-img"
                    style={{ backgroundImage: `url(${img})` }}
                >
                    <span className={`card-name ${name.length > 10 ? "card-name-small" : ""}`}>{name}</span>
                    <div className="card-name-banner"></div>
                </div>
                <p className="card-title">{title}</p>
            </div>
            {!quiz_mode && (
            <div className="card-back">
                <span className="card-back-name">{name}</span>
                <span className="card-back-myth">{myth ? "Mythical" : "Historical"}</span>
                <p className="card-back-description">{description}</p>
                <div className="card-back-markings"></div>
            </div>
            )}
        </div>
    );
}
