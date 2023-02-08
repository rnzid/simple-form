import { useState } from "react"

const Home = (props) => {

    const [count, setCount] = useState(1);
    function increment(){
        setCount((prev)=>{
            return prev+1
        })
    }
    return (
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={increment}>Click</button>
        </div>
    )
}

export default Home