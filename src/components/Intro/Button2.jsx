import React from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "react-bootstrap";
import styles from './Button.module.css'
const Button2 = (props) => {
    return (
        <Wrapper className={styles.body} style={{  background: `linear-gradient(${props.color})` }}>
            <div className={styles.border}>
            <Button size="sm" className={styles.button} onClick={props.link}>{props.text}<p className={styles.text}>{props.children}</p></Button>
            </div>
        </Wrapper>
    )
    ;
}
// explains how to do transform https://github.com/ueeieiie/styled-transition-transform/blob/master/src/index.js
const animation = keyframes`
0% { opacity: 1; width: 100%;}
50% { opacity: 0.7; width: 90%;}
100% { opacity: 1; width: 100%;}
`
const Wrapper = styled.div`
    animation-name: ${animation};
    animation-delay: 1s;
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-iteration-count: 0;
`
export default Button2;