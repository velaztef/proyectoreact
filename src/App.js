import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import  Navbar  from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';





function App() {

  return (
    <div className="App">
    <Navbar/>
    <ItemListContainer/>
    <ItemDetailContainer id={1} />
    </div>
  )
}

export default App;
