import React from 'react';

function Form() {
    const [input, setInput] = React.useState('');
    const handleChange = (e) =>{
        setInput(e.target.value);
    }
    return (
        <div>
            <input type="text" value={input} onChange={handleChange}/>
            <button onClick={()=>console.log(input)}>Submit</button>
        </div>
    );
}

export default Form;