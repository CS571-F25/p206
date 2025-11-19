// src/components/Hero.jsx

export default function Hero({ title, subtitle }) {
    return (
        <div 
            style={{
                background: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e') center/cover no-repeat",
                padding: "100px 20px",
                color: "white",
                textShadow: "2px 2px 6px rgba(0,0,0,0.5)",
                textAlign: "center"   // ★★★★★ 只加这一行，让标题居中
            }}
        >
            <h1 className="fw-bold">{title}</h1>
            <p className="lead">{subtitle}</p>
        </div>
    );
}
