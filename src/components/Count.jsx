import { useState } from "react";
const Count = () => {
    const [count, setCount] = useState(0)
    const handleClick = () =>{
      setCount(count + 1)
    }
    return (
        <div>
            <button onClick={handleClick}> count: {count}</button>  
        </div>
    );
};

export default Count;