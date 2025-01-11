import React, { useActionState, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "./store/appContext.js";


const AddContact = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const { store, actions } = useContext(Context);





    const saveContact = () => {
        const payload = {
            name: nombre,
            phone: telefono,
            email: email,
            address: direccion
        };
        actions.addContact(payload);

    };



    return (
        <div className="container d-flex flex-column justify-content-start align-items-center mb-5" style={{
            height: '700px', width: '80%'
        }}>
            <h1>Add Contact</h1>
            <label>
                <p>Nombre:</p>
                <input type="text" placeholder="Nombre" value={nombre} className="bg-light form-control" style={{ width: '500px' }} onChange={(e) => setNombre(e.target.value)} required />
            </label>
            <br />
            <label>
                <p>Email:</p>
                <input type="email" placeholder="Email" value={email} className="bg-light form-control" style={{ width: '500px' }} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <br />
            <label>
                <p>Teléfono:</p>
                <input type="number" placeholder="Teléfono" value={telefono} className="bg-light form-control" style={{ width: '500px' }} onChange={(e) => setTelefono(e.target.value)} required />
            </label>
            <br />
            <label>
                <p>Dirección:</p>
                <input type="text" placeholder="Dirección" value={direccion} className="bg-light form-control" style={{ width: '500px' }} onChange={(e) => setDireccion(e.target.value)} required />
            </label>
            <br />
            <Link to="/contacts"> <button className="btn btn-lg btn-primary" type="submit" onClick={saveContact} style={{ width: '500px' }} >Enviar</button></Link>
            <br />
            <Link to="/contacts"><a>Volver a tus contactos</a></Link>
        </div >
    );
};


export default AddContact; 
