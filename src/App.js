import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import  Navbar  from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'





function App() {

  return (
    <div className="App">
    <Navbar/>
    <ItemListContainer/>
    
    </div>
  )
}

export default App;
