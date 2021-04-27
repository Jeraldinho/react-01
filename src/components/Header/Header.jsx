import "./../logo.svg";
import "./Header.css";

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<a href="" className="header__logo">
					<img src="./../logo.svg" alt="Logo" />
					ReactApp
				</a>
			</div>
		</header>
	);
};

export default Header;