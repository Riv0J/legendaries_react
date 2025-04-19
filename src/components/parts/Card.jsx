import "./card.css";
import { useEffect, useState } from "react";

export default function Card({ creature , id }) {
    let [flipStatus, setFlipStatus] = useState("initial");
    console.log("STATUS: "+flipStatus);
    
    function onClickCard(){
        switch (flipStatus) {
            case "initial":
            case "flip-back":
                setFlipStatus("flipped");
                break;
            case "flipped":
                setFlipStatus("flip-back");
                break;
            default:
                break;
        }
        //ciclo es initial => card-flipped => card-flip-back
    }
    
    let flipClass = "";
    if(flipStatus == "flipped"){
        flipClass = "card-flipped visible"
    }else if(flipStatus == "flip-back"){
        flipClass = "card-flip-back visible"
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
