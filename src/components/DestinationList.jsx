// src/components/DestinationList.jsx
import DestinationCard from "./DestinationCard";

export default function DestinationList({ destinations, searchTerm }) {
  const normalized = searchTerm.trim().toLowerCase();

  const filtered = destinations.filter((dest) => {
    if (!normalized) return true;
    const text =
      (dest.title || "") +
      " " +
      (dest.desc || "");
    return text.toLowerCase().includes(normalized);
  });

  if (filtered.length === 0) {
    return <p className="text-center mt-4">No destinations match your search.</p>;
  }

  return (
    <div className="dest-grid">
      {filtered.map((dest) => (
        <DestinationCard
          key={dest.id}
          img1={dest.img1}
          img2={dest.img2}
          title={dest.title}
          desc={dest.desc}
        />
      ))}
    </div>
  );
}
