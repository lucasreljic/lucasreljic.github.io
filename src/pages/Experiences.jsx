import { Button, Container } from "react-bootstrap";
import { Slide } from "react-slideshow-image";
import SlideBox from "../components/Elements/Slide/SlideBox";
import Text from "../components/Elements/Text/Text";
import styles from "./Experiences.module.css";

const Toyota2023 = () => {
  return (
    <Container fluid>
      <h1 id="toyota">Toyota Innovation Challenge</h1>
      <h2>2023</h2>
      <Slide>
        <SlideBox photo="phototoyota6">Vision Outputs</SlideBox>
        <SlideBox photo="phototoyota4">Vision Outputs</SlideBox>
        <SlideBox photo="phototoyota5">Vision Outputs</SlideBox>
      </Slide>
      <div className={styles.button}>
        <Button href="https://github.com/mahir-mahota/Toyota-Innovation-Challenge-2">
          GitHub
        </Button>
      </div>
      <Text>
        - Programmed in Python with OpenCV
        <br></br>- Developed real-time tracking method that could detect a
        misplaced sticker with up to 3mm of accuracy
      </Text>
      <br></br>
      <Text>
        During the summer, I took part in the Toyota Innovation Challenge, a
        weekend competition hosted by TMMC. It was my second time attending this
        competition, and this time our goal was to use computer vision
        techniques, particularly OpenCV, to detect a hole and verify if a black
        sticker was correctly placed over it. Working alongside Mahir Mohota, we
        leveraged precise object tracking capabilities offered by OpenCV, which
        ultimately led to our victory and winning a prize in the competition.{" "}
      </Text>
    </Container>
  );
};

const UofTHacks = () => {
  return (
    <Container fluid>
      <h1 id="uofthacks">UofT Hackathon X</h1>
      <h2>2023</h2>
      <Slide>
        <SlideBox photo="photouofthacks">BeRealocated Project</SlideBox>
        <SlideBox photo="photouofthacks1">BeRealocated Project</SlideBox>
      </Slide>
      <div className={styles.button}>
        <Button href="https://github.com/NadaHSalem/BeRealocated">
          GitHub
        </Button>
      </div>
      <Text>
        - Programmed in React JS
        <br></br>- Utilized Firebase for user information storage and secure
        authentication
        <br></br>- A multitude of APIs were used including Google Cloud API.
      </Text>
      <br></br>
      <Text>
        UofT Hackathon X was an amazing weekend experience. As my first
        hackathon there was a learning curve to the amount of time pressure.
        This greatly increased my React JS skills. I was a member of a team of
        3, for more information here is the{" "}
        <a href="https://devpost.com/software/berealocated">Devpost</a>.
      </Text>
    </Container>
  );
};

const Toyota = () => {
  return (
    <Container fluid>
      <h1 id="toyota">Toyota Innovation Challenge</h1>
      <h2>2022</h2>
      <Slide>
        <SlideBox photo="phototoyota">Vision Outputs</SlideBox>
        <SlideBox photo="phototoyota1">Vision Outputs</SlideBox>
        <SlideBox photo="phototoyota2">Vision Outputs</SlideBox>
        <SlideBox photo="phototoyota3">Code Snippet</SlideBox>
      </Slide>
      <Text>
        - Programmed in Python with OpenCV
        <br></br>- Developed real-time tracking method adaptable to 3 different
        model cars
        <br></br>- Detected where the track was and the start/end locations
      </Text>
      <br></br>
      <Text>
        During Term 1A I participated in a weekend competition known as the
        Toyota Innovation Challenge. The challenge operated as a hackathon with
        the main objective being to utilize computer vision to detect model cars
        and the specific wheels. I worked in a small team of 4 that was able to
        complete all objectives of the challenge!
      </Text>
    </Container>
  );
};

