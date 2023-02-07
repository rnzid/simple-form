import { Fragment } from 'react'; //ES6 module system
import './App.css';
import {Button,SmallButton} from './Button.js';

function App() {
  return (
    <Fragment>
      <div>hello</div>
      <h1>Welcome</h1>
      <SmallButton title="Home"/>
      <Button title="Add New"/>
      <Button title="Edit"/>
      <Button title="Delete"/>
    </Fragment>
  );
}

export default App;
