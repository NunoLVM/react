export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy;{currentYear} My Website. All rights reserved.</p>
    </footer>
  );
}
