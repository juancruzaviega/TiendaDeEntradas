import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'


const joysticks = [
    {
        id: 1, image: "https://www.tryhardware.com.ar/wp-content/uploads/2022/04/Joystick-Sony-PS4-Dualshock-4-Black.jpg", title: "Joystick PS4 black", description: "Joystick para PlayStation 4 Dualshock inalámbrico color negro", precio: "$11.000"
    },
    {
        id: 2, image: "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/18623/711719530398.jpg", title: "Joystick PS4 white", description: "Joystick para PlayStation 4 Dualshock inalámbrico color blanco", precio: "$13.000"
    }
];

export const ItemListContainer = ({ greetings }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(joysticks);
            }, 3000);
        });
        getData.then(res => setData(res));
    }, []);
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)
    };

    return (
        <>
            <h2>{greetings}</h2>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
            <ItemList data={data} />
        </>
    )
}

export default ItemListContainer;