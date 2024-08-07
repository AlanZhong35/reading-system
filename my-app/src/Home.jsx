import React, { useState } from 'react';
import ThreeScene from "./ThreeScene.jsx";
import {ReactTyped} from 'react-typed';

const Home = () => {

    return (
        <div style={{marginTop:"56px"}}>
            <h1>My name is Alan Zhong.</h1>
            <h2>
            I am a{' '}
            <ReactTyped
            strings={['Software Engineer', 'Machine Learning Enthusiast', 'Soccer Player', 'Musician']}
            typeSpeed={70}
            backSpeed={50}
            loop
            />
        </h2>
            <ThreeScene/>
            
        </div>
    );
};

export default Home;