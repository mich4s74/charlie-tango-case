import Head from "next/head";
import styles from "./Potential_buyers.module.css";

export default function potential_buyers(props) {
  const data = props.sellerInfo.selected;
  console.log(props.sellerInfo.selected);

  return (
    <>
      <Head>
        <title>Potential Buyers</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Contact potential buyers</h1>
        <div className={styles.content}>
          {data.map((oneBuyer) => (
            <article key={oneBuyer.id}>
              <h3>BUYER ID: {oneBuyer.id}</h3>
              <p>Description: {oneBuyer.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="wrapper">
        <div className={styles.grid_container}>
          <div className={styles.content}>
            <form action="/contact" method="GET" className={styles.form}>
              <label>
                <span className={styles.label}>Name</span>
                <input type="text" name="name" required />
              </label>
              <label>
                <span className={styles.label}>Email</span>
                <input type="text" name="email" required />
              </label>
              <label>
                <span className={styles.label}>Phone</span>
                <input type="number" name="phone" required />
              </label>
              <label>
                <br />
                <br />
                <input type="checkbox" value="consent" />
                <span className={styles.checkbox}>
                  Yes please, EDC may contact me with offers and information
                  related to the real estate market
                </span>
              </label>
              <button className={styles.button}>Contact buyers</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
