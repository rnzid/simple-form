import { Fragment } from 'react'; //ES6 module system
import './App.css';

import { Form } from './MyComponents/Form.jsx';
import Home from './Home';

import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './MyComponents/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Routes>
      <Route path="/" >
          <Route index element={<Home />} />
          <Route path="form" element={<Form />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
