import "./card.css";
import { useEffect, useState } from "react";

export default function Card({ creature, id, status, delay }) {
    let [flipStatus, setFlipStatus] = useState(status || "initial");
    
    console.log("STATUS: "+flipStatus);
    //ciclo es initial => card-flipped => card-flip-back

    function onClickCard(){
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
        const timer = setTimeout(() => {
            console.log(delay);
            setFlipStatus("initial");
        }, delay);
    
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div key={flipStatus} className={`card card-${category} card-${period} ${flipClass}`} id={`card-${id}`} onClick={() => onClickCard()}>
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
            <div className="card-back">
                <span className="card-back-name">{name}</span>
                <span className="card-back-myth">{myth ? "Mythical" : "Historical"}</span>
                <p className="card-back-description">{description}</p>
                <div className="card-back-markings"></div>
            </div>
        </div>
    );
}
