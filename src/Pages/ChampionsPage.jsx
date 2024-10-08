import React, { useEffect, useState } from 'react';
import ChampionsServices from '../Services/ChampionsServices';
import ChampionCard from '../Components/ChampionCard';

const ChampionsPage = () => {
    
    const [champions, setChampions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [searchValue, setSearchValue] = useState("");
    


    const fetchChampions = async () => {
        try {
            const response = await ChampionsServices.getAllChampions();
            setChampions(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

useEffect(() => {
    fetchChampions();
},[]);

   return <>
   <div className='backgroundPage'>
    <h1 style={{color : 'whitesmoke'}}>Champions</h1>
    <div className='d-flex justify-content-center gap-5 flex-wrap'>
        {Object.entries(champions).map((champion) => {
            return <ChampionCard  key={champion[1].id} champion={champion[1]} />
        })}
    </div>
    </div>
</>
}
 
export default ChampionsPage;