import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


const ChampionCard = ({champion}) => {
    
    // const navigate=useNavigate();
    // const navigateToChampion = (id)=>{
    //     navigate("/champion/"+id);
    // }
    console.log(champion);
    return <>
    
    <div>
    <Card className="card" style={{width:"13rem"}}>
        <Card.Img variant="top" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + champion.id + "_0.jpg"} />
        <Card.Body>
          <Card.Title >{champion.name}</Card.Title>
          <Card.Text>
            {champion.title}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small ></small>
        </Card.Footer>
    </Card>
    </div>
    
    
    
    </>
}
 
export default ChampionCard;