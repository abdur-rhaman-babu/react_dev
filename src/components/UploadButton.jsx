 
import Button from "./Button";


const UploadButton = () => {

    return (
        <div>
            <Button onClick={()=>alert('uploding....!')}>
                Upload Image
            </Button>
        </div>
    );
};

export default UploadButton;