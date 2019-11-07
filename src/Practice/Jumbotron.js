import React from 'react'
import {Jumbotron as jumbo, Container} from 'react-bootstrap'
import styled from 'styled-components'

const styles = styled.div``;

export const Jumbotron = ()=>(
    <div className="about-section">
        <Container>

            <div className="logo">
            <a href="#"><img src="assets/logo.png" /></a>
                </div>
           
            <h2>Kickstart  Your  Fundraising w/f  Artificial  Intelligence</h2>
        </Container>
        </div>
)
