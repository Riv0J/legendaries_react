import Button from "./Button.jsx";
import './mega.css'

function Mega({buttonText, onButtonClick, showCounter, counterText, classes }) {
    return (
        <>
            <section className={`mega-container gradient-border gradient-border-top ${classes}`}>

                {showCounter && (
                    <div className="quiz-score-container backdrop">
                        <span className="quiz-score-title">Score</span>
                        <span className="quiz-score-number">{counterText}</span>
                    </div>
                )}
                
                <Button text={buttonText} glow={true} className="mega-center-button glow button-app-big" onClick={onButtonClick}/>

                <div className="mega-wrapper">
                    <div className="mega-bg"></div>
                    <div className="mega-bg"></div>
                </div>
            </section>
        </>
    );
}
export default Mega
