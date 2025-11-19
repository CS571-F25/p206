import DestinationCard from "./DestinationCard";

// Local images
import Shanxi1 from "../assets/山西大院.jpg";
import Shanxi2 from "../assets/山西大院1.jpg";

import Guilin1 from "../assets/桂林.jpg";
import Guilin2 from "../assets/桂林1.jpg";

import Jiangxi1 from "../assets/江西古城.jpg";
import Jiangxi2 from "../assets/江西古城1.jpg";

export default function Destinations() {
    return (
        <div className="dest-wrapper">

            <h1 className="text-center mb-3">Destinations</h1>
            <p className="lead text-center mb-5">
                A collection of the places that have shaped my journeys — full of culture, scenery, and unforgettable moments.
            </p>

            <div className="dest-grid">

                {/* Shanxi Courtyard */}
                <DestinationCard
                    img1={Shanxi1}
                    img2={Shanxi2}
                    title="Shanxi Courtyard"
                    desc="
                        The Shanxi Courtyard is a historical masterpiece that captures the essence of ancient Chinese merchant culture. 
                        Walking through its deep alleys and layered courtyards feels like traveling back in time — every brick, wooden beam, 
                        and carved window tells a story shaped by centuries of prosperity and tradition.

                        What struck me the most was the quiet dignity of the architecture. Despite its age, the courtyard stands strong, 
                        offering a peaceful escape from modern noise. It’s a place where history breathes, where time slows down, 
                        and where the beauty of simplicity becomes truly powerful.
                    "
                />

                {/* Guilin */}
                <DestinationCard
                    img1={Guilin1}
                    img2={Guilin2}
                    title="Guilin, Guangxi"
                    desc="
                        Guilin is a landscape painting brought to life. The emerald rivers, misty mountains, and gentle reflections 
                        blend together like strokes of watercolor on silk. Whether drifting along the Li River or admiring the 
                        mountains rising sharply from the earth, every moment feels serene and dreamlike.

                        The beauty of Guilin lies not only in its scenery but in its atmosphere — calm, poetic, and almost timeless. 
                        It’s the kind of place that makes you want to slow down, breathe deeply, and simply exist within the view.
                    "
                />

                {/* Jiangxi Ancient Town */}
                <DestinationCard
                    img1={Jiangxi1}
                    img2={Jiangxi2}
                    title="Jiangxi Ancient Town"
                    desc="
                        Jiangxi’s ancient towns carry the soul of traditional Chinese life. Narrow stone alleys, quiet courtyards, 
                        and old houses with grey rooftops paint a vivid picture of a slower, simpler era. Smoke rising from chimneys, 
                        vendors selling local snacks, and the rhythm of daily life create an atmosphere that feels warm and alive.

                        What I loved most was how authentic everything felt — nothing rushed, nothing forced. Just genuine life unfolding 
                        in a town shaped by history. It’s the kind of place that stays with you long after you leave.
                    "
                />

            </div>
        </div>
    );
}
