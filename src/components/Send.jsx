import { useState } from "react";

const Send = () => {
    const [to, setTo] = useState('Alice')
    const [message, setMessage] = useState('Hello')

    const handleSubmit = (e) =>{
        e.preventDefault()
        setTimeout(()=>{
            alert(`You said ${message} to ${to}`)
        },2000)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> To:
                <select value={to} onChange={(e)=>setTo(e.target.value)}>
                    <option value="Alice">Alice</option>
                    <option value="Bob">Bob</option>
                </select>
            </label>
            <br /> <br />
            <textarea 
            placeholder="message" 
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            />
            <br /> <br />
            <button type="submit">send</button>
        </form>
    );
};

export default Send;