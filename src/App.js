import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import  Navbar  from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import camisetas from '../src/img/camisetas.jpg'





function App() {

  return (
    <div className="App">
    <body>
    <Navbar/>
    </body>
    <img className="img_product" src={camisetas}/>
    <ItemListContainer/>
    
    </div>
  )
}

export default App;
