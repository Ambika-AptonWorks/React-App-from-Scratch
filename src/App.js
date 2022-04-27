import React from "react";
import Button from '@mui/material/Button';


const App = () => {
    const greetHandler=()=>{
        alert("Hello there,welcome!!!")
    }
    return <div>
        <center>
            <h1>Hello, World!</h1>
            <Button variant="contained" color="secondary" onClick={greetHandler}>Click here!!</Button>
        </center>
    </div>

};

export default App;