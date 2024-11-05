import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBarRefonte from './Components/NavBarRefonte';
import LorePage from './Pages/LorePage';
import ChampionsPage from './Pages/ChampionsPage';
import RegionsPage from './Pages/RegionsPage';
import ChampionDetailPage from './Pages/ChampionDetailPage';
import ItemsPage from './Pages/ItemsPage';
import ItemDetailPage from './Pages/ItemDetailPage';

function App() {


  return <>
    
    <BrowserRouter>
    <NavBarRefonte/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='LorePage' element={<LorePage/>}/>
          <Route path='ChampionsPage' element={<ChampionsPage/>}/>
          <Route path='ItemsPage' element={<ItemsPage/>}/>
          <Route path='RegionsPage' element={<RegionsPage/>}/>
          <Route path='champion/:id' element={<ChampionDetailPage/>}/>
          <Route path='item/:name' element={<ItemDetailPage/>}/>
        </Routes>
     </BrowserRouter>
    </>
  
}

export default App
