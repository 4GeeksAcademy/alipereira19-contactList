import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ContactCard from "../component/ContactCard.jsx";
import { Context } from "../store/appContext"


export const Demo = () => {
const { store, actions } = useContext(Context);
const [slug, setSlug] = useState("");

const handlerGetContactList = async () =>{
    try { 
        await actions.getList(); 
        
    } catch (error) {
        console.error(error);
    }
};
    const handlerCreateUser = async () => {
        try {
            await actions.createUser(slug);

        } catch (error) {
            console.error(error);
        };
    };
useEffect(() =>{
handlerGetContactList();
},[])
	return (
		<div className="container">
            <div className="UserInput d-flex ">
            <input placeholder="Ingresa usuario" type="text" onChange={(e) => {setSlug(e.target.value)}} value={slug}/>
            <button className="btn btn-md btn-success ms-2"onClick={handlerCreateUser} >Crear</button>
            <hr/>
            </div>
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
		
	
	
