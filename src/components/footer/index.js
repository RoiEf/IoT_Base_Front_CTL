import { h } from 'preact';
// import { Link } from 'preact-router/match';
import style from './style.css';
import {ApiAddressVisual} from '../api';

const Footer = () => {
	return(
		<footer class={style.footer}>
			<p><ApiAddressVisual /></p>
		</footer>
	);
};

export default Footer;
