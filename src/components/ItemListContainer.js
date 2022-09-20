import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


const joysticks = [
    {
        id: 1, image: "https://www.tryhardware.com.ar/wp-content/uploads/2022/04/Joystick-Sony-PS4-Dualshock-4-Black.jpg", categoria: 'accesorios', title: "Joystick PS4 black", description: "Joystick para PlayStation 4 Dualshock inalámbrico color negro", precio: "$11.000"
    },
    {
        id: 2, image: "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/18623/711719530398.jpg", categoria: 'accesorios', title: "Joystick PS4 white", description: "Joystick para PlayStation 4 Dualshock inalámbrico color blanco", precio: "$13.000"
    },
    {
        id: 3, image: "https://cdn1.epicgames.com/offer/f5deacee017b4b109476933f7dd2edbd/EGS_EASPORTSFIFA23StandardEdition_EACanada_S2_1200x1600-c806355d9cc8b35ebe392f2a7db03075", categoria: 'juegos', title: "FIFA 23 - PS4", description: "EA Sports FIFA 23 para PS4 Standard Edition Físico", precio: "$15.000"
    },
    {
        id: 4, image: "https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/cKZ4tKNFj9C00giTzYtH8PF1.png", categoria: 'juegos', title: "CyberPunk 2077 - PS4", description: "CyberPunk 2077 Standard Edition para PS4 Fisico", precio: "$8.000"
    }
];

export const ItemListContainer = ({ greetings }) => {
    const [data, setData] = useState([]);
    const { categoriaId } = useParams();
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(joysticks);
            }, 1000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(joysticks => joysticks.categoria === categoriaId)));
        } else {
            getData.then(res => setData(res));
        }

    }, [categoriaId]);


    return (
        <>
            <h2>{greetings}</h2>

            <ItemList data={data} />
        </>
    )
}

export default ItemListContainer;