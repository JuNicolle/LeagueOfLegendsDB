import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBarRefonte = () => {



    return <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container className='navBar'>
                <Navbar.Brand href="#home">League Of Legends</Navbar.Brand>
                <Nav className="me-auto">
                    <Link className="linkNavBar" to={"/"} href="#action1">Accueil</Link>
                    <Link className="linkNavBar" to={"LorePage"} href="#action2">Histoire</Link>
                    <Link className="linkNavBar" to={"/ChampionsPage"} href="#action3">Champions</Link>
                    <Link className="linkNavBar" to={"/ItemsPage"} href="#action4">Items</Link>
                    <Link className="linkNavBar" to={"/SummonersPage"} href="#action4">Summoners</Link>  
                </Nav>
            </Container>
        </Navbar>
    </>
}

export default NavBarRefonte;