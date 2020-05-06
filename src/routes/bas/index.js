import { h } from 'preact';
import { useState } from "preact/hooks";
// import { route } from 'preact-router';
import style from './style';

// import {ApiAddress} from '../../components/api';

const Bas = (/* props */) => {
	const [checked, toggle] = useState(true);

	const runToggle = () => {
		toggle(!checked);
	};

	// if (!props.isAutenticated) {
	// 	route("/", true);
	// } else {

	return (<div class={style.basicPage}><div class={style.basic}>
		<h1>Basic Settings</h1>
		<form>
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
			<input type="radio"
				id="STA"
				name="deviceMode"
				value="STA"
				checked={!checked}
				onClick={runToggle}
			/>
			<p class="submit"><input type="submit" name="commit" value="Save" /></p>
		</form>
	</div></div>);
	// }
};

export default Bas;
