/* eslint-disable react/prop-types */
const Button = ({onClick, children}) => {
    return (
        <div>
            <button onClick={onClick}>
                {children}
            </button>
        </div>
    );
};

export default Button;