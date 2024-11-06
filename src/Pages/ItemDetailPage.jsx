import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ItemsServices from '../Services/ItemsServices';
import { Container } from 'react-bootstrap';



const ItemDetailPage = () => {
    const location = useLocation();
    const {id} = useParams();
    const [item, SetItem] = useState([]);
    const currentItem = location.state.item;

   

// Plus besoin du Fetch, on utilise directement le state

    // const fetchItemById = async ()=>{
    //     try {
    //         const response = await ItemsServices.getItemById(id);
    //         SetItem(Object.entries(response.data.data)[0][1]);
    //         console.log(Object.entries(response.data));
    //         console.log(Object.entries(response.data)[0][1]);
            
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(()=>{
    //     fetchItemById();
    // },[]);

    return (
        <Container className='d-flex flex-column align-items-center'>
           <h1>{currentItem.name}</h1>
           <img src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/item/"+currentItem.image.full} />
           <p>{currentItem.plaintext}</p>
           <div className='d-flex gap-3'>
                {currentItem.into && currentItem.into.map((obj)=>{
                    return <img key={obj} src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/item/"+obj+".png"} />
                })}
           </div>
        </Container>
    );
}
export default ItemDetailPage;