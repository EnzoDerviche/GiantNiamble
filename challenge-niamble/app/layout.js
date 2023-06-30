import Navbar from "./components/navbar";
import Footer from "./components/footer";
import styles from "./layout.module.css";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <main className={styles.main}>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
