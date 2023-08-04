import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap/";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Layout.module.css";
import mail from "./../components/NavSocials/gmail.png";
import github from "./../components/NavSocials/github.png";
import { JackInTheBox, Fade } from "react-awesome-reveal";
import Appear from "../components/Intro/Appear";

import linkedIn from "./../components/NavSocials/official-linkedin-logo----17.png";
import { useState, useEffect } from "react";

const Layout = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  var [text, setText] = useState("");
  return (
    <>
      <Navbar
        onPointerEnter={() => setText(Math.random() > 0.2 ? "" : "intro")}
        bg="dark"
        variant="dark"
        style={{ top: "0.5rem", display: "inline" }}
      >
        <Container fluid>
          <Nav className="justify-content-center">
            <Navbar.Brand className="mx-0">
              <Appear timeout={0.1} fillmode={"forwards"}>
                <a href={"/#/" + text} className={styles.title}>
                  <Fade
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                    duration={1000}
                  >
                    Home
                  </Fade>
                </a>
              </Appear>
            </Navbar.Brand>
          </Nav>
          <Nav className="me-auto justify-content-center bar">
            
              <NavDropdown
                style={{ color: "black" }}
                title={
                  <span className={styles.dropdown}>
                    <Fade
                      cascade
                      damping={1e-1}
                      triggerOnce={true}
                      duration={1000}
                    >
                      Projects
                    </Fade>
                  </span>
                }
                id="navbarScrollingDropdown"
              >
                  
                <NavDropdown.Item href="/#/1afinalproject">
                  <span className={styles.tab}>1A Final Project</span>
                </NavDropdown.Item>
                <NavDropdown.Item href="/#/marketAlarm">
                  {" "}
                  <span className={styles.tab}>Market Alarm</span>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/#/RPilaptop">
                  {" "}
                  <span className={styles.tab}>Raspberry Pi Laptop</span>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/#/openmv">
                  {" "}
                  <span className={styles.tab}>
                    OpenMV Strategic Color Tracking
                  </span>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/#/plant">
                  {" "}
                  <span className={styles.tab}>
                    Automatic Plant Watering
                  </span>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/#/sanitizer">
                  {" "}
                  <span className={styles.tab}>Hand Sanitizer</span>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/#/gokart">
                  {" "}
                  <span className={styles.tab}>Electric Gokart</span>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/#/rcplanes">
                  {" "}
                  <span className={styles.tab}>RC Airplanes</span>{" "}
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={<span className={styles.dropdown}>
                   <Fade
                      cascade
                      damping={1e-1}
                      triggerOnce={true}
                      duration={1000}
                    >Experiences</Fade>
                  </span>}
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="/#/toyotainnovation2023">
                  {" "}
                  <span className={styles.tab}>
                    Toyota Innovation Challenge 2023
                  </span>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/#/uofthacks">
                  {" "}
                  <span className={styles.tab}>UofT Hacks</span>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/#/toyotainnovation">
                  {" "}
                  <span className={styles.tab}>
                    Toyota Innovation Challenge
                  </span>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/#/frc4627">
                  {" "}
                  <span className={styles.tab}>FRC 4627</span>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/#/frc5078">
                  {" "}
                  <span className={styles.tab}>FRC 5078</span>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/#/roots2stem">
                  {" "}
                  <span className={styles.tab}>Roots2Stem</span>{" "}
                </NavDropdown.Item>
              </NavDropdown>
          </Nav>
          <Nav className="justify-self-start" size="xs">
            <Nav.Item>
              <Nav.Link
                className={styles.icon}
                href="https://github.com/lucasreljic/"
              >
                <JackInTheBox
                  delay={5000}
                  duration={2000}
                  triggerOnce={true}
                  style={{ opacity: isVisible ? 0 : 1 }}
                >
                  <img
                    src={github}
                    className={styles.navSocial}
                    style={{
                      backgroundColor: "grey",
                      borderRadius: "1.5rem 1.5rem",
                    }}
                    alt="github logo"
                  />
                </JackInTheBox>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={styles.icon}
                href="https://www.linkedin.com/in/lucas-reljic/"
              >
                <Fade
                  direction="down"
                  delay={7000}
                  duration={2000}
                  triggerOnce={true}
                  style={{ opacity: isVisible ? 0 : 1 }}
                >
                  <img
                    className={styles.navSocial}
                    src={linkedIn}
                    alt="linkedIn logo"
                  />
                </Fade>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={styles.icon}
                href="mailto:lucas.reljic+Portfolio@gmail.com"
              >
                <Fade
                  direction="right"
                  delay={9000}
                  duration={2000}
                  triggerOnce={true}
                  style={{ opacity: isVisible ? 0 : 1 }}
                >
                  <img
                    className={styles.navSocialGmail}
                    src={mail}
                    alt="mail logo"
                  />
                </Fade>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};
export default Layout;
