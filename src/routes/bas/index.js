import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
// import { route } from 'preact-router';
import style from "./style";

// import {ApiAddress} from '../../components/api';
const address = `http://${window.location.hostname}:${80}/basic`;

const Bas = (props) => {
  const [checked, toggle] = useState(true);

  const runToggle = () => {
    toggle(!checked);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (checked) {
      console.log("deviceMode: AP");
    } else {
      console.log("deviceMode: STA");
    }

    fetch(address, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        userName: props.user,
        password: props.password,
        device_mode: checked,
        cmd: "update",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("basic response: ", res);
      })
      .catch((error) => console.log("something failed", error));
  };

  useEffect(() => {
    console.log("Fetching data");
    fetch(address, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ userName: props.user, password: props.password }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res: ", res);
        if (res.device_mode === "AP") {
          toggle(true);
        } else {
          toggle(false);
        }
      })
      .catch((error) => console.log("something failed", error));
  }, []);

  // if (!props.isAutenticated) {
  // 	route("/", true);
  // } else {
  return (
    <div class={style.basicPage}>
      <div class={style.basic}>
        <h1>Basic Settings</h1>
        <form onSubmit={onSubmit}>
          <p>Device mode:</p>
          <label for="AP">Use as stand alone device</label>
          <input
            type="radio"
            id="AP"
            name="deviceMode"
            value="AP"
            checked={checked}
            onClick={runToggle}
          />
          <br />
          <label for="STA">Use as network client device</label>
          <input
            type="radio"
            id="STA"
            name="deviceMode"
            value="STA"
            checked={!checked}
            onClick={runToggle}
          />
          <p class="submit">
            <input type="submit" name="commit" value="Save" />
          </p>
        </form>
      </div>
    </div>
  );
  // }
};

export default Bas;
