import React from 'react';
import ItemsServices from '../Services/ItemsServices';
import ItemCard from '../Components/ItemCard';
import { useState } from 'react';
import { useEffect } from 'react';
import { Form } from 'react-bootstrap';



const ItemsPage = () => {

    const [items, setItems] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);
    
    const handleChange= (event) => {
        setSearchValue(event.currentTarget.value);
    }

    const fetchItems = async () => {
        try {
            const response = await ItemsServices.getAllItems();
            

            const res = Object.entries(response.data.data)
            res.sort((a,b)=>{
                return a[1].name.localeCompare(b[1].name);
            })
            
            // response.data.data.sort((a,b) => a.name.localCompare(b.firstname))
            setItems(res);
            setFilteredItems(res);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchItems();
    },[]);

    useEffect(() => {
        setFilteredItems(items.filter((item) => {
            return item[1].name.toLowerCase().includes(searchValue.toLowerCase());
    }))
        },[searchValue]);
    

    return <>
       
    <div className='backgroundPage'>
            <h1 style={{color : 'whitesmoke'}}>Liste des Items</h1>

        <Form>
            <Form.Group className="mb-3 col-8" controlId="exampleForm.ControlInput1">
                <Form.Label>Recherche ton item</Form.Label>
                <Form.Control type="text" placeholder="Recherche ton item" value={searchValue} onChange={handleChange}/>
            </Form.Group>
        </Form>

        <div className='d-flex justify-content-center gap-5 flex-wrap'>

        {filteredItems.map((item) => {
            return <ItemCard  key={item[1].id} item={item[1]} />
        })}

        </div>
    </div>

    </>
       
}

export default ItemsPage;