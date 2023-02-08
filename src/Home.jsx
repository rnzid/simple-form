import { Fragment, useState } from "react";
import { Button, SmallButton } from './MyComponents/Button.js';
import { Link } from 'react-router-dom';
const Home = (props) => {

    const [count, setCount] = useState(1);
    function increment() {
        setCount((prev) => {
            return prev + 1
        })
    }
    return (
        <Fragment>
            <div className="container-fluid">

                <h1>
                    {count}
                </h1>
                <button onClick={increment}>Click</button>


                {/* <Home title="Home Page"/> */}
                <SmallButton
                    title="Home"
                    color="red"
                />
                <Link to="/form">
                    <Button title="Add New" />
                </Link>
                <h2 style={{textAlign:"center"}}>User List</h2>
            </div>
        </Fragment>
    )
}

export default Home