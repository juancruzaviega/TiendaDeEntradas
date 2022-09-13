import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

const joysticks = {
    id: 1, image: "https://www.tryhardware.com.ar/wp-content/uploads/2022/04/Joystick-Sony-PS4-Dualshock-4-Black.jpg", title: "Joystick PS4 black", description: "Joystick para PlayStation 4 Dualshock inalámbrico color negro", precio: "$11.000"
}


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(joysticks);
            }, 2000);
        });
        getData.then(res => setData(res));
    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer