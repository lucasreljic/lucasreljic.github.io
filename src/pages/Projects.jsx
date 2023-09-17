import { Slide } from "react-slideshow-image";
import { Container } from "react-bootstrap";
import SlideBox from "../components/Elements/Slide/SlideBox";
import Text from "../components/Elements/Text/Text";
import styles from "./Projects.module.css";

const Project1a = () => {
  return (
    <Container fluid>
      <h1 id="Tron1A">Term 1A Project</h1>
      <h2>2022</h2>
      <Slide>
        <SlideBox photo="photorobot1a2">Robot With Green Cube</SlideBox>
        <SlideBox photo="photorobot1a">Side View</SlideBox>
        <SlideBox photo="photorobot1a3">Top View</SlideBox>
      </Slide>
      <Text>
        Code is on GitHub{" "}
        <a href="https://github.com/lucasreljic/RobotProject1A">here</a>
      </Text>
      <br></br>
      <Text>
        - Programmed in C<br></br>- Developed custom PID control loops and
        integrated legacy libraries
      </Text>
      <br></br>
      <Text>
        The final project for term 1A consisted of a Robot that picks up a cube
        in a 1m X 1m area. The purpose of this project was to create a robot
        that solved a specific problem. The problem chosen was to collect
        objects that are scattered around in a set area. To do this, the robot
        will have to be able to find these objects and travel the appropriate
        distance to collect them with its collection mechanism, in this case a
        claw. The objects are also of different types, in this problem each
        object is a different colour. The robot must identify what colour the
        object is after it has collected it and transport it to a specific
        location corresponding to the colour of the object. The system used was
        an EV3 robot with modifications to the standard mechanical
        configuration.
      </Text>
    </Container>
  );
};

const GoodLabsRobot = () => {
  return (
    <Container fluid>
      <h1 id="GoodLabsRobbie">GoodLabs Bipedal Robot</h1>
      <h2>2022</h2>
      <Slide>
        <SlideBox photo="photorobot1a2">Robot With Green Cube</SlideBox>
        <SlideBox photo="photorobot1a">Side View</SlideBox>
        <SlideBox photo="photorobot1a3">Top View</SlideBox>
      </Slide>
      <br></br>
      <Text>
        - Designed over 15 parts in Fusion 360 and put under rigourous
      </Text>
      <br></br>
      <Text>
        The final project for term 1A consisted of a Robot that picks up a cube
        in a 1m X 1m area. The purpose of this project was to create a robot
        that solved a specific problem. The problem chosen was to collect
        objects that are scattered around in a set area. To do this, the robot
        will have to be able to find these objects and travel the appropriate
        distance to collect them with its collection mechanism, in this case a
        claw. The objects are also of different types, in this problem each
        object is a different colour. The robot must identify what colour the
        object is after it has collected it and transport it to a specific
        location corresponding to the colour of the object. The system used was
        an EV3 robot with modifications to the standard mechanical
        configuration.
      </Text>
    </Container>
  );
};

const Marketalarm = () => {
  return (
    <Container fluid>
      <h1 id="Market Alarm">Market Alarm</h1>
      <h2>2022</h2>
      <SlideBox photo="photomarket">Snippet of the Main Function</SlideBox>
      <Text>
        Full code is on GitHub{" "}
        <a href="https://github.com/lucasreljic/Market-Alarm">here</a>
        <br />
        <br />
        - Programmed with Python
        <br></br>- Utilized Google Cloud API
        <br></br>- Parsed JSON payloads
      </Text>
      <Text>
        Python code that reads email sent to an email address that contains
        information on which stocks to track at certain prices. It then creates
        threads to track the stock prices and sends an email in return when the
        "Market Alarm" is triggered.
      </Text>
    </Container>
  );
};

const PiLaptop = () => {
  return (
    <Container fluid>
      <h1>Raspberry Pi Laptop</h1>
      <h2>2022</h2>
      <Slide>
        <SlideBox photo="photolaptop1">Photo 1</SlideBox>
        <SlideBox photo="photolaptop2">Photo 2</SlideBox>
      </Slide>
      <Text>
        - Designed Laptop using Fusion 360
        <br></br>- 3D printed model
      </Text>
      <br></br>
      <Text>
        A 3D printed case I designed for my Raspberry Pi 2B. It allows for easy
        transport and testing of electronics with its included GPIO breakout and
        breadboard. The battery pack makes testing on the go simple and easy.
      </Text>
    </Container>
  );
};

