import React from "react";
import styles from "./Home.module.css";
import Text from "../components/Elements/Text/Text";
import "react-slideshow-image/dist/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import Blocks from "../components/Elements/Blocks/Blocks";
import SkillBox from "../components/Elements/Skills/SkillBox";
import IconBox from "../components/Elements/Icons/IconBox";
import { useState, useEffect } from "react";
import {
  Slide,
  Fade,
  JackInTheBox,
  Bounce,
  AttentionSeeker,
} from "react-awesome-reveal";

// Photos/logos
import arrow from "../icons/arrow-down-3101.svg";
import jsonPhoto from "./../icons/json1.png";
import ReactSVG from "./../icons/react.svg";
import frcPhoto from "./../icons/FRC-Vertical.png";
import CppPhoto from "./../icons/C++_Logo.png";
import rocketryPhoto from "./../icons/rocketry.png";
import uwaterlooPhoto from "./../icons/University_of_Waterloo.svg.png";
import goodlabsPhoto from "./../icons/goodlabs.png";

//images
import robot1a from "../components/Elements/Slide/photos/1AProject/20221201_192840.jpg";
import openmv from "../components/Elements/Slide/photos/FRC/IMG_3426.JPG";
import toyota from "../components/Elements/Slide/photos/ToyotaChallenge/Capture1.PNG";
import toyota2023 from "../components/Elements/Slide/photos/ToyotaChallenge/output2crop.png";
import uoftHacks from "../components/Elements/Slide/photos/UofTHacks/original.jpg";
import frc4627 from "../components/Elements/Slide/photos/FRC/2022_Practice.jpg";
import plant from "../components/Elements/Slide/photos/plantWaterer/IMG_3518.jpeg";
import sanitizer from "../components/Elements/Slide/photos/handSanitizer/IMG_2949.jpeg";
import piLaptop from "../components/Elements/Slide/photos/RPiLaptop/IMG_6924.jpeg";
import planes from "../components/Elements/Slide/photos/RCplanes/latest1.jpeg";
import gokart from "../components/Elements/Slide/photos/gokart/IMG_1418.jpeg";
import Appear from "../components/Intro/Appear";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClickScroll = () => {
    const element = document.getElementById("skills");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Container fluid className={styles.container}>
      <Appear timeout={0.1} fillmode={"forwards"}>
        <h1 className={styles.mainHeader}>
          <Fade cascade damping={1e-1} triggerOnce={true} duration={2000}>
            Who Am I?
          </Fade>
        </h1>
        <Row xl={4} sm={2} xs={2}>
          <Fade triggerOnce={true} duration={1000} delay={2000} style={{ opacity: isVisible ? 0 : 0 }}>
            <Col>
              <AttentionSeeker effect="pulse" delay={2500} duration={1500}>
                <IconBox
                  className={styles.goodlabsIcon}
                  url={goodlabsPhoto}
                ></IconBox>
              </AttentionSeeker>
            </Col>
            <Col>
              <AttentionSeeker effect="pulse" delay={3500} duration={1500}>
                <IconBox
                  className={styles.rocketryIcon}
                  url={rocketryPhoto}
                ></IconBox>
              </AttentionSeeker>
            </Col>
            <Col>
              <AttentionSeeker effect="pulse" delay={4500} duration={1500}>
                <IconBox
                  className={styles.uwaterlooIcon}
                  url={uwaterlooPhoto}
                ></IconBox>
              </AttentionSeeker>
            </Col>
            <Col>
              <AttentionSeeker effect="pulse" delay={5500} duration={1500}>
                <IconBox className={styles.frcIcon} url={frcPhoto}></IconBox>
              </AttentionSeeker>
            </Col>
          </Fade>
        </Row>
        <Fade
          delay={4000}
          damping={1e-1}
          triggerOnce={true}
          style={{ opacity: isVisible ? 0 : 1 }}
        >
          <Text
            className={styles.title}
            style={{
              textShadow:
                "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
            }}
          >
            My name is Lucas Reljic-Dumont, I am currently 19 years old and
            pursuing a BASc in Mechatronics Engineering at the University of
            Waterloo. Currently in my co-op term with GoodLabs Studio where I am designing, prototyping and programming a bipedal robot. I have a passion for
            mechanical and software projects as evident through the various
            projects I have accomplished over the years, some of which are
            visible on this website. Many of my experiences prior to university
            guided me towards pursuing an Engineering degree.
          </Text>
        </Fade>
        <Slide delay={4500} duration={1000} direction="down" triggerOnce={true}>
          <Fade delay={4000} duration={3000} triggerOnce={true} style={{ opacity: isVisible ? 0 : 0 }}>
            <img
              onClick={handleClickScroll}
              className={styles.arrow}
              src={arrow}
              alt="arrow"
            ></img>
          </Fade>
        </Slide>
      </Appear>
      <Row  id="skills"  md={2} sm={1} xs={1}>
        <Col>
          <Fade
            fraction={0}
            delay={0}
            duration={2000}
            style={{ opacity: isVisible ? 0 : 1 }}
          >
            <Slide delay={500} duration={2000} triggerOnce={true}>
              <SkillBox
                header="3 YEARS"
                className={styles.javaIcon}
                url={"https://www.svgrepo.com/show/184143/java.svg"}
              >
                Java
              </SkillBox>
            </Slide>
          </Fade>
        </Col>
        <Col className={styles.skillText}>
        <Fade
            delay={0}
            duration={2000}
            style={{ opacity: isVisible ? 0 : 0 }}
          >
          <Slide
            direction="right"
            delay={800}
            duration={3000}
            triggerOnce={true}
          >
            <Text style={{ fontSize: "1.2rem" }}>
              During my five-year involvement in FRC, Java was the language for
              programming the robots. This extensive hands-on experience enabled
              me to gain a deep understanding of Java's syntax, features, and
              best practices. Applying Java in real-world FRC scenarios enhanced
              my problem-solving skills and enabled me to develop robust,
              efficient, and reliable solutions to complex challenges.
            </Text>
          </Slide>
          </Fade>
        </Col>
        <Col>
          <Fade
            delay={0}
            duration={2000}
            style={{ opacity: isVisible ? 0 : 0 }}
          >
            <Slide
              direction="left"
              delay={100}
              duration={2000}
              triggerOnce={true}
            >
              <SkillBox
                header="2 YEARS"
                className={styles.pythonIcon}
                url={
                  "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                }
              >
                Python
              </SkillBox>
            </Slide>
          </Fade>
        </Col>
        <Col className={styles.skillText}>
        <Fade
            delay={0}
            duration={2000}
            style={{ opacity: isVisible ? 0 : 0 }}
          >
          <Slide
            direction="right"
            delay={800}
            duration={3000}
            triggerOnce={true}
          >
            <Text style={{ fontSize: "1.2rem" }}>
              As a part of FRC, I gained extensive experience in Python
              programming, specifically in vision systems. Utilizing Python's
              libraries and tools, I implemented efficient solutions for image
              processing and analysis. This hands-on experience enhanced my
              proficiency in Python's syntax, data structures, and built-in
              functions, which I further expanded through experiences like the
              Toyota Challenge.
            </Text>
          </Slide>
          </Fade>
        </Col>
        <Col>
          <Fade
            delay={0}
            duration={2000}
            style={{ opacity: isVisible ? 0 : 1 }}
          >
            <Slide delay={100} duration={2000} triggerOnce={true}>
              <SkillBox
                header="2 YEARS"
                className={styles.jsonIcon}
                url={jsonPhoto}
              >
                JSON
              </SkillBox>
            </Slide>
          </Fade>
        </Col>
        <Col className={styles.skillText}>
        <Fade
            delay={0}
            duration={2000}
            style={{ opacity: isVisible ? 0 : 0 }}
          >
          <Slide
            direction="right"
            delay={800}
            duration={3000}
            triggerOnce={true}
          >
            <Text style={{ fontSize: "1.2rem" }}>
              I gained valuable experience working with JSON as well during my
              time in FRC, where I focused on creating a seamless pipeline
              between Python and Java. It involved effectively handling and
              manipulating JSON strings to facilitate data exchange between the
              languages. Through this, I developed a strong understanding of
              JSON syntax and best practices, enabling me to establish efficient
              communication channels between separate codebases.
            </Text>
          </Slide>
          </Fade>
        </Col>
        <Col>
          <Fade
            delay={0}
            duration={2000}
            style={{ opacity: isVisible ? 0 : 1 }}
          >
            <Slide
              direction="left"
              delay={100}
              duration={2000}
              triggerOnce={true}
            >
              <SkillBox
                header="6 MONTHS"
                className={styles.cppIcon}
                url={CppPhoto}
              >
                C++
              </SkillBox>
            </Slide>
          </Fade>
        </Col>
        <Col className={styles.skillText}>
        <Fade
            delay={0}
            duration={2000}
            style={{ opacity: isVisible ? 0 : 0 }}
          >
          <Slide
            direction="right"
            delay={800}
            duration={3000}
            triggerOnce={true}
          >
            <Text style={{ fontSize: "1.2rem" }}>
              In my engineering program, I gained extensive knowledge of the C++
              programming language, achieving top marks in my programming
              classes. I also have hands-on experience with Arduino boards,
              utilizing C++ to program and control electronic systems. This
              practical application of C++ through Arduino projects has
              strengthened my proficiency in the language and working with
              hardware.
            </Text>
          </Slide>
          </Fade>
        </Col>
        <Col>
          <Fade
            delay={0}
            duration={2000}
            style={{ opacity: isVisible ? 0 : 1 }}
          >
            <JackInTheBox delay={800} duration={2000} triggerOnce={true}>
              <SkillBox
                className={styles.Applogo}
                header="3 MONTH"
                url={ReactSVG}
              >
                React JS
              </SkillBox>
            </JackInTheBox>
          </Fade>
        </Col>
        <Col className={styles.skillText}>
        <Fade
            delay={0}
            duration={2000}
            style={{ opacity: isVisible ? 0 : 0 }}
          >
          <Bounce delay={800} duration={2000} triggerOnce={true}>
            <Text style={{ fontSize: "1.2rem" }}>
              Through my involvement in Waterloo Rocketry, I gained valuable
              experience in React, learning its syntax, styles, and various
              components. Working on projects like the Rocketry website and this
              current website has significantly enhanced my Javascript skills
              and provided me with a solid foundation in React.
            </Text>
          </Bounce>
          </Fade>
        </Col>
      </Row>
      <AttentionSeeker effect="pulse" duration={1000} delay={1000}>
        <h1 className={styles.gallery}>CLICK ON PROJECTS BELOW</h1>
      </AttentionSeeker>
      <Container className={styles.containerFluid} fluid>
        <Row xxl={4} xl={3} lg={2} md={1} sm={1} xs={1}>
          <Col>
            <Fade
              delay={0}
              duration={2000}
              style={{ opacity: isVisible ? 0 : 0 }}
            >
              <Blocks link="/#/toyotainnovation2023" photo={toyota2023}>
                Toyota Innovation Challenge 2023
              </Blocks>
            </Fade>
          </Col>
          <Col>
            <Fade
              delay={0}
              duration={2000}
              style={{ opacity: isVisible ? 0 : 0 }}
            >
              <Blocks
                text="Autonomous cube collector."
                link="/#/1afinalproject"
                disabled={true}
                photo={robot1a}
              >
                Mechatronics 1A project
              </Blocks>
            </Fade>
          </Col>
          <Col>
            <Fade
              delay={0}
              duration={2000}
              style={{ opacity: isVisible ? 0 : 0 }}
            >
              <Blocks link="/#/openmv" photo={openmv}>
                OpenMV Strategic Color Tracking
              </Blocks>
            </Fade>
          </Col>
          <Col>
            <Fade
              delay={0}
              duration={2000}
              style={{ opacity: isVisible ? 0 : 0 }}
            >
              <Blocks link="/#/toyotainnovation" photo={toyota}>
                Toyota Innovation Challenge 2022
              </Blocks>
            </Fade>
          </Col>
          <Col>
            <Fade
              delay={0}
              duration={2000}
              style={{ opacity: isVisible ? 0 : 0 }}
            >
              <Blocks link="/#/UofTHacks" photo={uoftHacks}>
                UofT Hackathon X
              </Blocks>
            </Fade>
          </Col>
          <Col>
            <Fade
              delay={0}
              duration={2000}
              style={{ opacity: isVisible ? 0 : 0 }}
            >
              <Blocks link="/#/frc4627" photo={frc4627}>
                FRC 4627 2022 Competition Robot
              </Blocks>
            </Fade>
          </Col>
          <Col>
            <Fade
              delay={0}
              duration={2000}
              style={{ opacity: isVisible ? 0 : 0 }}
            >
              <Blocks link="/#/plant" photo={plant}>
                Automatic Plant Watering
              </Blocks>
            </Fade>
          </Col>
          <Col>
            <Fade
              delay={0}
              duration={2000}
              style={{ opacity: isVisible ? 0 : 0 }}
            >
              <Blocks link="/#/sanitizer" photo={sanitizer}>
                Hand Sanitizer
              </Blocks>
            </Fade>
          </Col>
          <Col>
            <Fade
              delay={0}
              duration={2000}
              style={{ opacity: isVisible ? 0 : 0 }}
            >
              <Blocks link="/#/RPilaptop" photo={piLaptop}>
                Raspberry Pi Laptop
              </Blocks>
            </Fade>
          </Col>
          <Col>
            <Fade
              delay={0}
              duration={2000}
              style={{ opacity: isVisible ? 0 : 0 }}
            >
              <Blocks link="/#/gokart" photo={gokart}>
                Electric Gokart
              </Blocks>
            </Fade>
          </Col>
          <Col>
            <Fade
              delay={0}
              duration={2000}
              style={{ opacity: isVisible ? 0 : 0 }}
            >
              <Blocks link="/#/rcplanes" photo={planes}>
                RC Planes
              </Blocks>
            </Fade>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
