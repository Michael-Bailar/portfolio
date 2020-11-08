import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Orbitron', sans-serif;
        max-width: 100%;
        max-height: 100%;
        --color-text: white;
        --color-textSecondary: grey;
        --color-bgColor: #00000d;
        --color-bgColorSecondary: #10223e;
    }
`

const App = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return(
        <Router>
        <GlobalStyle />
            <Navbar toggle={ toggle } />
            <Sidebar  isOpen={ isOpen } toggle={ toggle }/>
            <Switch>
                <Route path='/' exact component={ Home } />
                <Route path='/about' exact component={ About } />
                <Route path='/projects' exact component={ Projects } />
                <Route path='/resume' exact component={ Resume } />
            </Switch>
        </Router>
    )
}

export default App