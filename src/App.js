import React from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";


const App = () => {
    return <div className="app">
        <Header/>
        <div style={{"display":"flex" ,"marginTop":"65px"}}>
        <Sidebar />
        <Content />
        </div>
    </div>

};

export default App;