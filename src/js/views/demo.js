import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ContactCard from "../component/ContactCard.jsx";
import { Context } from "../store/appContext"


export const Demo = () => {
const { store, actions } = useContext(Context);

const handlerGetContactList = async () =>{
    try { 
        await actions.getList(); 
        
    } catch (error) {
        console.error(error);
    }
};

useEffect(() =>{
handlerGetContactList();
},[])
	return (
		<div className="container">
			<ul className="list-group mt-3">
               {store.contactList.map((contact, index) => {
                    return (
                        <ContactCard  item={contact}  />
                    )
                })}
            </ul>
			<br/>
			<Link to="/"><button className="btn-primary">Otra vista</button></Link>
        </div>
    );
};
		
	
	
