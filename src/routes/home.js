import { h } from "preact";
// import style from "./style";
import styles from "../components/styles.css";

const Home = (props) => {
  return (
    <div class={styles.basePage}>
      <h1>Home</h1>
      <p>This is the Home component.</p>
      {props.isAutenticated ? <p>Autenticated</p> : <p>Not autenticated</p>}
    </div>
  );
};

export default Home;
