import Head from "next/head";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Find Buyers for your property</h1>
        <div className={styles.grid_container}>
          <div className={styles.content}>
            <form action="/buyers" method="GET" className={styles.form}>
              <label>
                <span className={styles.label}>Zip Code</span>
                <input type="number" name="zipCode" required />
              </label>
              <label>
                <span className={styles.label}>Price</span>
                <input type="number" name="price" required />
              </label>
              <label>
                <span className={styles.label}>Size (sqm.)</span>
                <input type="number" name="size" required />
              </label>
              <label>
                <span className={styles.label}>Estate Type</span>
                <select name="estateType">
                  <option value="1" selected required>
                    Villa
                  </option>
                  <option value="2">Villalejlighed</option>
                  <option value="3">Rækkehus</option>
                </select>
              </label>
              <button className={styles.button}>Find Buyers</button>
            </form>
          </div>
          <div>
            <img src=".../src/assets/house_frontpage.jpg"></img>
          </div>
        </div>
      </div>
    </>
  );
}
