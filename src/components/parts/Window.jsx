import './window.css'

function Window({ title, text, image, right }) {
    return (
        <section className="window-section">
            <img src={image} alt={title} className="window-image" />
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
