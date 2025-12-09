import DestinationCard from "./DestinationCard";

import Shanxi1 from "../assets/山西大院.jpg";
import Shanxi2 from "../assets/山西大院1.jpg";

import Guilin1 from "../assets/桂林.jpg";
import Guilin2 from "../assets/桂林1.jpg";

import Jiangxi1 from "../assets/江西古城.jpg";
import Jiangxi2 from "../assets/江西古城1.jpg";

export default function Favorites() {
  // 你的全部目的地数据（和 Destinations.jsx 相同）
  const destinations = [
    {
      title: "Shanxi Courtyard",
      img1: Shanxi1,
      img2: Shanxi2,
      desc: `
        The Shanxi Courtyard is a historical masterpiece that captures the essence of ancient Chinese merchant culture.
        Walking through its deep alleys and layered courtyards feels like traveling back in time — every brick, wooden beam,
        and carved window tells a story shaped by centuries of prosperity and tradition.
      `
    },
    {
      title: "Guilin, Guangxi",
      img1: Guilin1,
      img2: Guilin2,
      desc: `
        Guilin is a landscape painting brought to life. The emerald rivers, misty mountains, and gentle reflections blend
        together like strokes of watercolor on silk.
      `
    },
    {
      title: "Jiangxi Ancient Town",
      img1: Jiangxi1,
      img2: Jiangxi2,
      desc: `
        Jiangxi’s ancient towns carry the soul of traditional Chinese life. Narrow stone alleys, quiet courtyards,
        and old houses with grey rooftops paint a vivid picture of a slower, simpler era.
      `
    }
  ];

  // 过滤收藏的目的地
  const favorites = destinations.filter((place) => {
    const favKey = `favorite_${place.title}`;
    return localStorage.getItem(favKey) === "true";
  });

  return (
    <div className="dest-wrapper">
      <h1 className="text-center mb-3">My Favorites</h1>

      {favorites.length === 0 ? (
        <p className="text-center">You haven't saved any destinations yet.</p>
      ) : (
        <div className="dest-grid">
          {favorites.map((place, index) => (
            <DestinationCard
              key={index}
              img1={place.img1}
              img2={place.img2}
              title={place.title}
              desc={place.desc}
            />
          ))}
        </div>
      )}
    </div>
  );
}
