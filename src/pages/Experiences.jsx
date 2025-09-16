import { Button, Container } from "react-bootstrap";
import { Slide } from "react-slideshow-image";
import SlideBox from "../components/Elements/Slide/SlideBox";
import Text from "../components/Elements/Text/Text";
import styles from "./Experiences.module.css";
import YoutubeEmbed from "../components/Elements/Other/YoutubeEmbed";

const Watonomous = () => {
  return (
    <Container fluid>
      <h1 id="watonomous">Autonomy Software Development @ Watonomous</h1>
      <h2>2024 - 2025</h2>
      <Slide>
        <SlideBox photo="photowatonomous">The Team</SlideBox>
        <SlideBox photo="photowatonomous2">The Kia Soul</SlideBox>
        <SlideBox photo="photowatonomous3">Testing LiDAR</SlideBox>
        <SlideBox photo="photowatonomous4">Working late at night</SlideBox>
        <SlideBox photo="photowatonomous5">Semantic Segmentation</SlideBox>
        <SlideBox photo="photowatonomous6">Batched TensorRT Object Detection</SlideBox>


      </Slide>
      <br></br>
      <Text>
        - Leading a team of 20 members with weekly meetings and work sessions, mentoring members on using a Dockerized
ROS software stack and for tasks like depth estimation and 2D-to-3D object tracking
        <br></br><br></br>- Programmed and deployed a ROS 2 Python node for the autonomous car, integrating the segmentation model with
the vehicle’s perception pipeline, leading to a more accurate and robust understanding of the driving environment
        <br></br><br></br>- Integrated camera and LiDAR drivers and troubleshot network communication between sensors (cameras, LiDAR), utilizing Docker and ROS diagnostics
      </Text>
      <Text>
    At Watonomous, the University of Waterloo’s autonomous vehicle design team, I had the opportunity to grow as both a technical contributor and a team lead. I led a team of 20 members, organizing weekly meetings and collaborative work sessions while mentoring students on using our Dockerized ROS software stack. My focus was on helping newer members contribute to advanced perception tasks such as depth estimation, anomaly detection and 2D-to-3D object tracking, ensuring they developed both practical skills and confidence in working within a large-scale autonomy system.


    <br></br><br></br>
    On the technical side, I developed and deployed a ROS 2 Python node for our autonomous car’s perception pipeline. This node integrated a segmentation model that improved the vehicle’s ability to accurately and robustly interpret its driving environment. I also set up the drivers for our Flir GigE cameras and Velodyne LiDAR, and troubleshot network communication issues.
<br></br><br></br>
      This role balanced leadership and engineering: I guided the team’s technical direction while also being hands-on in developing perception components. Working in a multidisciplinary student team environment mirrored the challenges of a startup: tight timelines, changing goals, and the need to balance research-driven development with practical integration on the vehicle. Ultimately, my contributions advanced both the robustness of the perception stack and the growth of the next generation of engineers on the team.
      </Text>

      <br></br>
    </Container>
  );
};

