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
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Header icon='/4830734.ico' name='Country Searcher' />
      <Router>
        <Switch>
          <Route path='/' exact children={<Home />} />
          <Route path='/country/:name' children={<Country />} />
          <Route path='/*' children={<div style={{ fontWeight: '700', height: '300px' }} className='text-[60px] text-center text-white pt-[26vh] App'>404 🤣💀</div>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;