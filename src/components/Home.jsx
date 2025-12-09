import { Link } from "react-router-dom";
import Hero from "./Hero";
import QuoteOfTheDay from "./QuoteOfTheDay"; // ⭐ 新增引用

// 导入你的图片
import Shanxi1 from "../assets/山西大院.jpg";
import Shanxi2 from "../assets/山西大院1.jpg";

import Guilin1 from "../assets/桂林.jpg";
import Guilin2 from "../assets/桂林1.jpg";

import Jiangxi1 from "../assets/江西古城.jpg";
import Jiangxi2 from "../assets/江西古城1.jpg";

export default function Home() {
    return (
        <>
            <Hero
                title="My Travel Moments"
                subtitle="Discover the stories, beauty, and memories behind every journey."
            />

            <QuoteOfTheDay />

            {/* ===== 更宽的容器 ===== */}
            <div className="wide-container mt-5">
                <h2 className="text-center mb-4">Popular Destinations</h2>

                <div className="image-grid">
                    {/* 山西 */}
                    <Link to="/destinations?place=Shanxi-Courtyard">
                        <img src={Shanxi1} alt="Shanxi" className="grid-img" />
                    </Link>

                    <Link to="/destinations?place=Shanxi-Courtyard">
                        <img src={Shanxi2} alt="Shanxi" className="grid-img" />
                    </Link>

                    {/* 桂林 */}
                    <Link to="/destinations?place=Guilin-Guangxi">
                        <img src={Guilin1} alt="Guilin" className="grid-img" />
                    </Link>

                    <Link to="/destinations?place=Guilin-Guangxi">
                        <img src={Guilin2} alt="Guilin" className="grid-img" />
                    </Link>

                    {/* 江西 */}
                    <Link to="/destinations?place=Jiangxi-Ancient-Town">
                        <img src={Jiangxi1} alt="Jiangxi" className="grid-img" />
                    </Link>

                    <Link to="/destinations?place=Jiangxi-Ancient-Town">
                        <img src={Jiangxi2} alt="Jiangxi" className="grid-img" />
                    </Link>
                </div>
            </div>
        </>
    );
}
