import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom'//for routes with rename (as Router), plus imports

import Usuarios from './components/Usuarios';
import AdicionarUsuario from './components/AdicionarUsuario';
import Home from './components/home';

function App() {
  return (
    <Router>{/*for routes*/}
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>Início</NavLink>{/*same function of tag <a> and to same function of href*/}
              </li>
              <li>
                <NavLink to="/usuarios">Usuários Cadastrados</NavLink>
              </li>
              <li>
                <NavLink to="/adicionar">Adicionar Usuário</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/usuarios">
              <Usuarios />
            </Route>
            <Route path="/adicionar">
              <AdicionarUsuario />
            </Route>
            <Route path="/" exact>{/*exact for exactement the route*/}
              <Home />
            </Route>
            <Route>
              <PaginaNaoEncontrada />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

function PaginaNaoEncontrada(){
  return <>
    <h1>404</h1>
    <p>Página não encontrada!</p>
  </>
}

export default App;
