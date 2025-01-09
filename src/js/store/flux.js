const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
				}
			]
		},
		actions: {
			getList: async () => {
				try {
					const store = getStore();
					const response = await fetch("https://playground.4geeks.com/contact/agendas/slugg")
					if (!response.ok) {
						throw new Error("No sirvió, pa")
					}
					const data = await response.json();
					setStore({...store, contactList: [...data.contacts] })
				} catch (error) {
					console.error(error);
					
				}
			},






			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
