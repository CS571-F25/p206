export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-title">My Travel Moments</p>
      <p className="footer-copy">© {new Date().getFullYear()} Yiteng Li — All Rights Reserved.</p>
    </footer>
  );
}