import { useState } from "react";


const Send = () => {
    const [to, setTo] = useState('Siyam')
    const [message, setMessage] = useState('Hello')

    const handleFormSubmit = (e) =>{
        e.preventDefault()
        setTimeout(()=>{
            alert(`${to} send ${message} to you`)
        },2000)
    }
    return (
        <>
            <form onSubmit={handleFormSubmit}>
            <label>To: {' '}
                <select 
                value={to} 
                onChange={(e)=>setTo(e.target.value)}
                >
                    <option value="Siyam">Siyam</option>
                    <option value="Arafat">Arafat</option>
                </select>
            </label> <br /><br />
            <textarea
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            /> <br /> <br />
            <button type="submit">Send</button>
        </form>
        </>
    );
};

export default Send;