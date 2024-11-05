import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChampionsServices from "../Services/ChampionsServices";
import ChampionCard from "../Components/ChampionCard";


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
                <div id="tipsSection">
             <h2>Conseils pour les alliés</h2>   
             {champion.allytips && champion.allytips.map((tip)=>{
                // Si champion.allytips existe alors on fait ce qui est dans le return
                return <p>{tip}</p>
             })}
             <h2>Quand vous avez {id} en face de vous</h2>   
             {champion.enemytips && champion.enemytips.map((tip)=>{
                // Si champion.allytips existe alors on fait ce qui est dans le return
                return <p>{tip}</p>
             })}
                </div>
        </div>
        <div className="detailCharacterRightPart">
            {/* <div className="passiveChampion">
            <h2>{champion.passive.name}</h2>
            {champion.passive &&
             <div> 
             <img src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/passive/"+champion.passive.image.full} alt="" />
             <p>{champion.passive.description}</p>
             </div>
             }
             </div> */}
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