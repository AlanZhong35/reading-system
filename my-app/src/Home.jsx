import React, { useState } from 'react';
import ThreeScene from "./ThreeScene.jsx";

const Home = () => {

    return (
        <div>
            <h1>Welcome Home</h1>
            <div  style={{ width: '100vw', height: '100vh'}} >
            <ThreeScene/>
            </div>
        </div>
    );
};

export default Home;