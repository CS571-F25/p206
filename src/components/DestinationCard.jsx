export default function DestinationCard({ img1, img2, title, desc }) {
    return (
        <div className="destination-card shadow-lg">
            <div className="destination-images">
                <img src={img1} alt={title} />
                <img src={img2} alt={title} />
            </div>

            <div className="destination-info">
                <h3 className="destination-title">{title}</h3>
                <p className="destination-desc">{desc}</p>
            </div>
        </div>
    );
}
