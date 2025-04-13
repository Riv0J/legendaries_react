import './window.css'

function Window({ title, text, image, alt, right }) {
    return (
        <section className="window-section glow">
            <img src={image} alt={alt} className="window-image" />
            <article className={`bg-bricks window-article ${right ? 'window-article-right' : 'window-article-left'}`}>
                <div className="window-content">
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
            </article>
        </section>
    );
}
export default Window
