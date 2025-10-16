export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="footer" className="pt-12 pb-8 text-center text-sm text-gray-500">
      <p>
        Made with love • {year}
      </p>
    </footer>
  );
}
