import { useState, useEffect } from "react";

export default function DestinationCard({ img1, img2, title, desc }) {
  // Keys for localStorage
  const likeKey = `likes_${title}`;
  const likedKey = `liked_${title}`;
  const favKey = `favorite_${title}`;

  // States
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [favorited, setFavorited] = useState(false);

  // Load saved state when component mounts
  useEffect(() => {
    const savedLikes = localStorage.getItem(likeKey);
    const savedLiked = localStorage.getItem(likedKey);
    const savedFav = localStorage.getItem(favKey);

    if (savedLikes) setLikes(Number(savedLikes));
    if (savedLiked === "true") setLiked(true);
    if (savedFav === "true") setFavorited(true);
  }, []);

  // Like toggle
  const toggleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);

    const newLikes = newLiked ? likes + 1 : likes - 1;
    setLikes(newLikes);

    localStorage.setItem(likeKey, newLikes);
    localStorage.setItem(likedKey, newLiked);
  };

  // Favorite toggle
  const toggleFavorite = () => {
    const newFav = !favorited;
    setFavorited(newFav);

    localStorage.setItem(favKey, newFav);
  };

  return (
    <div className="destination-card shadow-lg">
      <div className="destination-images">
        <img src={img1} alt={title} />
        <img src={img2} alt={title} />
      </div>

      <div className="destination-info">
        <h3 className="destination-title">{title}</h3>
        <p className="destination-desc">{desc}</p>

        {/* Buttons */}
        <div className="interaction-row">
          <button
            className={`like-btn ${liked ? "liked" : ""}`}
            onClick={toggleLike}
          >
            ❤️ {likes}
          </button>

          <button
            className={`fav-btn ${favorited ? "favorited" : ""}`}
            onClick={toggleFavorite}
          >
            ⭐ {favorited ? "Saved" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}

