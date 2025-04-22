function ButtonLink({ text, onClick }) {
    return (
        <button className="button-link-app backdrop" onClick={onClick}>
            {text}
        </button>
    );
}
export default ButtonLink