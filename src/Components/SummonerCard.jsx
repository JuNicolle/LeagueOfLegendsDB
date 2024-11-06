import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";

const SummonerCard = ({ summoner }) => {

    const navigate=useNavigate();
    const navigateTo = (id)=>{
        navigate("/summoner/"+id);
    }

    
    return <>

    <div onClick={() => {navigateTo(summoner.id)}}>

    <Card className="card" style={{width:"12rem"}}>
        <Card.Img variant="top" src={"https://ddragon.leagueoflegends.com/cdn/14.22.1/img/spell/"+ summoner.image.full } />
        <Card.Body>
          <Card.Title >{summoner.name}</Card.Title>
          <Card.Text>
            {summoner.description}
          </Card.Text>
        </Card.Body>
    </Card>

    </div>
    </>
}

export default SummonerCard;