const Envgo = () => {
  return (
    <Container fluid>
      <h1 id="envgo">Autonomy Software Development @ ENVGO</h1>
      <h2>Summer 2025</h2>
      <Slide>
        <SlideBox photo="photoenvgo">NV1 - Hydrofoiling boat</SlideBox>
        <SlideBox photo="photoenvgo3">A demo event for the NV1</SlideBox>
        <SlideBox photo="photoenvgo2">Test ride on the NV1</SlideBox>


      </Slide>
      <br></br>
      <Text>
        - Designed and implemented a multi-sensor autonomy pipeline integrating cameras and radar for an hydrofoiling electric boat, establishing the company’s first perception system from scratch.
        <br></br><br></br>- Developed a ROS 2 C++ perception node with a semantic segmentation model for free-space detection, training on both open-source datasets and custom-labeled data (generated via a slower baseline model), and optimized inference to 100 FPS on Jetson Orin using TensorRT batching and CUDA kernels.
        <br></br><br></br>- Built customer-facing situational awareness features (surround view, front/back view) with real-time video streaming through WebRTC and Jetson-optimized GStreamer pipelines.
      </Text>
      <Text>
      At ENVGO, I worked in a fast-paced startup environment where I helped establish the foundation of the company’s autonomy efforts for a hydrofoiling electric boat. 
      I designed the architecture for the perception pipeline and implemented its first ROS 2 C++ node, focused on free-space detection. This node leveraged a semantic segmentation model trained on a mix of open-source datasets and custom-labeled data generated from a baseline system. 
      To meet real-time performance requirements, I optimized inference to run at 100 FPS on NVIDIA Jetson Orin using TensorRT batching and custom CUDA kernels. 
      This laid the groundwork for a scalable, multi-node perception system integrating cameras and marine radar for reliable situational awareness.
    <br></br><br></br>
      In parallel with the autonomy research, I also developed customer-facing features to demonstrate immediate value. 
      These included real-time situational awareness tools such as surround view and front/back camera feeds, implemented through low-latency WebRTC streaming with Jetson-optimized GStreamer pipelines. 
      Balancing R&D with customer-focused development was key in a startup setting, where rapid iteration and demonstrable progress are critical.
<br></br><br></br>
      Beyond building the first node, I continue to provide autonomy consultation to ENVGO as they expand the perception stack and implement the full autonomy pipeline. 
      This role allowed me to contribute both technically and strategically, designing the core architecture, delivering features to customers, and guiding the company’s broader autonomy roadmap.
      </Text>

      <br></br>
    </Container>
  );
};

const CalHacks = () => {
  return (
    <Container fluid>
      <h1 id="calhacks">Cal Hacks 11.0 @ Berkeley</h1>
      <h2>2024</h2>
      <Slide>
        <SlideBox photo="photocalhack">Teammate wearing PulseWalk</SlideBox>
        <SlideBox photo="photocalhack2">The PulseWalk product</SlideBox>
        <SlideBox photo="photocalhack3">At Cal Hacks</SlideBox>
        <SlideBox photo="photocalhack4">PulseWalk</SlideBox>
        

      </Slide>
      <div className={styles.button}>
        <Button href="https://github.com/lucasreljic/PulseWalk">GitHub</Button>
      </div>
      <Text>
        - Wired ESP32 to servo expansion board, the IR sensors, the vibration motors
        <br></br>- Coded a Bluetooth Low Energy {`(`}BLE{')'} connection to a phone on the ESP32
        <br></br>- Setup high torque 20 kg*cm servos and manufactured the product on a low budget
        <br></br>- Developed C++ code on the ESP32 for actuating the servos in relation to sensor position
      </Text>
      <br></br>
      <Text>
        I had an incredible experience at Cal Hacks! We focused on creating a wearable device that adds a 6th sense to a user's foot! 
        For those with vision impairement or really anyone who wants to feel through pressure how far the ground is this is the product. 
        Our team was able to achieve a full prototype of our idea in just 36 hours! I am very proud of what we were able to accomplish with a few hgih torque servos and IR sensors.
        We even impressed the judges and won best hardware hack!
          I was a member of a team of
        3, for more information here is the{" "}
        <a href="https://devpost.com/software/pulsewalk">project link</a>.
      </Text>
    </Container>
  );
};

