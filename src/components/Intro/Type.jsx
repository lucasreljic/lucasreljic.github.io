import React from "react";
import { TypeAnimation } from 'react-type-animation';
import styled, { keyframes } from "styled-components";
const Type = ({children, speed, cursor, timeout, repeat, duration, fillmode}) => {


    return (
    <Wrapper timeout={timeout} duration={duration} fillmode={fillmode}>

    <TypeAnimation
    sequence = {[children]}
    wrapper = "span"
    speed={speed}
    cursor = {cursor}
    repeat={repeat}
    style={{color: 'white'}}
    > 
    </TypeAnimation>
    </Wrapper>
    );
}
const animation = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`

const Wrapper = styled.span`
opacity: 0;
animation-name: ${animation};
animation-delay: ${({timeout}) => timeout}s;
animation-duration: ${({duration}) => duration}s;
animation-fill-mode: ${({fillmode}) => fillmode};
`

export default Type;