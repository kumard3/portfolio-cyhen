import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import SideBar from './component/SideBar';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="app">
      <Router>        
        <Switch>  
          <Route path='/contact'>       
           <SideBar/>
            <Contact/>
            </Route>
            <Route path='/projects'>        
          <SideBar/>
           <Projects/>
            </Route>
          <Route path='/about'>        
          <SideBar/>
           <AboutUs/>
            </Route>
            <Route path='/'>
            <SideBar/>
            <Home/>
          </Route>
        </Switch>     
      </Router>
    </div>
  );
}

export default App;
