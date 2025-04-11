function Button({ text, glow, className }) {
    return (
        <button className={`button-app ${glow ? 'glow' : ''} ${className || ''}`}>
            <span className="button-app-content">{text}</span>
        </button>
    );
}
export default Button