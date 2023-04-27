import Head from "next/head";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Hello MMD</h1>
        <div className={styles.content}>
          <p>
            To get started, edit <code>pages/index.js</code> and save to reload.
          </p>
        </div>
        <div className={styles.content}>
          <h2>Basic form example</h2>
          <p>
            This is simple example of how you could submit a form to another
            page in Next.js, without using a custom <code>submit</code> function
            (e.g. without JavaScript). It is unstyled and unfinished. You can
            use this as base, or implement your own solution.
          </p>
          <p>
            Make sure to read the guide on{" "}
            <a
              href="https://nextjs.org/docs/guides/building-forms"
              target="_blank"
            >
              building forms in Next.js
            </a>
          </p>
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
                <option value="House" selected required>
                  House
                </option>
                <option value="Apartment">Apartment</option>
                <option value="Raekkehus">Rækkehus</option>
              </select>
            </label>
            <button className={styles.button}>Find Buyers</button>
          </form>
        </div>
      </div>
    </>
  );
}
