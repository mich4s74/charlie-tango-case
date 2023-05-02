import Head from "next/head";
import styles from "./../Home.module.css";

export default function Thanks(props) {
  console.log(props.sellerInfo.name);
  console.log(props.sellerInfo.email);
  console.log(props.sellerInfo.phone);

  return (
    <>
      <Head>
        <title>Thank you</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Thank you!</h1>
        <div className={styles.grid_container}>
          <div className={styles.content}>
            <p>You will hear from us in 2-3 days</p>
          </div>
        </div>
      </div>
    </>
  );
}
