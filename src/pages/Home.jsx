import React from "react";
import styles from "./Home.module.css";
import Text from "../components/Elements/Text/Text";
import "react-slideshow-image/dist/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import Blocks from "../components/Elements/Blocks/Blocks";
import IconBox from "../components/Elements/Icons/IconBox";
import Appear from "../components/Utils/Appear";
import {
  Slide,
  Fade,
  AttentionSeeker,
  Reveal,
} from "react-awesome-reveal";
import { Link } from "react-router-dom";

// Photos/logos
import arrow from "../icons/arrow-down-3101.svg";
import frcPhoto from "./../icons/FRC-Vertical.png";
import rocketryPhoto from "./../icons/rocketry.png";
// import uwaterlooPhoto from "./../icons/University_of_Waterloo.svg.png";
import goodlabsPhoto from "./../icons/goodlabs.png";
import watoPhoto from "./../icons/wato_icon.jpeg";
import envgoPhoto from "./../icons/envgo_logo2.jpeg";


//images
import hackthe6ix from "../components/Elements/Slide/photos/Hackthe6ix/IMG_0072.jpg";
import uoftHacksXI from "../components/Elements/Blocks/photos/UoftHacksXI/Screenshot3.png";
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
import makeuoft from "../components/Elements/Slide/photos/makeuoft/hat.jpeg";
import hackmit from "../components/Elements/Slide/photos/HackMIT/mit_dome.jpg";
import calhacks from "../components/Elements/Slide/photos/CalHacks/IMG_0604.jpeg";
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
      <Appear timeout={0} fillmode={"forwards"}>
        <h1 className={styles.mainHeader}>
          <Fade cascade damping={5e-2} triggerOnce={true} duration={1500}>
            LUCAS RELJIC-DUMONT
          </Fade>
        </h1>
        <Row className={styles.iconbox} xl={5} lg={2} sm={2} xs={2}>
          <Col>
            <AttentionSeeker effect="pulse" delay={3500} duration={1500}>
              <IconBox className={styles.frcIcon} link="/frc4627" url={frcPhoto}></IconBox>
            </AttentionSeeker>
          </Col>
          <Col>
            <AttentionSeeker effect="pulse" delay={2500} duration={1500}>
              <IconBox
                className={styles.rocketryIcon}
                url={rocketryPhoto}
                link="https://github.com/waterloo-rocketry/website-react/commits?author=lucasreljic"
              ></IconBox>
            </AttentionSeeker>
          </Col>
          <Col>
            <AttentionSeeker effect="pulse" delay={1500} duration={1500}>
              <IconBox
                className={styles.goodlabsIcon}
                url={goodlabsPhoto}
                link="/goodlabsrobotics"
              ></IconBox>
            </AttentionSeeker>
          </Col>
          <Col>
            <AttentionSeeker effect="pulse" delay={500} duration={1500}>
              <IconBox
                className={styles.watoIcon}
                url={watoPhoto}
                link="https://github.com/WATonomous/wato_monorepo/pull/131"
              ></IconBox>
            </AttentionSeeker>
          </Col>
          <Col>
            <AttentionSeeker effect="pulse" delay={200} duration={1500}>
              <IconBox
                className={styles.watoIcon}
                url={envgoPhoto}
                link="/envgo"
              ></IconBox>
            </AttentionSeeker>
          </Col>
        </Row>
        <Row>
          <div className={styles.timeline_container}>
            <div className={styles.timeline}>
              <div className={styles.timeline_item}>
                <div className={styles.timeline_content}>
                  <span className={styles.timeline_date}>Sept. 2019 - May 2022</span>
                </div>
                <div className={styles.timeline_content}>
                  <span className={styles.timeline_date}>Jan. 2023 - Aug. 2023</span>
                </div>
                <div className={styles.timeline_content}>
                  <span className={styles.timeline_date}>May 2023 - Dec. 2024</span>
                </div>
                <div className={styles.timeline_content}>
                  <span className={styles.timeline_date}>Feb. 2024 - Present</span>
                </div>
                <div className={styles.timeline_content}>
                  <span className={styles.timeline_date}>May. 2025 - Present</span>
                </div>
              </div>
              {/* Add more timeline items as needed */}
            </div>
          </div>
        </Row>
        {/*
        <Col xs="auto">
            <AttentionSeeker effect="pulse" delay={4500} duration={1500}>
              <IconBox
                className={styles.uwaterlooIcon}
                url={uwaterlooPhoto}
              ></IconBox>
            </AttentionSeeker>
          </Col>
       <Col> */}
        <Text
          style={{
            textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
            marginBottom: "0rem",
          }}
        >
          I'm a 21-year-old third-year student pursuing a BASc in Mechatronics Engineering at the
          University of Waterloo. With a passion for both 
          mechanical and software projects, I've undertaken a variety of endeavors 
          showcased on this website. My journey towards an engineering degree has been shaped by 
          diverse experiences prior to university, such as being a <Link to="frc4627">First Robotics Team Captain</Link> and 
          a member of a <Link to="/roots2stem">Junior Engineering Club</Link>. Furthermore, I continue to enhance my skills 
          through dynamic, innovation-driven internships, like my recent experience at <Link to="/envgo">ENVGO</Link>
        </Text>
        <Slide delay={4000} duration={1000} direction="down" triggerOnce={true}>
          <Fade delay={3500} duration={3000} triggerOnce={true}>
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
                <Blocks link="/calhacks" photo={calhacks}>
                  Cal Hacks 11.0
                </Blocks>
              </Fade>
            </Reveal>
          </Col>
        <Col>
            <Reveal delay={0} triggerOnce={true} style={{ opacity: "0" }}>
              <Fade delay={0} duration={1000} triggerOnce={true}>
                <Blocks link="/hackmit" photo={hackmit}>
                  HackMIT 2024
                </Blocks>
              </Fade>
            </Reveal>
          </Col>
        <Col>
            <Reveal delay={0} triggerOnce={true} style={{ opacity: "0" }}>
              <Fade delay={0} duration={1000} triggerOnce={true}>
                <Blocks link="/makeuoft" photo={makeuoft}>
                  MakeUofT 2024
                </Blocks>
              </Fade>
            </Reveal>
          </Col>
          <Col>
            <Reveal delay={0} triggerOnce={true} style={{ opacity: "0" }}>
              <Fade delay={0} duration={1000} triggerOnce={true}>
                <Blocks link="/uofthacksXI" photo={uoftHacksXI}>
                  UofTHacks XI
                </Blocks>
              </Fade>
            </Reveal>
          </Col>
          <Col>
            <Reveal delay={0} triggerOnce={true} style={{ opacity: "0" }}>
              <Fade delay={0} duration={1000} triggerOnce={true}>
                <Blocks link="/hackthe6ix" photo={hackthe6ix}>
                  Hack the 6ix 2023
                </Blocks>
              </Fade>
            </Reveal>
          </Col>
          <Col>
            <Reveal delay={0} triggerOnce={true} style={{ opacity: "0" }}>
              <Fade delay={0} duration={1000} triggerOnce={true}>
                <Blocks link="/toyotainnovation2023" photo={toyota2023}>
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
                  link="/1afinalproject"
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
                <Blocks link="/openmv" photo={openmv}>
                  OpenMV Strategic Color Tracking
                </Blocks>
              </Fade>
            </Reveal>
          </Col>
          <Col>
            <Reveal delay={0} triggerOnce={true} style={{ opacity: "0" }}>
              <Fade delay={0} duration={1000} triggerOnce={true}>
                <Blocks link="/toyotainnovation" photo={toyota}>
                  Toyota Innovation Challenge 2022
                </Blocks>
              </Fade>
            </Reveal>
          </Col>
          <Col>
            <Reveal delay={0} triggerOnce={true} style={{ opacity: "0" }}>
              <Fade delay={0} duration={1000} triggerOnce={true}>
                <Blocks link="/uofthacksX" photo={uoftHacks}>
                  UofTHacks X
                </Blocks>
              </Fade>
            </Reveal>
          </Col>
          <Col>
            <Reveal delay={0} triggerOnce={true} style={{ opacity: "0" }}>
              <Fade delay={0} duration={1000} triggerOnce={true}>
                <Blocks link="/frc4627" photo={frc4627}>
                  FRC 4627 2022 Competition Robot
                </Blocks>
              </Fade>
            </Reveal>
          </Col>
          <Col>
            <Reveal delay={0} triggerOnce={true} style={{ opacity: "0" }}>
              <Fade delay={0} duration={1000} triggerOnce={true}>
                <Blocks link="/plant" photo={plant}>
                  Automatic Plant Watering
                </Blocks>
              </Fade>
            </Reveal>
          </Col>
          <Col>
            <Reveal delay={0} triggerOnce={true} style={{ opacity: "0" }}>
              <Fade delay={0} duration={1000} triggerOnce={true}>
                <Blocks link="/sanitizer" photo={sanitizer}>
                  Hand Sanitizer
                </Blocks>
              </Fade>
            </Reveal>
          </Col>
          <Col>
            <Reveal delay={0} triggerOnce={true} style={{ opacity: "0" }}>
              <Fade delay={0} duration={1000} triggerOnce={true}>
                <Blocks link="/RPilaptop" photo={piLaptop}>
                  Raspberry Pi Laptop
                </Blocks>
              </Fade>
            </Reveal>
          </Col>
          <Col>
            <Reveal delay={0} triggerOnce={true} style={{ opacity: "0" }}>
              <Fade delay={0} duration={1000} triggerOnce={true}>
                <Blocks link="/gokart" photo={gokart}>
                  Electric Gokart
                </Blocks>
              </Fade>
            </Reveal>
          </Col>
          <Col>
            <Reveal delay={0} triggerOnce={true} style={{ opacity: "0" }}>
              <Fade delay={0} duration={1000} triggerOnce={true}>
                <Blocks link="/rcplanes" photo={planes}>
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
