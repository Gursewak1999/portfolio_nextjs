import Image from "next/image";
import styles from "./page.module.css";
import PWA from "./pwa/page";

//page component
export default function Home() {
  return (
    <div className={styles.page}>

      <PWA />
      <main>
        <h1>
          Hi THis is a text
        </h1>
      </main>
    </div>
  );
}
