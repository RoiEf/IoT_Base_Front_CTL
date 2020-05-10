import { h } from "preact";
// import style from "./style";
// import styles from "../style/styles.css";

const Home = (props) => {
  // class={styles.basePage}
  return (
    <div id="basePage">
      <div id="topHeader">
        <h1>Home</h1>
      </div>
      <p>This is the Home component.</p>
      {props.isAutenticated ? <p>Autenticated</p> : <p>Not autenticated</p>}
    </div>
  );
};

export default Home;
