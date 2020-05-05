import { h } from "preact";
import style from "./style";

const Home = (props) => {
  return (
    <div class={style.home}>
      <h1>Home</h1>
      <p>This is the Home component.</p>
      {props.isAutenticated ? <p>Autenticated</p> : <p>Not autenticated</p>}
    </div>
  );
};

export default Home;
