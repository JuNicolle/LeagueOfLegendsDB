import { useEffect, useState } from "react";
import SummonersServices from "../Services/SummonersServices";
import SummonerCard from "../Components/SummonerCard";

const SummonersPage = () => {
    const [summoners, setSummoners] = useState({});

    const fetchSummoners = async () => {
        try{
            const response = await SummonersServices.getAllSummoners();
            setSummoners(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchSummoners();
    },[]);

    return <>
   
    <h1>Ca c'est la page Summoners</h1>
    
    {Object.entries(summoners).map((summoner) => {
        return <SummonerCard key={summoner.id}  summoner={summoner[1]}  />

    })}
    </>
}
 
export default SummonersPage;