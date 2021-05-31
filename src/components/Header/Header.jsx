import { NavLink } from "react-router-dom";
import "./../logo.svg";
import "./Header.css";

const Header = (props) => {
	return (
		<header className="header">
			<div className="container">
				<a href="" className="header__logo">
					<img src="./../logo.svg" alt="Logo" />
					ReactApp
				</a>

				<div className="header__login">
					{props.isAuth ? (
						<div className="header__login--is-auth">
							{props.login}
							<img
								src={
									props.photo !== null
										? props.photo
										: "https://via.placeholder.com/35x35"
								}
								className="header__login-avatar"
								alt="avatar"
							/>
						</div>
					) : (
						<NavLink to={"/login"} className="header__login-link">
							<span>Login</span>

							<i className="mdi mdi-login-variant"></i>
						</NavLink>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
