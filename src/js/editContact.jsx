import React from 'react'
import React, { useState, useContext } from "react";

const editContact = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container d-flex flex-column justify-content-start align-items-center mb-5" style={{
            height: '700px', width: '80%'
        }}>
            <h1>Add Contact</h1>
            <label>
                <p>Nombre:</p>
                <input type="text" id="input1" placeholder="Nombre" value={nombre} className="bg-light form-control" style={{ width: '500px' }} onChange={(e) => setNombre(e.target.value)} required />
            </label>
            <br />
            <label>
                <p>Email:</p>
                <input type="email" id="input2" placeholder="Email" value={email} className="bg-light form-control" style={{ width: '500px' }} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <br />
            <label>
                <p>Teléfono:</p>
                <input type="number" id="input3" placeholder="Teléfono" value={telefono} className="bg-light form-control" style={{ width: '500px' }} onChange={(e) => setTelefono(e.target.value)} required />
            </label>
            <br />
            <label>
                <p>Dirección:</p>
                <input type="text" id="input4" placeholder="Dirección" value={direccion} className="bg-light form-control" style={{ width: '500px' }} onChange={(e) => setDireccion(e.target.value)} required />
            </label>
            <br />
            <Link to="/contacts"> <button className="btn btn-lg btn-primary" type="submit" onClick={saveContact} style={{ width: '500px' }} >Enviar</button></Link>
            <br />
            <Link to="/contacts"><a>Volver a tus contactos</a></Link>
        </div >
    );
}

export default editContact