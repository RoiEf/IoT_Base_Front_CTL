import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
// import { route } from 'preact-router';
import styles from "../style/styles.css";
import style from "./network/style";

const address = `http://${window.location.hostname}:${80}/network`;

const Network = (props) => {
  const [ssid, updateSSID] = useState("base_iot");
  const [wifiPassword, updatePassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (props.isAutenticated) {
      fetch(address, {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          userName: props.user,
          password: props.password,
          cmd: "update",
          ssid,
          wifiPassword,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("network response: ", res);
        })
        .catch((error) => console.log("something failed", error));
    }
  };

  useEffect(() => {
    if (props.isAutenticated) {
      console.log("Fetching data Network");
      fetch(address, {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          userName: props.user,
          password: props.password,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          updateSSID(res.ssid);
          updatePassword(res.wifiPassword);
          console.log("res: ", res);
        })
        .catch((error) => console.log("something failed", error));
    }
  }, [props.isAutenticated, props.user, props.password]);

  return (
    <div class={styles.basePage}>
      <div class={style.network}>
        <h1>Network Settings</h1>
        <h2>WiFi Settings</h2>
        <form onSubmit={onSubmit}>
          <p>
            <input
              type="text"
              value={ssid}
              onInput={(e) => updateSSID(e.target.value)}
            />
          </p>
          <p>
            <input
              type="text"
              value={wifiPassword}
              onInput={(e) => updatePassword(e.target.value)}
            />
          </p>
          <p class="submit">
            <input type="submit" name="commit" value="Save" />
          </p>
        </form>
        <br />
        <h2>Advanced Settings</h2>
        <form onSubmit={onSubmit}>
          <p>This is the Network Settings component.</p>
        </form>
      </div>
    </div>
  );
};

export default Network;
