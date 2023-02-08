import { useState } from "react";
import { Github, Linkedin, Facebook, Instagram } from "react-bootstrap-icons";
import "./home.css";
import Logo from "./logo.png";
import toy1 from "./toy1.png";
import toy2 from "./toy2.png";
import toy3 from "./toy3.png";
import toy4 from "./toy4.png";
import toy5 from "./toy5.png";
import { useEffect } from "react";
import { useRef } from "react";
import Header from "./Header";
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
      <div className="links">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/ali-soliman-2517b920a/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/RustedMiind"
              rel="noreferrer"
              target="_blank"
            >
              <Github className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/Ra7ieM/"
              rel="noreferrer"
              target="_blank"
            >
              <Facebook className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/alisolimannn/"
              rel="noreferrer"
              target="_blank"
            >
              <Instagram className="icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="content">
        <Header />
        <h4>Creative Front-End Developer.</h4>
        <h3>Click on top R logo for a magic trick</h3>

        <a href="#projects" className="button-main">
          <span>Get Started</span>
        </a>
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
