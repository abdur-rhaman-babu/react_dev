/* eslint-disable react/prop-types */
import Button from "./Button";

const PlayButton = ({movieName}) => {
    const handlePlayClick = () =>{
        alert(`Play ${movieName}`)
    }
    return (
        <Button onClick={handlePlayClick}>
            Play {movieName}
        </Button>
    );
};

export default PlayButton;