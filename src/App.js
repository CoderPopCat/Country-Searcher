import './App.css';
import Country from './components/Country';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <>
      <Header icon='/4830734.ico' name='Country Searcher' />
      <Router>
        <Switch>
          <Route path='/' exact children={<Home />} />
          <Route path='/country/:name' children={<Country />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
