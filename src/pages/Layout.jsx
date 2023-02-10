import { Outlet } from "react-router-dom";
import { Container } from 'react-bootstrap/';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Layout.module.css';
import mail from "./../components/NavSocials/gmail.png"
import github from "./../components/NavSocials/github.png";
import linkedIn from './../components/NavSocials/official-linkedin-logo----17.png';
const Layout = () => {
  return (
    <>
        <Navbar bg="dark" variant="dark">
          <Container fluid>
            <Nav className="justify-content-center">
              <Navbar.Brand href="/#/home">
                <span className={styles.title}>
                  Home
                </span>
              </Navbar.Brand>
            </Nav>
            <Nav className="me-auto">
              <NavDropdown title="Projects" id="navbarScrollingDropdown">
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
              <NavDropdown title="Experiences" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/#/uofthacks">
                  UofT Hacks
                </NavDropdown.Item>
                <NavDropdown.Item href="/#/toyotainnovation">
                  Toyota Innovation Challenge
                </NavDropdown.Item>
                <NavDropdown.Item href="/#/frc4627">
                  FRC 4627
                </NavDropdown.Item>
                <NavDropdown.Item href="/#/frc5078">
                  FRC 5078
                </NavDropdown.Item>
                <NavDropdown.Item href="/#/roots2stem">
                  Roots2Stem
                </NavDropdown.Item>
              </NavDropdown>

            </Nav>
            <Nav fill className="justify-content-end">
              <Nav.Item>
                <Nav.Link className={styles.icon} href="https://github.com/lucasreljic/"><img
                  src={github}
                  style={{ width: 35 }}
                  className="d-inline-block align-top"
                  alt="github logo" /></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className={styles.icon} href="https://www.linkedin.com/in/lucas-reljic/"><img
                  className="d-inline-block align-top"
                  style={{ width: 35 }}
                  src={linkedIn}
                  alt="linkedIn logo" /></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className={styles.icon} href="mailto:lucas.reljic+Portfolio@gmail.com"><img
                  className="d-inline-block align-top"
                  style={{ width: 35, paddingTop: 9 }}
                  src={mail}
                  alt="github logo" /></Nav.Link>
              </Nav.Item>
            </Nav>

          </Container>
        </Navbar>
        <Outlet />
    </>
  )
};
export default Layout;