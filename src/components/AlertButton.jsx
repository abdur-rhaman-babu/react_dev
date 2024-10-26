 
/* eslint-disable react/prop-types */

const AlertButton = ({message, children}) => {
    const handleClick = () =>{
        alert(message)
    }
    return (
        <div>
            <button onClick={handleClick}>
                {children}
            </button>
        </div>
    );
};

export default AlertButton;