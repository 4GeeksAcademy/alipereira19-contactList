import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddContact = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [edad, setEdad] = useState('');
    const [direccion, setDireccion] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Edad:', edad);
        console.log('Dirección:', direccion);
    };

    return (
        <div className="container d-flex flex-column justify-content-start align-items-center mb-5" style={{
            height: '700px', width: '80%'
        }}>
            <label>
                <p>Nombre:</p>
                <input type="text" placeholder="Nombre" value={nombre} className="bg-light form-control" style={{ width: '500px' }} onChange={(e) => setNombre(e.target.value)} />
            </label>
            <br />
            <label>
                <p>Email:</p>
                <input type="email" placeholder="Email" value={email} className="bg-light form-control" style={{ width: '500px' }} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                <p>Edad:</p>
                <input type="number" placeholder="Edad" value={edad} className="bg-light form-control" style={{ width: '500px' }} onChange={(e) => setEdad(e.target.value)} />
            </label>
            <br />
            <label>
                <p>Dirección:</p>
                <input type="text" placeholder="Dirección" value={direccion} className="bg-light form-control" style={{ width: '500px' }} onChange={(e) => setDireccion(e.target.value)} />
            </label>
            <br />
            <button className="btn btn-lg btn-primary" type="submit" style={{ width: '500px' }} >Enviar</button>
            <br />
            <Link to="/contacts"><button>otra vista</button></Link>
        </div >
    );
};

export default AddContact; 
