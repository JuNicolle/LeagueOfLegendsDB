import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";

const ItemCard = ({ item }) => {

    const navigate=useNavigate();
    const navigateTo = (name)=>{
        navigate("/item/"+name, {state: {item : item}});
    }

    
    return <>

    <div onClick={() => {navigateTo(item.name)}}>

    <Card className="card" style={{width:"12rem"}}>
        <Card.Img variant="top" src={'https://ddragon.leagueoflegends.com/cdn/14.21.1/img/item/'+item.image.full } />
        <Card.Body>
          <Card.Title >{item.name}</Card.Title>
          <Card.Text>
            {item.plaintext}
          </Card.Text>
        </Card.Body>
    </Card>

    </div>
    </>
}

export default ItemCard;