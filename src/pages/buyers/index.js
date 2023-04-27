import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./Buyers.module.css";
import Buyer from "@/components/Header/Buyer";

export async function getServerSideProps(context) {
  console.log(context);
  const res = await fetch(
    `http:localhost:3000/api/find-buyers?zipCode=${context.query.zipCode}&price=${context.query.price}&estateType=${context.query.estateType}&size=${context.query.size}`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default function Buyers(props) {
  const { query } = useRouter();
  console.log(props.data);
  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Potential buyers</h1>
        <div className={styles.content}>
          {props.data.map((buyer) => (
            <Buyer key={buyer.id} {...buyer} />
          ))}
          <pre>
            <code>{JSON.stringify(query, null, 2)}</code>
          </pre>
        </div>
        <h1 className={styles.headline}>Selected buyers</h1>
      </div>
    </>
  );
}
