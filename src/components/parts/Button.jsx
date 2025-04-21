function Button({ text, glow, className, onClick }) {
    return (
        <button className={`button-app ${glow ? 'glow' : ''} ${className || ''}`} onClick={onClick}>
            <span className="button-app-content">{text}</span>
        </button>
    );
}
export default Button