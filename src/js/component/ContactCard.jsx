import React, { useContext } from 'react'
import { Context } from "../store/appContext.js"



const ContactCard = ({ item }) => {
    const { store, actions } = useContext(Context)

    const handlerDelete = async () => {
        try {
            await actions.borrarContacto(item.id);
            //await actions.delete();
        } catch (error) {
            console.error(error);

        }
    };

    return (
        <div className="card mb-3" key={item.id} style={{
            width: '540px'
        }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://picsum.photos/170/170/" className="img-fluid rounded-circle p-3" alt="Aquí debería haber una foto :)" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3>{store.test}</h3>
                        <p className="card-text">Name: {item.name}</p>
                        <p className="card-text">Address: {item.address}</p>
                        <p className="card-text">Phone: {item.phone}</p>
                        <p className="card-text">Email: {item.email}</p>
                        <p className="card-footer"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <button className="btn btn-dark" onClick={handlerDelete}>
                            Borrar
                        </button>
                        <button className="btn btn-dark ms-2" >
                            Editar
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContactCard