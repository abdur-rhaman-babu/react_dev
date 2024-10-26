import { useState } from "react";

const TrafficLight = () => {
    const [walk, setWalk] = useState(false)
    const handleClick = () =>{
        setWalk(!walk)
        alert(walk ? 'Stop is next' : 'Walk is next');
    }

    return (
        <div>
            <button onClick={handleClick}>
                chane to {walk ? 'stop': 'walk'}
            </button>

            <h1 style={{color: walk ? 'green':'red'}}>{walk ? 'Walk':'Stop'}</h1>
        </div>
    );
};

export default TrafficLight;