const FRC4627 = () => {
  return (
    <Container fluid>
      <h1 id="frc4627">First Robotics Competition Team 4627</h1>
      <h2>2020 - 2022</h2>
      <Slide>
        <SlideBox photo="photofrc1">2022 Robot</SlideBox>
        <SlideBox photo="photofrc2">2020 Robot</SlideBox>
        <SlideBox photo="photofrc5">Programming the 2020 Robot</SlideBox>
        <SlideBox photo="photofrc3">OpenMV Camera</SlideBox>
        <SlideBox photo="photoopenmv">2020 Robot Tracking Ball</SlideBox>
        <SlideBox photo="photofrc6">
          2022 Robot Tracking and Shooting at target
        </SlideBox>
      </Slide>
      <Text>
        - Developed Team Leadership and organizational skills
        <br></br>- Taught new members Java and Python
        <br></br>- Programmed in Java for the robot and MicroPython for{" "}
        <a href="/#/openmv">vision system</a>
        <br></br>- Developed PID controls loops for all systems on the robot
      </Text>
      <br></br>
      <Text>
        In the 2022 season, I was team captain. In this role, I had to organize
        daily meetings and supervise the design and production of the robot.
        During the season, my leadership skills grew immensely with my
        communication skills as I had to organize over 30 students.
      </Text>
      <br></br>
      <Text>
        I focused on Java programming for the main robot and Python for the
        vision system. The vision system consisted of a modified OpenMV, which
        ran on MicroPython. Along with programming PID control loops for each
        robot's movement, one of my tasks was creating a pipeline between the
        Java and Python code. This included working with JSON strings and regex.
        I learned the majority of my programming in robotics which benefitted me
        greatly as it taught me to learn in an environment with immense time
        pressure and allowed me to be a self-starter.
      </Text>
    </Container>
  );
};

const FRC5078 = () => {
  return (
    <Container fluid>
      <h1 id="frc5078">First Robotics Competition Team 5078</h1>
      <h2>2018 - 2019</h2>
      <Slide>
        <SlideBox photo="photofrc7">2018 Robot</SlideBox>
        <SlideBox photo="photofrc8">2019 Robot</SlideBox>
      </Slide>
      <Text>
        - Programmed in Java using Eclipse and later with VS Code
        <br></br>- Developed fundamental electrical and pneumatics knowledge
      </Text>
      <br></br>
      <Text>
        In 2018, our team stood second in the regional competition in Victoria.
        The year after I led my team to the semi-finals at the Canadian Rockies
        Regional Competition in Calgary. As one of the few programmers on the
        team I developed the majority of the Java code on the robot across 2
        seasons. This position introduced me to the field of robotics and to
        object-oriented programming. It laid a great foundation for my Java,
        electrical and FRC skills.
      </Text>
    </Container>
  );
};

const Roots2stem = () => {
  return (
    <Container fluid>
      <h1 id="roots2stem">Roots 2 Stem</h1>
      <h2>2014 - 2018</h2>
      <Slide>
        <div className="each-slide-effect">
          <div className="photoplane7"></div>
        </div>
        <div className="each-slide-effect">
          <div className="photokart6"></div>
        </div>
        <div className="each-slide-effect">
          <div className="photokart3"></div>
        </div>
      </Slide>
      <br></br>
      <Text>
        A local STEM club called Roots 2 Stem led by Dean White PhD Eng. It
        focuses on teaching children the basics of engineering. This program
        provided me with an environment to design, build, and engineer my ideas.
        During my time there, I discovered my interest in innovating and
        inventing. The club gave me access to all the supplies and machines a
        10-year-old junior engineer could want, from 3d printers to arc welders.
        Using all the supplies I had access to, I made rovers,{" "}
        <a href="/#/rcplanes">RC airplanes</a>, and eventually an{" "}
        <a href="/#/gokart">electric go-kart.</a>
      </Text>
      <br></br>
      <Text>
        {" "}
        An article was even written about my time there.<br></br>
        <a href="https://careers-in-calgary.squarespace.com/news-blog/2018/4/30/from-building-a-go-kart-to-an-airplane-that-actually-flies-steam-fuels-future-career-passions">
          https://careers-in-calgary.squarespace.com/news-blog/2018/4/30/from-building-a-go-kart-to-an-airplane-that-actually-flies-steam-fuels-future-career-passions
        </a>
      </Text>
    </Container>
  );
};

export { Roots2stem, FRC4627, FRC5078, Toyota, UofTHacks, Toyota2023 };
