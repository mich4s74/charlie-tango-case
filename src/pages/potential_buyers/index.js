import Head from "next/head";
import styles from "../Home.module.css";
import house_frontpage from "@/assets/house_frontpage.jpg";
import Image from "next/image";

export default function potential_buyers(props) {
  return (
    <>
      <Head>
        <title>Potential Buyers</title>
      </Head>
      <div className="">
        <h1 className={styles.headline}>Find Buyers for your property</h1>
        <pre>{JSON.stringify(props.sellerInfo, null, 2)}</pre>
      </div>
    </>
  );
}
