import React from "react";
import styles from './Appear.module.css';
import styled, { keyframes } from "styled-components";
const Appear = ({ children, timeout, fillmode, duration}) => {


    return (
        <Wrapper timeout={timeout} fillmode={fillmode} duration = {duration}>
            <div className={styles.body}>
                {children}
            </div>
        </Wrapper>
    );
}

const animation = keyframes`
100% {opacity: 1;}
0% {opacity: 0;}
`
const Wrapper = styled.span`
opacity: 0;
animation-name: ${animation};
animation-delay: ${({timeout}) => timeout}s;
animation-duration: ${({duration}) => duration}s;
animation-fill-mode: ${({fillmode}) => fillmode};
`
export default Appear;