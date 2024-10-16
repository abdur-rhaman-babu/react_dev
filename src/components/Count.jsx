/* eslint-disable react/prop-types */
const Count = ({count, onClick}) => {

    return (
        <div>
            <button onClick={onClick}> count: {count}</button>  
        </div>
    );
};

export default Count;