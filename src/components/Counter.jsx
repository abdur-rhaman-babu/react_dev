import { useState } from "react";

const Counter = () => {
    const [score, setScore] = useState(0)
    const increment = () =>{
        setScore(s => s + 1)
    }
    return (
        <div>
            <button onClick={()=> increment()}>+1</button>
            <button onClick={()=> {
                increment()
                increment()
                increment()
            }
            
            }>+3</button>
            <h1>Score: {score}</h1>
        </div>
    );
};

export default Counter;