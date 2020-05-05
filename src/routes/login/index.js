import { h } from "preact";
import { useState } from "preact/hooks";
import style from "./style";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const address = `http://${window.location.hostname}:${80}/login`;
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("address: ", address);
    fetch(address, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("login response: ", res);
        if (res.message === "Auth sucess") {
          props.updateAuthData({ user: userName, password });
        }
      })
      .catch((error) => console.log("something failed", error));
  };
  return (
    <div class={style.login}>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        User Name:{" "}
        <input
          type="text"
          value={userName}
          onInput={(e) => setUserName(e.target.value)}
        />
        <br />
        Password:{" "}
        <input
          type="text"
          value={password}
          onInput={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
