import Hero from "./Hero";

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

            {/* ===== 更宽的容器 ===== */}
            <div className="wide-container mt-5">
                <h2 className="text-center mb-4">Popular Destinations</h2>

                <div className="image-grid">
                    {/* 山西 */}
                    <img src={Shanxi1} alt="Shanxi" className="grid-img" />
                    <img src={Shanxi2} alt="Shanxi" className="grid-img" />

                    {/* 桂林 */}
                    <img src={Guilin1} alt="Guilin" className="grid-img" />
                    <img src={Guilin2} alt="Guilin" className="grid-img" />

                    {/* 江西 */}
                    <img src={Jiangxi1} alt="Jiangxi" className="grid-img" />
                    <img src={Jiangxi2} alt="Jiangxi" className="grid-img" />
                </div>
            </div>
        </>
    );
}
