import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>Hola</h1>
			<Link to="/"><button className="btn-primary">Holaa</button></Link>
		</div>
	);
};
