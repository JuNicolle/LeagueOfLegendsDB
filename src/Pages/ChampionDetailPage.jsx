import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChampionsServices from "../Services/ChampionsServices";
import ChampionCard from "../Components/ChampionCard";
import { Container } from "react-bootstrap";






const ChampionDetailPage = () => {
    const {id} = useParams();
    const [champion, SetChampion] = useState([]);
    const [spellsChampion, setSpellsChampion] = useState([]);
    
    

    const fetchChampionById = async ()=>{
        try {
            const response = await ChampionsServices.getChampionById(id);
            SetChampion(Object.entries(response.data.data)[0][1]);
            console.log(Object.entries(response.data.data)[0][1]);
            
        } catch (error) {
            console.log(error);
        }
    }

 


    useEffect(()=>{
        fetchChampionById();
    },[]);
    
    
    return <>

    <div className="bodyBody">
    <div className="detailCharacter">
        <div className="detailCharacterLeftPart">
            <h1>Détails de {id}</h1>
            <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`} alt="" />
             <p>{champion.lore}</p>    
        </div>
        <div className="detailCharacterRightPart">
            <div>
                {champion.spells && champion.spells.map((spell, index) => {
                return (
                    <div key={index}>
                        <div className="spellName">
                         <img style={{width:"3rem", height:"3rem"}}src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/spell/${spell.image.full}`} alt="" />
                        <h3>{spell.name}</h3>
                        </div>
                        
                        <p>{spell.description}</p>
                    </div>
                
                );
                        
                })}
            </div>
        </div>
    </div >

    </div>
    
    </>
}
 
export default ChampionDetailPage;