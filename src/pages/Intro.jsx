import React from "react";
import "react-slideshow-image/dist/styles.css";
import Type from "../components/Intro/Type";

import Appear from "../components/Intro/Appear";
import Button2 from "../components/Intro/Button2";
import styles from "./Intro.module.css";
import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  return (
    <div className={styles.body}>
      <div className={styles.start}>
        C:\Easter\Egg\Portfolio&gt;
        <Type
          cursor={false}
          speed={1}
          repeat={0}
          duration={0.1}
          fillmode={"forwards"}
        >
          npm start
        </Type>
        <Type
          cursor={true}
          speed={1}
          repeat={0}
          duration={2}
          fillmode={"backwards"}
        ></Type>
      </div>
      <br></br>
      <br></br>
      <Appear timeout={3} fillmode={"forwards"}>
        &gt; portfolio-react@0.1.0 start<br></br>
        &gt; react-scripts start
        <br></br>
        <Type
          timeout={4}
          cursor={true}
          speed={1}
          repeat={0}
          duration={1}
          fillmode={"backwards"}
        ></Type>
      </Appear>
      <Appear timeout={5} fillmode={"backwards"} duration={2}>
        Creating Portfolio
        <TypeAnimation
          sequence={[100, " -", 100, " \\", 100, " |", 100, " /", () => {}]}
          wrapper="p"
          speed={100}
          cursor={false}
          repeat={Infinity}
          style={{ color: "white" }}
        />
      </Appear>
      <br></br>
      <br></br>
      <Appear timeout={7} fillmode={"forwards"} duration={2}>
        <a href="/">
          <Button2 link="/" text="Homepage"></Button2>
        </a>
      </Appear>
    </div>
  );
};
export default Intro;
