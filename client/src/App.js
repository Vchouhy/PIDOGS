import './App.css';
// eslint-disable-next-line 
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing  from './components/Landing'
import  Home from './components/Home'
import Form from './components/Form'
import Details from './components/Details'
import "./App.css"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path = '/' component = {Landing}/> 
        <Route exact path = '/home' component = {Home}/>
        <Route exact path = '/dogs/form' component = {Form}/>
        <Route path = '/home/:id' component = {Details}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
