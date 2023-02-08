import { Fragment } from 'react'; //ES6 module system
import './App.css';
import {Button,SmallButton} from './MyComponents/Button.js';
import { Form } from './MyComponents/Form.jsx';
import Home from './Home';
import Navbar from './MyComponents/Navbar.jsx';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Home title="Home Page"/>
      <h1 className='header'>Welcome</h1>
      <SmallButton 
      title="Home"
      color="red"
      />
      <Button title="Add New"/>
      <Form/>
    </Fragment>
  );
}

export default App;
