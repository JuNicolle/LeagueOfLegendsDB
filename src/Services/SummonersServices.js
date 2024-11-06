import axios from "axios";

function getAllSummoners(){
    return axios.get(" https://ddragon.leagueoflegends.com/cdn/14.22.1/data/fr_FR/summoner.json")
}

function getSummonerById(name){
    return axios.get("https://ddragon.leagueoflegends.com/cdn/14.22.1/data/fr_FR/summoner/"+name+".json")
}

export default {getAllSummoners, getSummonerById}