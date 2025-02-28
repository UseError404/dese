import React from 'react'
import './App.css'
import Greeting from "../components/Greeting.jsx";
import Counter from "../components/Counter.jsx";
import Goodbye from "../components/Goodbye.jsx";
import Welcome from "../components/Welcome.jsx";
import Form from "../components/Form.jsx";

function App() {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Greeting name={'Crab'}/>
            <Counter/>

            <div>
                {open ? <Welcome/> : <Goodbye/>}
                <button onClick={() => setOpen(!open)}>Switch</button>
            </div>

            <Form/>

        </>
    )
}

export default App
