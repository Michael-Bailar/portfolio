import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import bgImg from '../img/scifiBg.jpg'

const HomeContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2)), url(${bgImg});
    height: 100vh;
    background-position: center;
    background-size: cover;
`
const HomeContent = styled.div`
    height: 100vh;
    max-height: 100%;
    width: 100vw;
    padding: 0rem calc((100vw-1300px)/2);
`
const HomeItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 10rem 2rem 2rem 4rem;
    width: 650px;
    color: var(--color-text);
    line-height: 1;
    font-weight: bold;

    @media screen and (max-width: 650 px) {
        width: 100%
    }
`
const HomeH1 = styled.h1`
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-botton: 1rem;
    box-shadow: 3px 5px #fff;
    letter-spacing: 3px;
    text-transform: uppercase;
`
const HomeP = styled.p`
    font-size: clamp(1rem, 2.5vw, 2rem);
    margin-bottom: 2rem;
    margin-top: 1.5rem;
`
const HomeBtn = styled.button`
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border: none;
    background: #10223e;
    color: lightgrey;

    &:hover {
        background: grey;
        cursor: pointer;
        color: #10223e;
    }
`
 

const Home = () => {
    return(
        <HomeContainer>
            <HomeContent>
                <HomeItems>
                    <HomeH1>Michael Bailar</HomeH1>
                    <HomeP>
                    “We are all very anxious to be understood, but there is one thing much more necessary, to understand other people.”<br></br>― George MacDonald</HomeP>
                    <Link to='/about'>
                        <HomeBtn>About Me</HomeBtn>
                    </Link>
                </HomeItems>
            </HomeContent>
        </HomeContainer>
    )
}

export default Home