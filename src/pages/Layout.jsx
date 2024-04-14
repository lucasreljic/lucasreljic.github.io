import { Link, Outlet } from "react-router-dom";
import { Container } from "react-bootstrap/";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Layout.module.css";
import mail from "./../icons/NavSocials/gmail.png";
import github from "./../icons/NavSocials/github.png";

import linkedIn from "./../icons/NavSocials/official-linkedin-logo----17.png";
// import { useState, useEffect } from "react";

const Layout = () => {
  // const [isVisible, setIsVisible] = useState(true);

  // useEffect(() => {
  //   setIsVisible(true);
  // }, []);

  // var [text, setText] = useState("");
  return (
    <>
      <Navbar
        bg="black"
        variant="black"
        style={{ top: "0.5rem", display: "inline" }}
      >
        <Container fluid>
        <Navbar.Brand as={Link} className=" pb-2" to="/"><span className={styles.title}>Home</span></Navbar.Brand>
          <Nav className="me-auto justify-content-center bar">
            <NavDropdown
              style={{ color: "black" }}
              title={<span className={styles.dropdown}>Projects</span>}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="/#/1afinalproject">
                <span className={styles.tab}>1A Final Project</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/marketAlarm">
                <span className={styles.tab}>Market Alarm</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/RPilaptop">
                <span className={styles.tab}>Raspberry Pi Laptop</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/openmv">
                <span className={styles.tab}>
                  OpenMV Strategic Color Tracking
                </span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/plant">
                <span className={styles.tab}>Automatic Plant Watering</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/sanitizer">
                <span className={styles.tab}>Hand Sanitizer</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/gokart">
                <span className={styles.tab}>Electric Gokart</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/rcplanes">
                <span className={styles.tab}>RC Airplanes</span>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={<span className={styles.dropdown}>Experiences</span>}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="/#/uofthacksXI">
                <span className={styles.tab}>UofTHacksXI</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/hackthe6ix">
                <span className={styles.tab}>Hack the 6ix</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/toyotainnovation2023">
                <span className={styles.tab}>
                  Toyota Innovation Challenge 2023
                </span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/uofthacksX">
                <span className={styles.tab}>UofTHacksX</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/toyotainnovation">
                <span className={styles.tab}>Toyota Innovation Challenge</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/frc4627">
                <span className={styles.tab}>FRC 4627</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/frc5078">
                <span className={styles.tab}>FRC 5078</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/roots2stem">
                <span className={styles.tab}>Roots2Stem</span>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="justify-self-start" size="xs">
            <Nav.Item>
              <Nav.Link
                className={styles.icon}
                href="https://github.com/lucasreljic/"
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
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={styles.icon}
                href="https://www.linkedin.com/in/lucas-reljic/"
              >
                <img
                  className={styles.navSocialLinkedin}
                  src={linkedIn}
                  alt="linkedIn logo"
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={styles.icon}
                href="mailto:lucas.reljic+Portfolio@gmail.com"
              >
                <img
                  className={styles.navSocialGmail}
                  src={mail}
                  alt="mail logo"
                />
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
