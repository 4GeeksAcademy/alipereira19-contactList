const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            test: 'hola',
            contactList: [
                {
                    name: "Juan",
                    email: "juan@gmail.com",
                    phone: "55666777",
                    address: "Donde quieras",
                    id: 0
                },
                {
                    name: "Daniel",
                    email: "daniel@gmail.com",
                    phone: "888999111",
                    address: "Donde NO quieras",
                    id: 1
                },
            ], 
            currentName: ""
        },
        actions: {
			borrarContacto: async (id) => {
                try {
                    const response = await fetch(
                        `https://playground.4geeks.com/contact/agendas/alip/contacts/${id}`,
                        {
                            method: "DELETE",
                        }
                    );
                    if (!response.ok) {
                        throw new Error("No se pudo eliminar el contacto.");
                    }
                    // Si la respuesta es exitosa, actualizamos el store
                    const store = getStore();
                    const updatedContacts = store.contactList.filter((contact) => contact.id !== id);
                    setStore({ ...store, contactList: updatedContacts });
                } catch (error) {
                    console.error("Error eliminando el contacto:", error);
                }
            },
            getList: async (agendaName) => {
                try {
                    const store = getStore();
                    const response0 = await fetch("https://playground.4geeks.com/contact/agendas")
                    if(!response0.ok) {
                        throw new Error("No sirvió, pa:", response0)
                    }
                    const data0 = await response0.json();
                    const userExist = data0.agendas.find(item => item.slug === agendaName)
                    if (!userExist) {
                        const newResponse = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}`, {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                    });
                    if (!newResponse.ok) {
                        throw new Error("No sirvió, pa")
                    }
                }
                const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}/contacts`)
                if (!response.ok) {
                    throw new Error("no sirvió")
                }
                    const data = await response.json();
                    setStore({...store, contactList: [...data.contacts] })
                } catch (error) {
                    console.error(error);
                }
            },
            setCurrentName: (actualName) => {
				console.log("entro en el actions set current name y recibio: ", actualName)
				const store= getStore();
				setStore({...store, currentName:actualName});
			},
            createUser: async (slug) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}`, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(),
                    })
                    if (!response.ok) {
                        throw new Error("No sirvió :(");
                    }
                } catch (error) {
                    console.error(error);
                }
            },
            addContact: async (payload) =>{
                try {
                    const response = await fetch("https://playground.4geeks.com/contact/agendas/alip/contacts", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(payload),
                    })
                    if (!response.ok) {
                        throw new Error("No sirvió :(");
                    }
                } catch (error) {
                    console.error(error);
                }
            }
            },
            delete: async (id) => {
                console.log("funciono");
            },
            editarContacto: async (id, contact) =>{
                try {
                    const store = getStore();
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/alip/contacts/${id}`, {
                     method: "PUT",
                     headers: {
                         'Content-Type': 'application/json'
                     },
                     body: JSON.stringify(contact)
                 }) 
                 if (!response.ok) {
                    throw new Error(error); 
                 } 
                 const data = await response.json(contact);
                 if (data) {
                    const updatedList = store.contactList.map((contact) => {
                        if (contact.id == id) {
                            contact = data
                        }
                        return contact
                    })
                    setStore({ contactList: updatedList })
                }
                } catch (error) {
                    console.error(error);
                }
               },
		}
    };
export default getState;






