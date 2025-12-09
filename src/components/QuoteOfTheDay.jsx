export default function QuoteOfTheDay() {
  const quotes = [
    "The world is a book, and those who do not travel read only one page.",
    "Travel makes one modest — you see what a tiny place you occupy in the world.",
    "Wherever you go becomes a part of you somehow.",
    "Jobs fill your pockets, adventures fill your soul.",
    "To travel is to live."
  ];

 
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div 
      style={{
        padding: "15px 20px",
        margin: "20px auto",
        maxWidth: "800px",
        background: "rgba(255,255,255,0.6)",
        borderRadius: "10px",
        fontSize: "1.1rem",
        textAlign: "center",
        fontStyle: "italic",
        color: "#4a4a4a",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
      }}
    >
       {randomQuote}
    </div>
  );
}
