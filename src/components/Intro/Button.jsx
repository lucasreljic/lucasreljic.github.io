import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from 'react-router-dom';
import styles from './Button.module.css'
const Button = () => {
    return (
        <Wrapper className={styles.body}>
            <div className={styles.border}>
            <Link className={styles.button} to="home"><h1 className={styles.text}>HomePage</h1></Link>
            </div>
        </Wrapper>
    )
    ;
}
// explains how to do transform https://github.com/ueeieiie/styled-transition-transform/blob/master/src/index.js
const animation = keyframes`
0% { opacity: 1; width: 80%; margin-top: 30px; margin-bottom: 30px; background: linear-gradient(0deg, #067a29 0%, #2626ff 35%, rgba(0, 212, 255, 1) 100%);}
50% { opacity: 0.6; width: 50%; margin-top: 10px; margin-bottom: 10px; background: linear-gradient(0deg, #0cc945 0%, #2626ff 35%, rgba(0, 212, 255, 1) 100%); }
100% { opacity: 1; width: 80%; margin-top: 30px; margin-bottom: 30px; background: linear-gradient(0deg, #008311 0%,  #2626ff 35%, rgba(0, 212, 255, 1) 100%);}
`
const Wrapper = styled.div`
    animation-name: ${animation};
    animation-delay: 1s;
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
`
export default Button;