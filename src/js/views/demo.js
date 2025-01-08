import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ContactCard from "../component/ContactCard.jsx";

//import { Context } from "../store/appContext"


export const Demo = () => {
	//const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<ContactCard />
			<br/>
			<Link to="/"><button className="btn-primary">Otra vista</button></Link>
		</div>
	);
};
