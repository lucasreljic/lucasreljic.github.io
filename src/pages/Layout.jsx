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

import linkedIn from "./../components/NavSocials/official-linkedin-logo----17.png";
import { useState, useEffect } from "react";

const Layout = () => {
  const [isVisible, setIsVisible] = useState(false);

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
          <Nav className="justify-content-center" >
            <Navbar.Brand className="mx-0">
              <a href={"/#/" + text} className={styles.title}>
                Home
              </a>
            </Navbar.Brand>
          </Nav>

          <Nav className="me-auto justify-content-center">
            <NavDropdown
              style={{ color: "black" }}
              title={<span className={styles.dropdown}>Projects</span>}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="/#/1afinalproject">
                1A Final Project
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/marketAlarm">
                Market Alarm
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/RPilaptop">
                Raspberry Pi Laptop
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/openmv">
                OpenMV Strategic Color Tracking
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/plant">
                Automatic Plant Watering
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/sanitizer">
                Hand Sanitizer
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/gokart">
                Electric Gokart
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/rcplanes">
                RC Airplanes
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={<span className={styles.dropdown}>Experiences</span>} id="navbarScrollingDropdown">
              <NavDropdown.Item href="/#/toyotainnovation2023">
                Toyota Innovation Challenge 2023
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/uofthacks">
                UofT Hacks
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/toyotainnovation">
                Toyota Innovation Challenge
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/frc4627">FRC 4627</NavDropdown.Item>
              <NavDropdown.Item href="/#/frc5078">FRC 5078</NavDropdown.Item>
              <NavDropdown.Item href="/#/roots2stem">
                Roots2Stem
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
