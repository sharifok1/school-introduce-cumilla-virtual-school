import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import { BrowserRouter ,Switch ,Route} from 'react-router-dom';
import NoteFound404 from './component/NotFond404/NoteFound404';
import HomePage from './component/HomePage/HomePage';
import Services from './component/Services/Services';
import About from './component/About/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path ='/'>
          <HomePage></HomePage>
          </Route>
          <Route path="/Services">
            <Services></Services>
          </Route>
          <Route path='/About'>
            <About></About>
          </Route>
          <Route path = '*'>
            <NoteFound404></NoteFound404>
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
