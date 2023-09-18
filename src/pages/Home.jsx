import React, { Suspense } from "react";
import styles from "./Home.module.css";
import Text from "../components/Elements/Text/Text";
import "react-slideshow-image/dist/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import Blocks from "../components/Elements/Blocks/Blocks";
import IconBox from "../components/Elements/Icons/IconBox";
import Button2 from "../components/Intro/Button2";
import ReactCardFlip from "react-card-flip";
import Appear from "../components/Intro/Appear";
import { useState } from "react";
import {
  Slide,
  Fade,
  JackInTheBox,
  AttentionSeeker,
  Reveal,
} from "react-awesome-reveal";

// Photos/logos
import arrow from "../icons/arrow-down-3101.svg";
import ReactSVG from "./../icons/react.svg";
import frcPhoto from "./../icons/FRC-Vertical.png";
import CppPhoto from "./../icons/C++_Logo.png";
import rocketryPhoto from "./../icons/rocketry.png";
import uwaterlooPhoto from "./../icons/University_of_Waterloo.svg.png";
import goodlabsPhoto from "./../icons/goodlabs.png";

//images
import hackthe6ix from "../components/Elements/Slide/photos/Hackthe6ix/IMG_0072.jpg";
import robot1a from "../components/Elements/Slide/photos/1AProject/20221201_192840.jpg";
import openmv from "../components/Elements/Slide/photos/FRC/IMG_3426.JPG";
import toyota from "../components/Elements/Slide/photos/ToyotaChallenge/Capture1.PNG";
import toyota2023 from "../components/Elements/Slide/photos/ToyotaChallenge/output2crop.png";
import uoftHacks from "../components/Elements/Slide/photos/UofTHacks/original.jpg";
import frc4627 from "../components/Elements/Slide/photos/FRC/2022_Practice.jpg";
import plant from "../components/Elements/Slide/photos/plantWaterer/IMG_3645.JPG";
import sanitizer from "../components/Elements/Slide/photos/handSanitizer/IMG_2949.jpeg";
import piLaptop from "../components/Elements/Slide/photos/RPiLaptop/IMG_6924.jpeg";
import planes from "../components/Elements/Slide/photos/RCplanes/latest1.jpeg";
import gokart from "../components/Elements/Slide/photos/gokart/IMG_1418.jpeg";

const SkillBox = React.lazy(() =>
  import("../components/Elements/Skills/SkillBox")
);

