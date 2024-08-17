import React from "react";
import { Container, Row } from "react-bootstrap";
import "./About.css";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useTheme } from "../context/Theme";
export const About = () => {
  const { theme } = useTheme();
  const color = theme === "dark" ? "black" : "#f5f5f5";
  return (
    <Container>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Row>
        <h1
          style={{
            borderBottom: "1px solid var(--body_color)",
            padding: "8px",
          }}
        >
          About
        </h1>
      </Row>
      <motion.div
        className=" my-4 portfolioCon"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
      >
        <div
          style={{
            backgroundColor: `${color}`,
            padding: "2rem",
            marginBottom: "8rem",
            zIndex: 1,
          }}
        >
          <div className="personal">
            <h2>Ahmed Shabaan Issa</h2>
            <ul className="personal-details">
              <li>Phone: 01092919962</li>
              <li>
                LinkedIn:{" "}
                <a
                  href="www.linkedin.com/in/ahmad-shabaan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/ahmad-shabaan
                </a>
              </li>
              <li>
                E-Mail:
                <a href="mailto:ashabaan887@gmail.com">
                  {" "}
                  ashabaan887@gmail.com
                </a>
              </li>
              <li>
                Githup:{" "}
                <a
                  href="https://github.com/Ahmad-Shabaan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  github.com/Ahmad-Shabaan
                </a>
              </li>
              <li>Address: Faqous Ash Sharqiyah Governorate</li>
              <li>
                Resume:
                <a
                  href=" https://drive.google.com/file/d/19I3vXFd5kSkPeVYtWMg40X0Mfxb0CFCk/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  drive.com/Ahmad-Shabaan
                </a>
              </li>
            </ul>
          </div>
          <hr />
          <div className="about summary">
            <h4>Profile Summary:</h4>
            <p>
              Detail-oriented and motivated Computer and Information Systems
              Engineering graduate with a strong foundation in front-end and
              back-end development. Skilled in HTML, CSS, JavaScript, React.js,
              Node.js, Express, MongoDB, and various CSS frameworks including
              Sass, Bootstrap, and Tailwind. Eager to apply acquired knowledge
              and skills in a dynamic professional setting.
            </p>
          </div>
          <hr />
          <div className="about education">
            <h4>Education:</h4>
            <p>
              Bachelor of Science in Computer and Information Systems
              Engineering Faculty of Engineering, Zagazig University (2019 -
              2024)
            </p>
          </div>
          <hr />
          <div className="about certificates">
            <h4>Certificates:</h4>
            <ul className="certificates-ul">
              <li>
                <p>Front End Development using React</p>
                <p>ITI (Information Technology Institute) - 2023</p>
                <p>Duration: 150 hours</p>
              </li>
              <li>
                <p>Basic React</p>
                <p>Meta - 2023</p>
                <p>Duration: 23 hours</p>
              </li>
              <li>
                <p>Advanced React</p>
                <p>Meta - 2023</p>
                <p>Duration: 26 hours</p>
              </li>
            </ul>
          </div>
          <hr />
          <div className="about additional-education">
            <h4>Additional Education:</h4>
            <ul className="certificates-ul">
              <li>
                <p>Front End Development using React</p>
                <p>AMIT Center - 2023</p>
                <p>Duration: 90 hours</p>
              </li>
              <li>
                <p>Youtube</p>
              </li>
            </ul>
          </div>
          <hr />
          <div className="about skills">
            <h4>Skills:</h4>
            <p>
              Front-end: HTML, CSS, JavaScript, React.js, Sass, Bootstrap,
              Tailwind CSS
            </p>
            <p>Back-end: Node.js, Express, MongoDB</p>
          </div>
        </div>
      </motion.div>
      <Footer />
    </Container>
  );
};
