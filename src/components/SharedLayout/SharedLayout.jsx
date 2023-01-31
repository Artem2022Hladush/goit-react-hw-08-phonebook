import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import css from "./SharedLayout.module.css"

import { AppBar } from "components/AppBar/AppBar";

export const SharedLayout = () => {
	return(
		<div className={css.container}>
			<AppBar/>
			<Suspense fallback={null}>
				<Outlet/>
			</Suspense>
		</div>
	)
}