const HackMIT = () => {
  return (
    <Container fluid>
      <h1 id="hackmit">HackMIT</h1>
      <h2>2024</h2>
      <Slide>
        <SlideBox photo="photohackmit3">The main page with live stress feed</SlideBox>
        <SlideBox photo="photohackmit4">Prediction</SlideBox>
        <SlideBox photo="photohackmit">MIT</SlideBox>
        <SlideBox photo="photohackmit2">The team</SlideBox>

      </Slide>
      <div className={styles.button}>
        <Button href="https://github.com/lucasreljic/HackMIT2024">GitHub</Button>
      </div>
      <Text>
        - Wired ESP8266 to IMU {`(`}the MPU6050{`)`} and performed signal processing
        <br></br>- Coded a secure WPA2 Enterprise connection to eduroam on the ESP8266  {`(`}a feat in itself cause it's not supported{`)`}
        <br></br>- Developed a REST API in Convex to communicate with the ESP8266 and Convex Queries to communicate with the React FrontEnd
        <br></br>- Created a sleek wearable device that could detect stress levels and provide personalized mental health insights
      </Text>
      <br></br>
      <Text>
        I had an incredible experience at HackMIT! We focused on detecting stress levels using wearable data and AI to provide personalized mental health insights.
         We explored how factors like muscle activity, heart rate, and environmental conditions influence anxiety, helping users better understand their mental health.
          I was a member of a team of
        4, for more information here is the{" "}
        <a href="https://ballot.hackmit.org/project/obqlb-ujizx-fcvdq-obhsp">project link</a>.
      </Text>
    </Container>
  );
};

const GoodlabsRL = () => {
  return (
    <Container fluid>
      <h1 id="goodlabsrl">Reinforcement Learning @ GoodLabs Studio</h1>
      <h2>2023 - 2024</h2>
      <Slide>
        <SlideBox photo="photogoodlabs1">Simulation Model of the robot</SlideBox>
        <SlideBox photo="photogoodlabs7">Natural Walking</SlideBox>
        <SlideBox photo="photogoodlabs8">The very first attempt</SlideBox>
        <SlideBox photo="photogoodlabs3"></SlideBox>

      </Slide>
      <br></br>
      <Text>
        - Developed a proximal policy optimization reinforcement learning algorithm in PyTorch to produce natural walking for the robot
        <br></br>- Synthesized human gait patterns into reward functions to produce optimized and natural walking
        <br></br>- Produced a near accurate model of the robot in Isaac Gym's simulation environment to ensure easy sim-to-real transfer
      </Text>
      <Text>
        At GoodLabs Studio in my role of Bipedal Robotics Engineering, I developed a PPO reinforcement learning model for a bipedal robot within NVIDIA's Isaac Gym.
        This took nearly 4 months of work and lots of learning from developing a simulation model of the robot to developing the RL algorithm, and testing various other methods
        within the field. Our codebase worked off an existing open source Isaac Gym legged robots codebase, and we had to modify it heavily to work for bipedal humanoid robots.
        With reward functions that encourages walking, including a custom gait reward function that I developed which follows an 8 stage human gait cycle.
        This led to natural walking for <a href="#/goodlabsrobotics">Robbie the robot</a>.
      </Text>

      <div className={styles.button}>
        <Button href="https://www.goodlabs.studio/robotics-ai-engineering">Learn more about Robbie's goal!</Button>
      </div>
      <br></br>
    </Container>
  );
};

