import './App.css';
// eslint-disable-next-line 
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing  from './components/Landing'
import  Home from './components/Home'
import SearchBar from './components/SearchBar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path = '/' component = {Landing}/> 
        <Route exact path = '/home' component = {Home}/>
        {/* <Route exact path = '/home/?name=' component = {SearchBar}/> */}
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
