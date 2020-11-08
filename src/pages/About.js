import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'


// STYLES //
const AboutContainer = styled.div`
  max-height: 100vh;
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #00000d;
  color: #fff;
  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }
  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;
const AboutButton = styled.button`
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
`;

// COMPONENT //
const About = () => {
  return (
    <AboutContainer>
        <h1>About Me</h1>
        <p>A simple pitch about how amazing I am</p>
        <Link to='projects'>
            <AboutButton>My Projects</AboutButton>
        </Link>
    </AboutContainer>
  );
};

export default About;