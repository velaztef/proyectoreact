import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import  Navbar  from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




function App() {
  return (
    <div className="App">
    <body>
    <Navbar/>
    <ItemListContainer text = {'Nova Indumentaria'}/>
    </body>
    </div>
  )
}

export default App;
