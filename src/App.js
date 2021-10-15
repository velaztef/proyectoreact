import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import  Navbar  from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Productos from './Secciones/Productos';
import Home from './Secciones/Home';
import Contacto from './Secciones/Contacto';
import ItemList from './components/ItemList/ItemList';






function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>

        <Route  exact path='/productos/:id'>
          <Productos/>
        </Route>

        <Route  exact path='/productos'>
          <ItemListContainer/>
        </Route>
        
        <Route  exact path='/'>
          <Home/>
        </Route>
          
        <Route  exact path='/contacto'>
          <Contacto/>
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default App;
