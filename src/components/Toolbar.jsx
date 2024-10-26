 
/* eslint-disable react/prop-types */
import Button from "./Button";


const Toolbar = ({onPlayMovie, onUploadImage}) => {
    return (
        <div>
            <Button onClick={onPlayMovie}>Play</Button>
            <Button onClick={onUploadImage}>Upload</Button>
            {/* <AlertButton message = 'Playing'>Play Movie</AlertButton>
            <AlertButton message = 'Uploading...!'>Upload Image</AlertButton> */}
            {/* <PlayButton movieName = 'This is our country'/>
            <UploadButton/> */}
        </div>
    );
};

export default Toolbar;