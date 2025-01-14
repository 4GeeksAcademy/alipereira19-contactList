import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ContactCard from "../component/ContactCard.jsx";
import { Context } from "../store/appContext.js"


export const Demo = () => {
    const { store, actions } = useContext(Context);
    const [slug, setSlug] = useState("");
    const [agendaName, setAgendaName] = useState("alip");

    const handlerGetContactList = async () => {
        try {
            await actions.getList(agendaName);

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



    useEffect(() => {
        handlerGetContactList();
    }, [])
    return (
        <div className="container">
            <Link to="/"><button className="btn-primary">Add New Contact</button></Link>
            <ul className="list-group mt-3">

                {store.contactList.map((contact, index) => {
                    return (
                        <div>
                            <ContactCard item={contact} key={index} />
                        </div>
                    )
                })}

            </ul>

        </div>
    );
};



