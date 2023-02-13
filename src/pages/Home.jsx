import React from 'react';
import styles from './Home.module.css';
import Text from '../components/Elements/Text/Text';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import SlideBox from '../components/Elements/Slide/SlideBox';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import SkillBox from '../components/Elements/Skills/SkillBox';
import Appear from '../components/Intro/Appear';
import { TypeAnimation } from 'react-type-animation';

// Photos/logos
import arrow from '../icons/arrow-down-3101.svg';
import photo from '../components/Elements/Slide/photos/misc/profile.jpeg';
import jsonPhoto from "./../icons/json1.png";
import ReactSVG from "./../icons/react.svg";
import frcPhoto from './../icons/FRC-Vertical.png';
import CppPhoto from './../icons/C++_Logo.png';
import rocketryPhoto from './../icons/rocketry.png';

const Home = () => {
    return (
        <Parallax pages={3} style={{
            top: '67px', left: '0',
            height: '-moz-calc(100% - 67px)',
            /* Webkit */
            height: '-webkit-calc(100% - 67px)',
            /* Opera */
            height: '-o-calc(100% - 67px)',
            /* Standard */
            height: 'calc(100% - 67px)',
            background: '#004F71',/*'linear-gradient(to left top, #051937, #004d7a, #008793, #00bf72, #a8eb12)'*/
        }}>
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
                            () => { }]}
                        wrapper="h1"
                        speed={1}
                        cursor={false}
                        className={styles.mainHeader}
                        repeat={false} />
                </ParallaxLayer>

                <ParallaxLayer offset={0.15} speed={1}>
                    <Row md={2} xs={1} className='justify-content-center'>
                        <Col md='auto' className='justify-content-center'>
                            <img className={styles.profile} src={photo} alt="me"></img>
                            <div></div>
                        </Col>
                        <Col style={{ marginTop: '1%' }}>
                            <Text>
                                My name is Lucas Reljic-Dumont, I am currently 19 years old and
                                pursuing a BASc in Mechatronics Engineering at the University of Waterloo, currently
                                in term 1B. I have a passion for mechanical and software projects as
                                evident through the various projects I have
                                accomplished over the years. Some of which is visible on this website. Many of my experiences
                                prior to university guided me towards pursuing an Engineering degree.
                            </Text>
                        </Col>
                    </Row>
                </ParallaxLayer>
                <ParallaxLayer offset={0.8} speed={-0.1}>
                    <Appear timeout={2} fillmode={"forwards"} duration={3}>
                        <img className={styles.arrow} src={arrow} alt="arrow"></img>
                    </Appear>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0} style={{ backgroundColor: '#0F2557', opacity: '0.4' }} />
                <ParallaxLayer offset={1} speed={1.5} style={{ pointerEvents: 'none' }}>
                    <h1 className={styles.skills}>Programming Skills</h1>
                    <Row lg={3} md={2} xs={2}>
                        <Col>
                            <SkillBox header="3 YEARS" width='18%' url={"https://www.svgrepo.com/show/184143/java.svg"}>
                                Java
                            </SkillBox>
                        </Col>

                        <Col>
                            <SkillBox header="2 YEARS" width='18%' url={"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"}>
                                Python
                            </SkillBox>
                        </Col>

                        <Col>
                            <SkillBox header="2 YEARS" width='18%' url={jsonPhoto}>
                                JSON
                            </SkillBox>
                        </Col>

                        <Col>
                            <SkillBox header="6 MONTHS" width='17%' url={CppPhoto}>
                                C++
                            </SkillBox>
                        </Col>

                        <Col>
                            <SkillBox className={styles.Applogo} header="1 MONTH" width='31%' url={ReactSVG}>
                                React JS
                            </SkillBox>
                        </Col>

                    </Row>
                </ParallaxLayer>
                <ParallaxLayer offset={1.76} speed={1} >
                <h1 className={styles.skills}>Clubs</h1>
                    <Row lg={3} xs={2} className='justify-content-center'>
                        <Col>
                            <SkillBox width='30%' url={rocketryPhoto}>
                            </SkillBox>
                        </Col>
                        <Col>
                            <SkillBox width='40%' url={frcPhoto}>
                            </SkillBox>
                        </Col>
                    </Row>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={1}>
                    <h1 className={styles.gallery}>Gallery</h1>
                </ParallaxLayer>
                <ParallaxLayer offset={2.04} speed={2} style={{ paddingTop: '0px' }}>
                    <Slide>
                        <SlideBox link='/#/1afinalproject' photo='photorobot1a'>
                            Mechatronics 1A project
                        </SlideBox>

                        <SlideBox link='/#/openmv' photo='photofrc3'>
                            OpenMV Strategic Color Tracking
                        </SlideBox>

                        <SlideBox link='/#/UofTHacks' photo='photouofthacks1'>
                            UofT Hackathon X
                        </SlideBox>

                        <SlideBox link='/#/plant' photo='photoplant3'>
                            Automatic Plant Watering
                        </SlideBox>

                        <SlideBox link='/#/sanitizer' photo='photosanitizer'>
                            Hand Sanitizer
                        </SlideBox>

                        <SlideBox link='/#/rcplanes' photo='photoplane7'>
                            My First Delta Wing RC Plane
                        </SlideBox>

                        <SlideBox link='/#/rcplanes' photo='photoplane1'>
                            RC Planes
                        </SlideBox>

                        <SlideBox link='/#/gokart' photo='photokart3'>
                            Electric Gokart
                        </SlideBox>
                    </Slide>
                </ParallaxLayer>


            </Container>
        </Parallax>)
};

export default Home;