const Openmv = () => {
  return (
    <Container fluid>
      <h1>OpenMV Strategic Color Tracking</h1>
      <h2>2021</h2>
      <Slide>
        <SlideBox photo="photofrc3">The OpenMV Camera</SlideBox>
        <SlideBox photo="photoopenmv">
          Robot using the OpenMV to get the object
        </SlideBox>
        <SlideBox photo="photoopenmv3">
          Early Implementation of the Code
        </SlideBox>
        <SlideBox photo="photofrc6">Tracking target using OpenMV</SlideBox>
      </Slide>
      <br></br>
      <Text>
        - Programmed in MicroPython
        <br></br>- Sent JSON payloads using UART that are converted to RS232
        through a converter to then be read by a Linux machine.
        <br></br>- Utilized regex to confirm validity of the payload on the
        Linux end.
      </Text>
      <br></br>
      <Text>
        During the 2021 FRC Season I developed a Color Tracking program using an
        OpenMV Camera. However, this OpenMV is modded to house a ring of LEDs
        for better object detection. It performs specific manipulations on the
        raw camera image to optimize the image for color tracking based on its
        environment. It then performs color tracking along with custom object
        detection code tailored to the required object. It then packages all the
        necessary information into JSON and sends it over UART. While this
        project deviates from the usual method of machine vision using OpenCV,
        it taught me to utilize a camera's raw capture to its full potential
        before using complex algorithms and machine learning.
      </Text>
    </Container>
  );
};

const Gokart = () => {
  return (
    <Container fluid>
      <h1 id="gokart">Electric Go-kart</h1>
      <h2>2018</h2>
      <Slide>
        <SlideBox photo="photokart2">Front</SlideBox>
        <SlideBox photo="photokart1">Back</SlideBox>
        <SlideBox photo="photokart3">Driving the GoKart</SlideBox>
      </Slide>
      <Text>
        One of the largest individual projects I undertook. It required learning
        how to weld, and a significant amount of mechanical knowledge.
        Everything including designing the project, welding the frame, soldering
        the circuitry, was all from scratch. It took around eight months to
        complete and it is one of my proudest achievements. I was only able to
        build such a large project because I was a part of{" "}
        <a href="/#/roots2stem">Roots 2 Stem</a>.
      </Text>
    </Container>
  );
};

const Plant = () => {
  return (
    <Container fluid>
      <h1 id="Plant Watering">Automatic Plant Watering</h1>
      <h2>2021</h2>
      <Slide>
        <SlideBox photo="photoplant3">Watering plants</SlideBox>

        <SlideBox photo="photoplant2">Completed unit</SlideBox>

        <SlideBox photo="photoplant1">Wiring</SlideBox>
      </Slide>
      <Text>
        Code is on GitHub{" "}
        <a href="https://github.com/lucasreljic/RPi-Plant-watering">here</a>
      </Text>
      <Text>
        - Programmed in Python which ran on a Raspberry Pi Zero
        <br></br>- Designed a production worthy housing using Fusion 360
        <br></br>- Implemented a modular system to allow for expansion
      </Text>
      <br></br>
      <Text>
        I noticed that I would often forget to water my multiple plants. In
        order to remedy this I designed an Automatic Plant Watering system. I
        began with an idea for a compact box that housed a Raspberry Pi or
        Arduino board that could control the rest of the system. I decided to
        house the potentiometers and the temperature sensor in the same box. I
        did this because they are small and lightweight so it would be simpler
        to add them. I decided to have 4 “modules” that each have a transmitter
        that sends a signal to the pumps to turn them on and off. There are 4
        modules because there are only 4 potentiometers anymore and I would not
        be able to fit them onto the design.
      </Text>
      <br></br>
      <Text>
        The final design enables the user to adjust exactly how much to water
        their plant every 10 days. The system automatically calculates how much
        to add or subtract water amount based on temperature and humidity. The
        criteria shaped it to be a small compact design that is easy to set up
        and use. The use of a Raspberry Pi makes it suitable to run for months
        on end. Multiple modules allow adding more plants easy, even while the
        system is still running. The connector design makes it difficult to
        install a module incorrectly. A smaller pump allows for more precise
        watering as well as the ability to place in almost any water tank. The
        cost to manufacture a single module and system is $125.87 making the
        device affordable. This price will decreases as more systems are
        manufactured as many of the parts needed can be bought in bulk. The
        Automatic plant watering system is perfect for any indoor plant, and is
        for anyone who might forget to water their plants.
      </Text>
    </Container>
  );
};

