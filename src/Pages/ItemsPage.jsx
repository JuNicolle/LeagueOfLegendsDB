import React from 'react';
import ItemsServices from '../Services/ItemsServices';
import ItemCard from '../Components/ItemCard';
import { useState } from 'react';
import { useEffect } from 'react';


const ItemsPage = () => {

    const [items, setItems] = useState([]);
 


    const fetchItems = async () => {
        try {
            const response = await ItemsServices.getAllItems();
            setItems(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchItems();
    },[]);
    console.log(items);

    return <>
       
    <div className='backgroundPage'>
            <h1 style={{color : 'whitesmoke'}}>Liste des Items</h1>
        <div className='d-flex justify-content-center gap-5 flex-wrap'>

        {Object.entries(items).map((item) => {
            return <ItemCard  key={item[1].id} item={item[1]} />
        })}

        </div>
    </div>

    </>
       
}

export default ItemsPage;