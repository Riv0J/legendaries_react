import Button from "./Button.jsx";
import './mega.css'

function Mega() {
    return (
        <section className="mega-container gradient-border gradient-border-top">
            <Button text="View gallery" glow={true} className="mega-center-button glow button-app-big"/>

            <div className="mega-wrapper">
                <div className="mega-bg"></div>
                <div className="mega-bg"></div>

            </div>
        </section>
    );
}
export default Mega
