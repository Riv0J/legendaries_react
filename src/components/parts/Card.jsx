import "./card.css";

export default function Card({ creature , id }) {
    console.log("creating card")
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
        <div className={`card card-${category} card-${period}`} id={`card-${id}`}>
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
                    <span className={`card-name`}>{name}</span>
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