const Sanitizer = () => {
  return (
    <Container fluid>
      <h1 id="sanitizer">Hand Sanitizer</h1>
      <h1>2020</h1>
      <Slide>
        <SlideBox photo="photosanitizer">Final Design</SlideBox>
        <SlideBox photo="photosanitizer2">Side View</SlideBox>
        <SlideBox photo="photosanitizer3">Without Spray Bottle</SlideBox>
        <SlideBox photo="photosanitizer1">Initial Design</SlideBox>
      </Slide>
      <Text>
        Code is on GitHub{" "}
        <a href="https://github.com/lucasreljic/Hand-Sanitizer">here</a>
      </Text>
      <Text>
        - Programmed in C++ on an Arduino Nano
        <br></br>- Designed a production worthy mechanical design using Fusion
        360
      </Text>
      <br></br>
      <Text>
        During the Covid-19 pandemic you had to continually sanitize and clean
        your hands. Especially when returning from a venture outside. While
        returning from these ventures you absolutely need to sanitize and wash
        your hands before you touch anything in your home to kill the pesky
        Coronavirus.
      </Text>
      <br></br>
      <Text>
        The Hand Sanitiser solves the issue of contaminating your home before
        you properly wash or sanitize them, as can often happen while handling a
        bottle of hand sanitizer or turning the tap while washing your hands.
        The Hand Sanitizer is designed so that the user does not have to touch
        any surfaces to sanitize their hands. It is to be secured on the front
        door so that you or your family members while sanitizing their hands
        before touching the handle. It works based on an ultrasonic sensor that
        detects when something is close by then an Arduino sets off a servo that
        sprays the bottle that contains isopropyl alcohol. The bottle sprays a
        fine mist so that the droplets are spread out and you can effectively
        kill the coronavirus. The design has proved to be lightweight and small.
        The sensors are in prime position for the spray bottle to spray a
        person’s hands. The easy refill method makes it simple to use. This
        along with the easy setup of only having to plug it into an outlet makes
        for an "easy to use product" for anyone. It also has no fancy cables and
        only requires a USB connection to a power adapter. The accurate
        ultrasonic sensor along with changes in the code allows for great
        detection and minimal waste of isopropyl alcohol. The max amount of
        “sprays” the code will allow for a single detection is 4 as that is more
        than enough to sanitize your hands thoroughly as found by testing. It
        also detects if a person left before waiting for 4 sprays and
        automatically will stop. The spray bottle volume is 60ml so that is more
        than 414 “sprays” or if you use the Hand Sanitizer twice a day that is
        52 days before needing a quick refill by removing the bottle and filling
        it with isopropyl alcohol. Most automatic sanitizer/soap dispensers
        online are around $50-$150, but my design costs only $32.04 to
        manufacture.
      </Text>
    </Container>
  );
};

const RCplanes = () => {
  return (
    <Container fluid>
      <h1 id="rcplanes">RC Planes</h1>
      <h2>2014 - 2020</h2>
      <Slide>
        <SlideBox photo="photoplane7">First Plane</SlideBox>
        <SlideBox photo="photoplane2">Last Delta Wing Plane</SlideBox>
        <SlideBox photo="photoplane4">
          Construction of amphibious plane
        </SlideBox>
        <SlideBox photo="photoplane8">Completed amphibious plane</SlideBox>
      </Slide>
      <Text>
        I discovered my passion for Aerospace when I built my first Delta wing
        RC plane in <a href="/#/roots2stem">Roots 2 Stem</a>. I have made around
        5 iterations of my initial Delta wing RC Plane, flying whenever I have
        free time. My most recent RC Plane deviates from the Delta wing design
        and is a top fixed wing amphibious plane. The wings are constructed with
        standard foamboard, while the fuselage is a 3D printed custom design.
      </Text>
    </Container>
  );
};

export {
  Gokart,
  Plant,
  Sanitizer,
  RCplanes,
  Project1a,
  PiLaptop,
  Marketalarm,
  Openmv,
};
