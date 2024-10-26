 
import { useState } from "react";
import { sculptureList } from './data';
const Gellary = () => {
    const [index, setIndex] = useState(0)
    const [showMore, setShowMore] = useState(false)
    const hasIndex = index < sculptureList.length -1

    const handleNextClick = () =>{
        if ( hasIndex ){
            setIndex( index + 1)
        }else{
            setIndex(0)
        }
    }
    const handlePreviousClick = () =>{
        if ( index > 0 ){
            setIndex( index - 1)
        }else{
            setIndex(sculptureList.length - 1)
        }
    }



    const handleShowMore = () =>{
        setShowMore(!showMore)
    }

    let sculpture = sculptureList[index]
    return (
        <div>
            <button onClick={handlePreviousClick}>Previous</button>
            <button onClick={handleNextClick}>next</button>
            <h1>{sculpture.name}</h1>
            <h3>({index + 1} of {sculptureList.length})</h3>
            <button onClick={handleShowMore}>
            {showMore ? 'Hide' : 'Show'} Details </button>
            <br /> <br />
            <h3>{showMore && sculpture.description}</h3>
            <img src={sculpture.url} alt="" width={200} />
        </div>
    );
};

export default Gellary;