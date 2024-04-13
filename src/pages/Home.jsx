import React from "react";
import styles from "./Home.module.css";
import Text from "../components/Elements/Text/Text";
import "react-slideshow-image/dist/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import Blocks from "../components/Elements/Blocks/Blocks";
import IconBox from "../components/Elements/Icons/IconBox";
import Appear from "../components/Intro/Appear";
import {
  Slide,
  Fade,
  AttentionSeeker,
  Reveal,
} from "react-awesome-reveal";

// Photos/logos
import arrow from "../icons/arrow-down-3101.svg";
import frcPhoto from "./../icons/FRC-Vertical.png";
import rocketryPhoto from "./../icons/rocketry.png";
import uwaterlooPhoto from "./../icons/University_of_Waterloo.svg.png";
import goodlabsPhoto from "./../icons/goodlabs.png";
import watoPhoto from "./../icons/wato_icon.jpeg";


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

export default function Home() {
  const handleClickScroll = () => {
    const element = document.getElementById("projects");
    if (element) {
      // Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Container fluid className={styles.container}>
      <Appear timeout={0.1} fillmode={"forwards"}>
        <h1 className={styles.mainHeader}>
          <Fade cascade damping={1e-1} triggerOnce={true} duration={2000}>
            LUCAS RELJIC-DUMONT
          </Fade>
        </h1>
        <Row xl={5} lg={2} sm={2} xs={2}>
        <Col>
            <AttentionSeeker effect="pulse" delay={1500} duration={1500}>
              <IconBox
                className={styles.watoIcon}
                url={watoPhoto}
              ></IconBox>
            </AttentionSeeker>
          </Col>
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
          I am a 20 year old pursuing a BASc in Mechatronics Engineering at the
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
        <h1 className={styles.gallery} id="projects">VIEW PROJECTS</h1>
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
