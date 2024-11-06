import React, { useEffect, useState } from 'react';
import ChampionsServices from '../Services/ChampionsServices';
import ChampionCard from '../Components/ChampionCard';
import { Form } from 'react-bootstrap';

const ChampionsPage = () => {
    
    const [champions, setChampions] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [filteredChampions, setFilteredChampions] = useState([]);
    
    const handleChange= (event) => {
        setSearchValue(event.currentTarget.value);;
    }

    const fetchChampions = async () => {
        try {
            const response = await ChampionsServices.getAllChampions();

            const res = Object.entries(response.data.data)
            res.sort((a,b)=>{
                return a[1].name.localeCompare(b[1].name);
            })
            setChampions(res);
            setFilteredChampions(res);
        } catch (error) {
            console.error(error);
        }
    };

useEffect(() => {
    fetchChampions();
},[]);

useEffect(() => {
    setFilteredChampions(champions.filter((champion) => {
        return champion[1].name.toLowerCase().includes(searchValue.toLowerCase());
}))
    },[searchValue]);


   return <>
   <div className='backgroundPage'>
    <h1 style={{color : 'whitesmoke'}}>Champions</h1>
    <div className='divSearchChampion'>
    <Form>
        <Form.Group className='searchChampionBar' controlId="exampleForm.ControlInput1">
            <Form.Label>Recherche ton champion</Form.Label>
            <Form.Control type="text" placeholder="Recherche ton champion" value={searchValue} onChange={handleChange}/>
        </Form.Group>
    </Form>
    </div>

    <div className='d-flex justify-content-center gap-5 flex-wrap'>
        {filteredChampions.map((champion) => {
            return <ChampionCard  key={champion[1].id} champion={champion[1]} />
        })}
    </div>
    </div>
</>
}
 
export default ChampionsPage;