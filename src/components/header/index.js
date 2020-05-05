import { h, Fragment } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = (props) => {
	return(
	<header class={style.header}>
		<h1>Pool IoT Heating control</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			{props.isAutenticated ? (
			<Fragment>
				<Link activeClassName={style.active} href="/iot">IoT Specifics</Link>
				<Link activeClassName={style.active} href="/basic">Basic</Link>
				<Link activeClassName={style.active} href="/network">Network</Link>
				<Link activeClassName={style.active} href="/updates">Updates</Link>
			</Fragment>):(
				<Link activeClassName={style.active} href="/login">Login</Link>
			)}
			{/* <Link activeClassName={style.active} href="/profile">Me</Link>
			<Link activeClassName={style.active} href="/profile/john">John</Link> */}
		</nav>
	</header>
	);
};

export default Header;
