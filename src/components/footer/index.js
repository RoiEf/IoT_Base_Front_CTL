import { h } from 'preact';
// import { Link } from 'preact-router/match';
import style from './style.css';
// import {ApiAddressVisual} from '../api';

// const ApiAddressVisual = () => {
// 	const loca = ;
// 	return <Fragment>IoT Address: {loca}</Fragment>;
// };

const Footer = () => {
	const loca = `${window.location.hostname}`;
	return (
		<footer class={style.footer}>
			<p>{loca}</p>
		</footer>
	);
};

export default Footer;
