import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import css from "../Navigation/Navigation.module.css";

import { selectIsLoggedIn } from "redux/auth/selectors";

export const Navigation = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return (
		<nav>
			<NavLink className={css.link} to="/">Home</NavLink>
			{isLoggedIn && (
			<NavLink className={css.link} to="/contacts">Contacts</NavLink>
			)}
		</nav>
	)
}

