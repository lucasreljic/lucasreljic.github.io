import React from "react";
import styles from './Appear.module.css';
import styled, { keyframes } from "styled-components";
import arrow from '../../icons/arrow-down-3101.svg';
const Arrow = () => {


    return (
        <Wrapper>
            <img className={styles.arrow} src={arrow} alt="arrow"></img>
        </Wrapper>
    );
}

const animation = keyframes`
100% {margin-bottom: 10px;}
0% {margin-bottom: 0px;}
`
const Wrapper = styled.span`
opacity: 0;
animation-name: ${animation};
animation-delay: 0s;
animation-duration: infinite;
animation-fill-mode: forwards;
`
export default Arrow;