const GoodlabsRobot = () => {
  return (
    <Container fluid>
      <h1 id="goodlabs">Bipedal Robot @ GoodLabs Studio</h1>
      <h2>2023 - 2024</h2>
      <Slide>
        <SlideBox photo="photogoodlabs6">Robbie the robot walking</SlideBox>
        <SlideBox photo="photogoodlabs5">Robbie the robot</SlideBox>
        <SlideBox photo="photogoodlabs10"></SlideBox>
        <SlideBox photo="photogoodlabs4">Working on the electronics</SlideBox>
        <SlideBox photo="photogoodlabs9"></SlideBox>

      </Slide>
      <br></br>

      <Text>
        - Designed 17 DOF bipedal robot with 3D printed parts to mimic human-like walking
        <br></br>- Assembled electronics including designing PDPs, controllers and communication systems
        <br></br>- Developed interface for robot control through Jetson Nano utilizing Jupyter Notebook and Docker
        <br></br>- Programmed in Python and C++ to develop walking algorithms and PID control systems
      </Text>
      <Text>
        At GoodLabs Studio in my role of Bipedal Robotics Engineering, I designed, built and developed a bipedal robot alongside <a href="https://ca.linkedin.com/in/bchharawala">Brendan Chharawala</a> and <a href="https://www.linkedin.com/in/ethan-hemeon-119bb3269/">Ethan Hemeon</a>.
        The culmination of 4 months of work during my first co-op term resulted in a functional bipedal robot that could resist pushes and remain stable through the use of feedback control.
        I specifically designed the hip joints and knee joints, and developed the PID control system in C++ for the robot.
        In the co-op that followed I went on to develop a reinforcement learning algorithm, <a href="#/goodlabsrl">that has its own page</a>, which produced natural walking for this robot. In my third co-op term my team and I were able to achieve untethered walking with the robot through my implementation of RL alongside a specialized gait function. We also kept a {" "}
        <a href="https://www.instagram.com/goodlabs_studio_robotics/">Instagram</a> journal that provides details of our progress throughout the term.
      </Text>
      <div className={styles.button}>
        <Button href="https://www.goodlabs.studio/robotics-ai-engineering">Learn more about Robbie's goal!</Button>
      </div>
      <br></br>
    </Container>
  );
};


const MakeUofT = () => {
  return (
    <Container fluid>
      <h1 id="makeUofT">MakeUofT</h1>
      <h2>2024</h2>
      <Slide>
        <SlideBox photo="photomakeuoft">The Hat</SlideBox>
        <SlideBox photo="photomakeuoft2">Looking stylish</SlideBox>
        <SlideBox photo="photomakeuoft3"></SlideBox>
        <SlideBox photo="photomakeuoft4">What the hat sees</SlideBox>

      </Slide>
      <div className={styles.button}>
        <Button href="https://github.com/hepromark/BlindWatchers">GitHub</Button>
      </div>
      <Text>
        - Configured NVIDIA Jetson Nano to run remotely interfacing through Jupyter Notebook
        <br></br>- Designed and manufactured a hat with headphones and 2 cameras to identify objects in the user's surroundings
        <br></br>- Implemented Google speech to text for the visually impaired to interact with the hat and query objects
        <br></br>- Created a sleek hat that could be worn by the visually impaired to identify objects in their surroundings with spatial audio feedback
      </Text>
      <br></br>
      <Text>
        Make UofT was an awesome experience as the first makeathon I have attended.
        With my skills in Linux bash and working with the Nvidia Jetson,
        I took on the hardware integration. I also assembled all the hardware
        components and fashioned the sleek looking design of the hat.
        All in all it was a lot of fun and reminded me about the often times difficult
        nature of integrating hardware with software. I was a member of a team of
        3, for more information here is the{" "}
        <a href="https://devpost.com/software/blind-watchers">Devpost</a>.
      </Text>
    </Container>
  );
};


const UofTHacksXI = () => {
  return (
    <Container fluid>
      <h1 id="uofthacksXI">UofTHacks XI</h1>
      <h2>2024</h2>
      <Slide>
        <SlideBox photo="photouofthacksXI">Strict Parent Chatbot</SlideBox>
        <SlideBox photo="photouofthacksXI2">Supportive Parent Chatbot</SlideBox>
        <SlideBox photo="photouofthacksXI3">Record Lectures!</SlideBox>
      </Slide>
      <div className={styles.button}>
        <Button href="https://github.com/lucasreljic/StuDining">GitHub</Button>
      </div>
      <div>
        <YoutubeEmbed embedId="1BEd1fdXLIU" />
      </div>
      <h1>Demo</h1>
      <Text>
        - Programmed FrontEnd in NextJS and BackEnd with DJango
        <br></br>- Developed custom microphone API for recording lectures and
        created transcripts through Google Cloud API
        <br></br>- Utilized Cohere generative model and prompt engineering for
        an interactive chatbot that could answer questions in a parental
        advisory manner
        <br></br>- Created customizable chatbot that could be tailored to the user's nostalgia preference.
      </Text>
      <br></br>
      <Text>
        UofT Hackathon XI was an great weekend experience. As a skilled member
        in React I took on the FrontEnd and challenged myself to use NextJS. I
        also developed FrontEnd endpoints for the DJango BackEnd. Towards the
        end of the hackathon we encountered issues with the generative AI so I
        switched to prompt engineering and developed prompts that made my team able to demo in time! I was a member of a team of
        4, for more information here is the{" "}
        <a href="https://devpost.com/software/we-dont-know-yet">Devpost</a>.
      </Text>
    </Container>
  );
};

