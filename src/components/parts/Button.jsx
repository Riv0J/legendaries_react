function Button({ text, glow }) {
    return (
        <button className={`button-app ${glow ? 'glow' : ''}`}>
            <span className="button-app-content">{text}</span>
        </button>
    );
}
export default Button