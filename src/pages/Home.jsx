import React from "react";
import styles from "./Home.module.css";
import Text from "../components/Elements/Text/Text";
import "react-slideshow-image/dist/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import Blocks from "../components/Elements/Blocks/Blocks";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import SkillBox from "../components/Elements/Skills/SkillBox";
import Appear from "../components/Intro/Appear";
import { TypeAnimation } from "react-type-animation";
import { Slide, Fade, JackInTheBox, Roll, Zoom, Bounce } from "react-awesome-reveal";

// Photos/logos
import arrow from "../icons/arrow-down-3101.svg";
import jsonPhoto from "./../icons/json1.png";
import ReactSVG from "./../icons/react.svg";
import frcPhoto from "./../icons/FRC-Vertical.png";
import CppPhoto from "./../icons/C++_Logo.png";
import rocketryPhoto from "./../icons/rocketry.png";
import uwaterlooPhoto from "./../icons/University_of_Waterloo.svg.png";

//images
import robot1a from "../components/Elements/Slide/photos/1AProject/20221201_192840.jpg";
import openmv from "../components/Elements/Slide/photos/FRC/IMG_3426.JPG";
import toyota from "../components/Elements/Slide/photos/ToyotaChallenge/Capture1.PNG";
import uoftHacks from "../components/Elements/Slide/photos/UofTHacks/original.jpg";
import frc4627 from "../components/Elements/Slide/photos/FRC/2022_Practice.jpg";
import plant from "../components/Elements/Slide/photos/plantWaterer/IMG_3518.jpeg";
import sanitizer from "../components/Elements/Slide/photos/handSanitizer/IMG_2949.jpeg";
import piLaptop from "../components/Elements/Slide/photos/RPiLaptop/IMG_6924.jpeg";
import planes from "../components/Elements/Slide/photos/RCplanes/latest1.jpeg";
import gokart from "../components/Elements/Slide/photos/gokart/IMG_1418.jpeg";

