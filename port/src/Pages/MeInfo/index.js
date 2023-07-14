import { Container } from '@mui/material';
import React from 'react';
import ProfShot from '../../Images/ProfShot.jpg'


const MeInfoPage = () => {
    return (
        <>
            <Container>
            <h1> <img src= {ProfShot} alt="placeholder" width={150}/> </h1>
            <h1> About me</h1>
            <h2> Hi, I am Drew Senour and I am an up and coming fullstack developer! After taking a bootcamp in though Penn in March of 2023, I have been getting my feet wet with multiple languages and technologies to see what I can create!</h2>
            </Container>
            
        </>
    );
}

export default MeInfoPage