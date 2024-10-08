import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChampionsServices from "../Services/ChampionsServices";
import ChampionCard from "../Components/ChampionCard";






const ChampionDetailPage = () => {
    const {id} = useParams();
    const [champion, SetChampion] = useState([]);
    
    

    const fetchChampionById = async ()=>{
        try {
            const response = await ChampionsServices.getChampionById(id);
            console.log(response.data.data);
            console.log(Object.entries(response.data.data)[0][1]);
            SetChampion(Object.entries(response.data.data)[0][1]);
            console.log(champion);  
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchChampionById();
    },[]);
    
    return <>
    
    <h1>{champion.id}</h1>
    <p>{champion.blurb}</p>
    
    </>
}
 
export default ChampionDetailPage;