export default function Home() {
  const [flip, setFlip] = useState(false);
  const [flip0, setFlip0] = useState(false);
  const [flip2, setFlip2] = useState(false);
  const [flip3, setFlip3] = useState(false);
  const handleClickScroll = () => {
    const element = document.getElementById("skills");
    if (element) {
      // Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Container fluid className={styles.container}>
      <Appear timeout={0.1} fillmode={"forwards"}>
        <h1 className={styles.mainHeader}>
          <Fade cascade damping={1e-1} triggerOnce={true} duration={2500}>
            LUCAS RELJIC-DUMONT
          </Fade>
        </h1>
        <Row xl={4} sm={2} xs={2}>
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
        </Row>

        <Text
          className={styles.title}
          style={{
            textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
          }}
        >
          I am a 19 year old pursuing a BASc in Mechatronics Engineering at the
          University of Waterloo. Currently in my 2nd year. I have a passion for
          mechanical and software projects as evident through the various
          projects I have accomplished over the years, some of which are visible
          on this website. Many of my experiences prior to university guided me
          towards pursuing an engineering degree.
        </Text>
        <Slide delay={4500} duration={1000} direction="down" triggerOnce={true}>
          <Fade delay={4000} duration={3000} triggerOnce={true}>
            <img
              onClick={handleClickScroll}
              className={styles.arrow}
              src={arrow}
              alt="arrow"
            ></img>
          </Fade>
        </Slide>
      </Appear>
      <AttentionSeeker effect="pulse" duration={1000} delay={1000}>
        <h1 id="skills" className={styles.skills}>
          Programming Languages I know
        </h1>
      </AttentionSeeker>
      <Row lg={2} md={1} sm={1} xs={1}>
        <Col>
          <Reveal delay={100} triggerOnce={true} style={{ opacity: "0" }}>
            <Slide delay={0} duration={2000} triggerOnce={true}>
              <ReactCardFlip isFlipped={!flip} flipDirection="vertical">
                <Suspense fallback={<div>Loading...</div>}>
                  <SkillBox
                    header="3 YEARS"
                    click={() => setFlip(!flip)}
                    color={
                      "-25deg, #06257a 0%, #0054c2 35%, rgb(241, 58, 2) 100%"
                    }
                    className={styles.javaIcon}
                    url={"https://www.svgrepo.com/show/184143/java.svg"}
                  >
                    Java
                  </SkillBox>
                </Suspense>
                <Button2
                  left="10rem"
                  link={() => setFlip(!flip)}
                  color={
                    "-145deg, #06257a 0%, #0054c2 35%, rgb(241, 58, 2) 100%"
                  }
                >
                  During my five-year involvement in FRC, Java was the language
                  for programming the robots. This extensive hands-on experience
                  enabled me to gain a deep understanding of Java's syntax,
                  features, and best practices. Applying Java in real-world FRC
                  scenarios enhanced my problem-solving skills and enabled me to
                  develop robust, efficient, and reliable solutions to complex
                  challenges.
                </Button2>
              </ReactCardFlip>
            </Slide>
          </Reveal>
        </Col>
        <Col>
          <Reveal delay={0} triggerOnce={true} style={{ opacity: "0" }}>
            <Slide
              direction="right"
              delay={0}
              duration={2000}
              triggerOnce={true}
            >
              <ReactCardFlip isFlipped={flip0} flipDirection="vertical">
                <SkillBox
                  header="2 YEARS"
                  click={() => setFlip0(!flip0)}
                  color={
                    "155deg, #06257a 0%, #0054c2 35%, rgb(255, 222, 76) 100%"
                  }
                  className={styles.pythonIcon}
                  url={
                    "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                  }
                >
                  Python
                </SkillBox>

                <Button2
                  color={
                    "35deg, #06257a 0%, #0054c2 35%, rgb(255, 222, 76) 100%"
                  }
                  link={() => setFlip0(!flip0)}
                >
                  As a part of FRC, I gained extensive experience in Python
                  programming, specifically in vision systems. Utilizing
                  Python's libraries and tools, I implemented efficient
                  solutions for image processing and analysis. This hands-on
                  experience enhanced my proficiency in Python's syntax, data
                  structures, and built-in functions, which I further expanded
                  through experiences like the Toyota Challenge.
                </Button2>
              </ReactCardFlip>
            </Slide>
          </Reveal>
        </Col>
        <Col>
          <Reveal delay={0} triggerOnce={true} style={{ opacity: "0" }}>
            <Slide
              direction="right"
              delay={100}
              duration={2000}
              triggerOnce={true}
            >
              <ReactCardFlip isFlipped={flip2} flipDirection="vertical">
                <SkillBox
                  header="6 MONTHS"
                  className={styles.cppIcon}
                  click={() => setFlip2(!flip2)}
                  color={
                    "-10deg, #06557a 0%, #2626ff 35%, rgba(0, 212, 255, 1) 100%"
                  }
                  url={CppPhoto}
                >
                  C++
                </SkillBox>
                <Button2
                  color={
                    "-140deg, #06557a 0%, #2626ff 35%, rgba(0, 212, 255, 1) 100%"
                  }
                  link={() => setFlip2(!flip2)}
                >
                  In my engineering program, I gained extensive knowledge of the
                  C++ programming language, achieving top marks in my
                  programming classes. I also have hands-on experience with
                  Arduino boards, utilizing C++ to program and control
                  electronic systems. This practical application of C++ through
                  Arduino projects has strengthened my proficiency in the
                  language and working with hardware.
                </Button2>
              </ReactCardFlip>
            </Slide>
          </Reveal>
        </Col>
        <Col xs lg="6">
          <Reveal delay={100} triggerOnce={true} style={{ opacity: "0" }}>
            <JackInTheBox delay={0} duration={2000} triggerOnce={true}>
              <ReactCardFlip isFlipped={flip3} flipDirection="vertical">
                <SkillBox
                  className={styles.Applogo}
                  header="3 MONTH"
                  url={ReactSVG}
                  click={() => setFlip3(!flip3)}
                >
                  React JS
                </SkillBox>
                <Button2 link={() => setFlip3(!flip3)}>
                  Through my involvement in Waterloo Rocketry, I gained valuable
                  experience in React, learning its syntax, styles, and various
                  components. Working on projects like the Rocketry website and
                  this current website has significantly enhanced my Javascript
                  skills and provided me with a solid foundation in React.
                </Button2>
              </ReactCardFlip>
            </JackInTheBox>
          </Reveal>
        </Col>
        <Col className={styles.skillText}></Col>
      </Row>
      <AttentionSeeker effect="pulse" duration={1000} delay={1000}>
        <h1 className={styles.gallery}>VIEW PROJECTS</h1>
      </AttentionSeeker>
      <Container className={styles.containerFluid} fluid>
        <Row xxl={4} xl={3} lg={2} md={2} sm={1} xs={1}>
          <Col>
            <Reveal delay={0} triggerOnce={true} style={{ opacity: "0" }}>
              <Fade delay={0} duration={1000} triggerOnce={true}>
                <Blocks link="/#/hackthe6ix" photo={hackthe6ix}>
                  Hack the 6ix 2023
                </Blocks>
              </Fade>
            </Reveal>
          </Col>
          <Col>
            <Reveal delay={0} triggerOnce={true} style={{ opacity: "0" }}>
              <Fade delay={0} duration={1000} triggerOnce={true}>
                <Blocks link="/#/toyotainnovation2023" photo={toyota2023}>
                  Toyota Innovation Challenge 2023
                </Blocks>
              </Fade>
            </Reveal>
          </Col>
          <Col>
            <Reveal delay={0} triggerOnce={true} style={{ opacity: "0" }}>
              <Fade delay={0} duration={1000} triggerOnce={true}>
                <Blocks
                  text="Autonomous cube collector."
                  link="/#/1afinalproject"
                  disabled={true}
                  photo={robot1a}
                >
                  Mechatronics 1A project
                </Blocks>
              </Fade>
            </Reveal>
          </Col>
          <Col>
            <Reveal delay={0} triggerOnce={true} style={{ opacity: "0" }}>
              <Fade delay={0} duration={1000} triggerOnce={true}>
                <Blocks link="/#/openmv" photo={openmv}>
                  OpenMV Strategic Color Tracking
                </Blocks>
              </Fade>
            </Reveal>
          </Col>
          <Col>
            <Reveal delay={0} triggerOnce={true} style={{ opacity: "0" }}>
              <Fade delay={0} duration={1000} triggerOnce={true}>
                <Blocks link="/#/toyotainnovation" photo={toyota}>
                  Toyota Innovation Challenge 2022
                </Blocks>
              </Fade>
            </Reveal>
          </Col>
          <Col>
            <Reveal delay={0} triggerOnce={true} style={{ opacity: "0" }}>
              <Fade delay={0} duration={1000} triggerOnce={true}>
                <Blocks link="/#/UofTHacks" photo={uoftHacks}>
                  UofT Hackathon X
                </Blocks>
              </Fade>
            </Reveal>
          </Col>
          <Col>
            <Reveal delay={0} triggerOnce={true} style={{ opacity: "0" }}>
              <Fade delay={0} duration={1000} triggerOnce={true}>
                <Blocks link="/#/frc4627" photo={frc4627}>
                  FRC 4627 2022 Competition Robot
                </Blocks>
              </Fade>
            </Reveal>
          </Col>
          <Col>
            <Reveal delay={0} triggerOnce={true} style={{ opacity: "0" }}>
              <Fade delay={0} duration={1000} triggerOnce={true}>
                <Blocks link="/#/plant" photo={plant}>
                  Automatic Plant Watering
                </Blocks>
              </Fade>
            </Reveal>
          </Col>
          <Col>
            <Reveal delay={0} triggerOnce={true} style={{ opacity: "0" }}>
              <Fade delay={0} duration={1000} triggerOnce={true}>
                <Blocks link="/#/sanitizer" photo={sanitizer}>
                  Hand Sanitizer
                </Blocks>
              </Fade>
            </Reveal>
          </Col>
          <Col>
            <Reveal delay={0} triggerOnce={true} style={{ opacity: "0" }}>
              <Fade delay={0} duration={1000} triggerOnce={true}>
                <Blocks link="/#/RPilaptop" photo={piLaptop}>
                  Raspberry Pi Laptop
                </Blocks>
              </Fade>
            </Reveal>
          </Col>
          <Col>
            <Reveal delay={0} triggerOnce={true} style={{ opacity: "0" }}>
              <Fade delay={0} duration={1000} triggerOnce={true}>
                <Blocks link="/#/gokart" photo={gokart}>
                  Electric Gokart
                </Blocks>
              </Fade>
            </Reveal>
          </Col>
          <Col>
            <Reveal delay={0} triggerOnce={true} style={{ opacity: "0" }}>
              <Fade delay={0} duration={1000} triggerOnce={true}>
                <Blocks link="/#/rcplanes" photo={planes}>
                  RC Planes
                </Blocks>
              </Fade>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
