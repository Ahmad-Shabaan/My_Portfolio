import React from "react";
import "./Home.css";
import portfolioImage from "../images/layer.jpg";
import { Col, Container, Row } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { useTheme } from "../context/Theme";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { FaTelegramPlane } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function Home() {
  const { theme } = useTheme();
  return (
    <>
      <Container className="my-container">
        <Helmet>
          <title>A.S | Home</title>
        </Helmet>
        <Col className="leftContent">
          <Row>
            <h2>I'm Ahmed Shabaan</h2>
          </Row>
          <Row className="fs-4 typeWriter">
            <Typewriter
              options={{
                strings: [
                  "Welcome to my portfolio website !",
                  "I am 21 years old",
                  "an engineering student from Ash Sharqia",
                  " I am currently in my fourth year of study",
                  "specializing in Computer and Information Systems Engineering.",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 40,
                pauseFor: 900,
              }}
            />
          </Row>
          <Row>
            <p>
              I am passionate about becoming a MERN stack developer, leveraging
              my engineering background and enthusiasm for technology to build
              robust and dynamic web applications using MongoDB, Express.js,
              React.js, and Node.js.
            </p>
          </Row>
          <Row className="w-100 d-flex justify-content-between align-items-center">
            <Col>
              <Link to="/portfolio">
                <motion.button
                  className={theme === "dark" ? "btn_one" : "btn_lOne"}
                  initial={{ opacity: 0.6 }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  whileInView={{ opacity: 1 }}
                >
                  My PortFolio
                </motion.button>
              </Link>
            </Col>
            <Col>
              <Link to="/contact">
                <motion.button
                  className={theme === "dark" ? "btn_two" : "btn_lTwo"}
                  initial={{ opacity: 0.6 }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  whileInView={{ opacity: 1 }}
                >
                  <FaTelegramPlane />
                  Contact Me
                </motion.button>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col className="rightContent h-100">
          <div className="photoCon">
            <motion.img
              src={portfolioImage}
              alt="portfolio"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              exit={{
                opacity: 0,
                width: 0,
                transition: { duration: 0.2 },
              }}
            />
          </div>
        </Col>
        <Footer />
      </Container>
    </>
  );
}