const Home = () => {
  return (
    <Parallax
      pages={5}
      style={{
        top: "67px",
        left: "0",
        height: "-moz-calc(100% - 67px)",
        /* Webkit */
        height: "-webkit-calc(100% - 67px)",
        /* Opera */
        height: "-o-calc(100% - 67px)",
        /* Standard */
        height: "calc(100% - 67px)",
        background:
          "#000000" /*'linear-gradient(to left top, #051937, #004d7a, #008793, #00bf72, #a8eb12)'*/,
      }}
    >
      <Container fluid>
        <ParallaxLayer offset={0} speed={2}>
          <TypeAnimation
            sequence={[
              800,
              "Who",
              500,
              "Who am",
              500,
              "Who am I",
              500,
              "Who am I?",
              500,
              () => {},
            ]}
            wrapper="h1"
            speed={1}
            cursor={false}
            className={styles.mainHeader}
            repeat={false}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.4}>
          <Row md={3} sm={1} xs={1}>
            <Col>
              <br></br>
              <SkillBox width="60%" url={rocketryPhoto}></SkillBox>
            </Col>
            <Col>
              <SkillBox width="30%" url={uwaterlooPhoto}></SkillBox>
            </Col>
            <Col>
              <SkillBox width="37%" url={frcPhoto}></SkillBox>
            </Col>
          </Row>
        </ParallaxLayer>
        <ParallaxLayer offset={0.18} speed={1}>
          <Fade delay={4000} damping={1e-1} triggerOnce={true}>
            <Text
              style={{
                fontSize: "1.1rem",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
              }}
            >
              My name is Lucas Reljic-Dumont, I am currently 19 years old and
              pursuing a BASc in Mechatronics Engineering at the University of
              Waterloo. Currently in my first year. I have a passion for
              mechanical and software projects as evident through the various
              projects I have accomplished over the years, some of which are
              visible on this website. Many of my experiences prior to
              university guided me towards pursuing an Engineering degree.
            </Text>
          </Fade>
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={-0.1}>
          <Appear timeout={4} fillmode={"forwards"} duration={3}>
            <img className={styles.arrow} src={arrow} alt="arrow"></img>
          </Appear>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1.5} style={{ pointerEvents: "none" }}>
          <Row md={2} sm={1} xs={1}>
            <Col>
              <Slide delay={100} duration={2000}>
                <SkillBox
                  header="3 YEARS"
                  width="6rem"
                  url={"https://www.svgrepo.com/show/184143/java.svg"}
                >
                  Java
                </SkillBox>
              </Slide>
            </Col>
            <Col>
              <Slide direction="right" delay={800} duration={3000}>
                <Text>
                  During my five-year involvement in FRC, Java was the language
                  for programming the robots. This extensive hands-on experience
                  enabled me to gain a deep understanding of Java's syntax,
                  features, and best practices. Applying Java in real-world FRC
                  scenarios enhanced my problem-solving skills and enabled me to
                  develop robust, efficient, and reliable solutions to complex
                  challenges.
                </Text>
              </Slide>
            </Col>
            <Col>
              <Slide direction="left" delay={100} duration={2000}>
                <SkillBox
                  header="2 YEARS"
                  width="6rem"
                  url={
                    "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                  }
                >
                  Python
                </SkillBox>
              </Slide>
            </Col>
            <Col>
              <Slide direction="right" delay={800} duration={3000}>
                <Text>
                  As a part of FRC, I gained extensive experience in Python
                  programming, specifically in vision systems. Utilizing
                  Python's libraries and tools, I implemented efficient
                  solutions for image processing and analysis. This hands-on
                  experience enhanced my proficiency in Python's syntax, data
                  structures, and built-in functions, which I further expanded
                  through experiences like the Toyota Challenge.
                </Text>
              </Slide>
            </Col>
            <Col>
              <Slide delay={100} duration={2000}>
                <SkillBox header="2 YEARS" width="5.7rem" url={jsonPhoto}>
                  JSON
                </SkillBox>
              </Slide>
            </Col>
            <Col>
              <Slide direction="right" delay={800} duration={3000}>
                <Text>
                  I gained valuable experience working with JSON as well during
                  my time in FRC, where I focused on creating a seamless
                  pipeline between Python and Java. It involved effectively
                  handling and manipulating JSON strings to facilitate data
                  exchange between the languages. Through this, I developed a
                  strong understanding of JSON syntax and best practices,
                  enabling me to establish efficient communication channels
                  between separate codebases.
                </Text>
              </Slide>
            </Col>
            <Col>
              <Slide direction="left" delay={100} duration={2000}>
                <SkillBox header="6 MONTHS" width="5.5rem" url={CppPhoto}>
                  C++
                </SkillBox>
              </Slide>
            </Col>
            <Col>
              <Slide direction="right" delay={800} duration={3000}>
                <Text>
                  In my engineering program, I gained extensive knowledge of the
                  C++ programming language, achieving top marks in my
                  programming classes. I also have hands-on experience with
                  Arduino boards, utilizing C++ to program and control
                  electronic systems. This practical application of C++ through
                  Arduino projects has strengthened my proficiency in the
                  language and working with hardware.
                </Text>
              </Slide>
            </Col>
            <Col>
              <JackInTheBox duration={2000}>
                <SkillBox
                  className={styles.Applogo}
                  header="3 MONTH"
                  width="10rem"
                  url={ReactSVG}
                >
                  React JS
                </SkillBox>
              </JackInTheBox>
            </Col>
            <Col>
              <Bounce delay={800} duration={2000}>
                <Text>
                  Through my involvement in Waterloo Rocketry, I gained valuable
                  experience in React, learning its syntax, styles, and various
                  components. Working on projects like the Rocketry website and
                  this current website has significantly enhanced my Javascript
                  skills and provided me with a solid foundation in React.
                </Text>
              </Bounce>
            </Col>
          </Row>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1}>
          <h1 className={styles.gallery}>CLICK ON PROJECTS BELOW</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={2} style={{ paddingTop: "0px" }}>
          <Container className={styles.containerFluid} fluid>
            <Row xxl={4} lg={3} md={2} sm={1} xs={1}>
              <Col>
                <Blocks
                  link="/#/1afinalproject"
                  disabled={true}
                  photo={robot1a}
                >
                  Mechatronics 1A project
                </Blocks>
              </Col>
              <Col>
                <Blocks link="/#/openmv" photo={openmv}>
                  OpenMV Strategic Color Tracking
                </Blocks>
              </Col>
              <Col>
                <Blocks link="/#/toyotainnovation" photo={toyota}>
                  Toyota Innovation Challenge
                </Blocks>
              </Col>
              <Col>
                <Blocks link="/#/UofTHacks" photo={uoftHacks}>
                  UofT Hackathon X
                </Blocks>
              </Col>
              <Col>
                <Blocks link="/#/frc4627" photo={frc4627}>
                  FRC 4627 2022 Competition Robot
                </Blocks>
              </Col>
              <Col>
                <Blocks link="/#/plant" photo={plant}>
                  Automatic Plant Watering
                </Blocks>
              </Col>
              <Col>
                <Blocks link="/#/sanitizer" photo={sanitizer}>
                  Hand Sanitizer
                </Blocks>
              </Col>
              <Col>
                <Blocks link="/#/RPilaptop" photo={piLaptop}>
                  Raspberry Pi Laptop
                </Blocks>
              </Col>
              <Col>
                <Blocks link="/#/gokart" photo={gokart}>
                  Electric Gokart
                </Blocks>
              </Col>
              <Col>
                <Blocks link="/#/rcplanes" photo={planes}>
                  RC Planes
                </Blocks>
              </Col>
            </Row>
          </Container>
        </ParallaxLayer>
      </Container>
    </Parallax>
  );
};

export default Home;
