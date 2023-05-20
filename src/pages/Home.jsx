import React from 'react';
import styles from './Home.module.css';
import Text from '../components/Elements/Text/Text';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import Blocks from '../components/Elements/Blocks/Blocks';
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
import image from './../icons/stars.jpg'

//images
import robot1a from '../components/Elements/Slide/photos/1AProject/20221201_192840.jpg';
import openmv from '../components/Elements/Slide/photos/FRC/IMG_3426.JPG';
import toyota from '../components/Elements/Slide/photos/ToyotaChallenge/Capture1.PNG';
import uoftHacks from '../components/Elements/Slide/photos/UofTHacks/original.jpg';
import frc4627 from '../components/Elements/Slide/photos/FRC/2022_Practice.jpg';
import plant from '../components/Elements/Slide/photos/plantWaterer/IMG_3518.jpeg';
import sanitizer from '../components/Elements/Slide/photos/handSanitizer/IMG_2949.jpeg';
import piLaptop from '../components/Elements/Slide/photos/RPiLaptop/IMG_6924.jpeg';
import planes from '../components/Elements/Slide/photos/RCplanes/latest1.jpeg';
import gokart from '../components/Elements/Slide/photos/gokart/IMG_1418.jpeg';

const Home = () => {
    return (
        <Parallax pages={4} style={{
            top: '67px', left: '0',
            height: '-moz-calc(100% - 67px)',
            /* Webkit */
            height: '-webkit-calc(100% - 67px)',
            /* Opera */
            height: '-o-calc(100% - 67px)',
            /* Standard */
            height: 'calc(100% - 67px)',
            background: '#000000',/*'linear-gradient(to left top, #051937, #004d7a, #008793, #00bf72, #a8eb12)'*/
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
                                pursuing a BASc in Mechatronics Engineering at the University of Waterloo. Currently in my first year. I have a passion for mechanical and software projects as
                                evident through the various projects I have
                                accomplished over the years, some of which are visible on this website. Many of my experiences
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
                            <SkillBox width='27%' url={rocketryPhoto}>
                            </SkillBox>
                        </Col>
                        <Col>
                            <SkillBox width='37%' url={frcPhoto}>
                            </SkillBox>
                        </Col>
                    </Row>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={1}>
                    <h1 className={styles.gallery}>CLICK ON PROJECTS BELOW</h1>
                </ParallaxLayer>
                <ParallaxLayer offset={2.04} speed={2} style={{ paddingTop: '0px' }}>
                    <Container className={styles.containerFluid}fluid>
                         <Blocks link='/#/1afinalproject' disabled={true} photo={robot1a}>
                                Mechatronics 1A project
                            </Blocks>

                            <Blocks link='/#/openmv' photo={openmv}>
                                OpenMV Strategic Color Tracking
                            </Blocks>
                            <Blocks link='/#/toyotainnovation' photo={toyota}>
                                Toyota Innovation Challenge
                            </Blocks>
                            <Blocks link='/#/UofTHacks' photo={uoftHacks}>
                                UofT Hackathon X
                            </Blocks>
                            <Blocks link='/#/frc4627' photo={frc4627}>
                                FRC 4627 2022 Competition Robot
                            </Blocks>
                            <Blocks link='/#/plant' photo={plant}>
                                Automatic Plant Watering
                            </Blocks>
                            <Blocks link='/#/sanitizer' photo={sanitizer}>
                                Hand Sanitizer
                            </Blocks>
                            <Blocks link='/#/RPilaptop' photo={piLaptop}>
                                Raspberry Pi Laptop
                            </Blocks>
                            <Blocks link='/#/gokart' photo={gokart}>
                                Electric Gokart
                            </Blocks>
                            <Blocks link='/#/rcplanes' photo={planes}>
                                RC Planes
                            </Blocks>
                        
                    </Container>
                </ParallaxLayer>


            </Container>
        </Parallax>)
};

export default Home;