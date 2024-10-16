import { useState } from "react";
import Count from "./components/Count";

const App = () => {
const [count, setCount] = useState(0)
const handleClick = () =>{
  setCount(count + 1)
}
  return (
    <div>
        <Count count = {count} onClick = {handleClick}/>
        <Count count = {count} onClick = {handleClick}/>
    </div>
  )
};

export default App;