const Hackthe6ix = () => {
  return (
    <Container fluid>
      <h1 id="Hackthe6ix">Hack the 6ix</h1>
      <h2>2023</h2>
      <Slide>
        <SlideBox photo="photohackthe6ix">Professor Puddles</SlideBox>
        <SlideBox photo="photohackthe6ix1">Professor Puddles</SlideBox>
        <SlideBox photo="photohackthe6ix2">Professor Puddles</SlideBox>
        <SlideBox photo="photohackthe6ix3">The Winner</SlideBox>
      </Slide>
      <div className={styles.button}>
        <Button href="https://github.com/lucasreljic/Professor-Puddles">
          GitHub
        </Button>
      </div>
      <div>
        <YoutubeEmbed embedId="pyZHgDcofTw" />
      </div>
      <h1>Demo</h1>
      <Text>
        - Won 1st place in the hackathon with 219 total participants
        <br></br>- Programmed in Python, utilizing OpenCV and Mediapipe for
        posture detection
        <br></br>- Developed a simple UI with Tkinter
        <br></br>- Mcguivered a duck that sprays water and warns user to correct
        posture
      </Text>
      <br></br>
      <Text>
        Hack the 6ix was 36 hours of non-stop hacking that challenged my ability
        to stay awake at 5am. I led my team to victory by delegating tasks,
        organizing our codebase, and ensuring everyone got over the hurdles they
        faced. In the end it was worth the 7 hours of sleep the entire weekend
        cause I enjoyed every hour of it, the cherry on top was winning the
        whole competition. Check out the{" "}
        <a href="https://devpost.com/software/professor-puddles">Devpost</a> for
        yourself!
      </Text>
    </Container>
  );
};

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
      <Text>
        During the summer, I took part in the Toyota Innovation Challenge, a
        weekend competition hosted by TMMC. It was my second time attending this
        competition, and this time our goal was to use computer vision
        techniques, particularly OpenCV, to detect a hole and verify if a black
        sticker was correctly placed over it. Working alongside Mahir Mohota, we
        leveraged precise object tracking capabilities offered by OpenCV, which
        ultimately led to our victory and winning a prize in the competition.{" "}
      </Text>

      <br></br>
      <div>
        <YoutubeEmbed embedId="8XI78UiHIvk" />
      </div>
      <h1>Demo</h1>
      <div className={styles.button}>
        <Button href="https://github.com/mahir-mahota/Toyota-Innovation-Challenge-2">
          GitHub
        </Button>
      </div>
      <Text>
        - Programmed in Python with OpenCV
        <br></br>- Developed real-time tracking method that could detect a
        misplaced sticker with up to 3mm of accuracy
        <br></br>- Developed 6 unique optimized code for each station
      </Text>
      <br></br>
    </Container>
  );
};

const UofTHacks = () => {
  return (
    <Container fluid>
      <h1 id="uofthacks">UofTHacks X</h1>
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
    </Container>
  );
};

export {
  Roots2stem,
  FRC4627,
  FRC5078,
  Toyota,
  UofTHacks,
  Toyota2023,
  Hackthe6ix,
  UofTHacksXI,
  MakeUofT,
  GoodlabsRobot,
  GoodlabsRL,
  HackMIT,
  CalHacks,
  Envgo,
  Watonomous
};
