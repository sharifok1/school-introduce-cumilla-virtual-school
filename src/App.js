
import './App.css';
import Header from './component/Header/Header';
import { BrowserRouter as Router,Switch ,Route} from 'react-router-dom';
import NoteFound404 from './component/NotFond404/NoteFound404';
import HomePage from './component/HomePage/HomePage';
import Services from './component/Services/Services';
import About from './component/About/About';
import Teachers from './component/Teachers/Teachers';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path ='/'>
          <HomePage></HomePage>
          </Route>
          <Route path="/Services">
            <Services></Services>
          </Route>
          <Route path="/Teachers">
            <Teachers></Teachers>
          </Route>
          <Route path='/About'>
            <About></About>
          </Route>
          <Route path = '*'>
            <NoteFound404></NoteFound404>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
