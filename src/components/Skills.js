import React from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row } from "react-bootstrap";
import "./Skills.css";
import Footer from "./Footer";
import html from "../images/html.2ba4fabc69a89a8f71e6.png";
import css from "../images/css.69a82c2d9e45c933a9cb.png";
import sass from "../images/Sass_logo.png";
import js from "../images/JavaScript_Logo-450x450.png";
import ts from "../images/Typescript_logo_2020.svg.png";
import bootstrap from "../images/Bootstrap_Logo.png";
import tw from "../images/tailwind.png";
import github from "../images/githup.png";
import react from "../images/logo512.png";
import chakra from "../images/chakra-ui_title2-770x528.png";
import nodejs from "../images/png-transparent-js-logo-node-logos-and-brands-icon.png";
import ex from "../images/expressjs_logo.png";
import md from "../images/png-clipart-mongodb-nosql-document-oriented-database-nosql-icon-leaf-grass.png";
import firebase from "../images/png-transparent-firebase-google-google-i-o-icon.png";
import { motion } from "framer-motion";
export const Skills = () => {
  const mySkills = [
    {
      img: html,
      progress: "90%",
      color: "#e44d26",
    },
    {
      img: css,
      progress: "85%",
      color: "rgb(2 119 189)",
    },
    {
      img: sass,
      progress: "10%",
      color: "rgb(207 100 154)",
    },
    {
      img: js,
      progress: "80%",
      color: "rgb(239 219 78)",
    },
    {
      img: ts,
      progress: "0%",
      color: "rgb(45 121 199)",
    },
    {
      img: bootstrap,
      progress: "70%",
      color: "rgb(86 61 124)",
    },
    {
      img: tw,
      progress: "0%",
      color: "rgb(56 189 248)",
    },
    {
      img: github,
      progress: "60%",
      color: "black",
    },
    {
      img: react,
      progress: "75%",
      color: "rgb(97 218 251)",
    },
    {
      img: chakra,
      progress: "50%",
      color: "rgb(77 200 196)",
    },
    {
      img: nodejs,
      progress: "10%",
      color: "rgb(83 158 67)",
    },
    {
      img: ex,
      progress: "0%",
      color: "rgb(130 130 130)",
    },
    {
      img: md,
      progress: "0%",
      color: "rgb(65 47 31)",
    },
    {
      img: firebase,
      progress: "40%",
      color: "rgb(255 160 0)",
    },
  ];
  return (
    <Container>
      <Helmet>
        <title>Skills</title>
      </Helmet>
      <Row>
        <h1
          style={{
            borderBottom: "1px solid var(--body_color",
            padding: "8px",
          }}
        >
          Skills
        </h1>
      </Row>
      <motion.div
        className="skillsCon "
        initial={{ width: 0 , opacity :0}}
        animate={{ width: "100%" , opacity:1 }}
        exit={{ x: window.innerWidth, opacity : 0,transition: { duration: 0.2 } }}
      >
        {mySkills.map((skill, index) => {
          return (
            <div key={index} className="skillImgCom" style={{borderColor : skill.color}}>
              <img src={skill.img} alt="skill" />
              <div className="progress">
                <div className="percentage" style={{ color: skill.color }}>
                  <h2>{skill.progress}</h2>
                  <p>Progress</p>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
      <Footer />
    </Container>
  );
};
