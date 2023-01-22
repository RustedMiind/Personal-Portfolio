import { useState } from "react";
import "./home.css";
import Logo from "./logo.png";
import toy1 from "./toy1.png";
import toy2 from "./toy2.png";
import toy3 from "./toy3.png";
import toy4 from "./toy4.png";
import toy5 from "./toy5.png";
import { useEffect } from "react";
import { useRef } from "react";
import NavBar from "../navbar/NavBar";
function Home() {
  const homeRef = useRef(null);
  let WIDTH = window.innerWidth,
    HEIGHT = window.innerHeight,
    xDefault = Math.floor(WIDTH / 2),
    yDefault = Math.floor(HEIGHT / 2);
  const [xPosition, setXPosition] = useState(Math.floor(WIDTH / 2));
  const [yPosition, setYPosition] = useState(Math.floor(HEIGHT / 2));
  const [xToMove, setXToMove] = useState(0);
  const [yToMove, setYToMove] = useState(0);
  useEffect(() => {}, []);
  return (
    <div
      className="home"
      onMouseMove={(event) => {
        setXPosition(event.clientX);
        setYPosition(event.clientY);
        setXToMove((xPosition - xDefault) * 0.6);
        setYToMove((yPosition - yDefault) * 0.6);
        console.log(xToMove, yToMove);
      }}
      ref={homeRef}
    >
      <div className="content">
        <h1>RustedMind</h1>
        <h4>Creative Front-End Developer</h4>
        <button className="button-main">About Me</button>
      </div>
      <img
        src={toy1}
        alt="Toy Floating"
        className="toy"
        style={{
          left: `${WIDTH - 150}px`,
          top: `${100}px`,
          transform: `translate(${-xToMove / -14}px , ${yToMove / -14}px)`,
        }}
      />
      <img
        src={toy2}
        alt="Toy Floating"
        className="toy"
        style={{
          left: `${150}px`,
          top: `${300}px`,
          transform: `translate(${xToMove / -12}px , ${yToMove / 12}px)`,
        }}
      />
      <img
        src={toy3}
        alt="Toy Floating"
        className="toy"
        style={{
          left: `${WIDTH - 300}px`,
          top: `${HEIGHT - 400}px`,
          transform: `translate(${xToMove / 6}px , ${yToMove / -6}px)`,
        }}
      />
      <img
        src={toy4}
        alt="Toy Floating"
        className="toy"
        style={{
          left: `${xDefault}px`,
          top: `${HEIGHT - 250}px`,
          transform: `translate(${xToMove / 18}px , ${yToMove / 18}px)`,
        }}
      />
      <img
        src={toy5}
        alt="Toy Floating"
        className="toy"
        style={{
          left: `${100}px`,
          top: `${100}px`,
          transform: `translate(${xToMove / 12}px , ${yToMove / 12}px)`,
        }}
      />
      <img
        src={toy2}
        alt="Toy Floating"
        className="toy"
        style={{
          left: `${WIDTH - 200}px`,
          top: `${yDefault}px`,
          transform: `translate(${xToMove / 12}px , ${yToMove / 12}px)`,
        }}
      />
      <img
        src={toy4}
        alt="Toy Floating"
        className="toy"
        style={{
          left: `${xDefault}px`,
          top: `${100}px`,
          transform: `translate(${xToMove / 16}px , ${yToMove / 16}px)`,
        }}
      />
      <img
        src={toy1}
        alt="Toy Floating"
        className="toy"
        style={{
          left: `${100}px`,
          top: `${HEIGHT - 200}px`,
          transform: `translate(${xToMove / 16}px , ${yToMove / -16}px)`,
        }}
      />
    </div>
  );
}

export default Home;
