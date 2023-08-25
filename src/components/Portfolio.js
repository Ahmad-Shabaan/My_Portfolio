import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Portfolio.css";
import BlurhashComp from "./BlurhashComp";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useTheme } from "../context/Theme";
import Buttons from "./Buttons";
export const Portfolio = () => {
  const { theme } = useTheme();
  const projects = [
    {
      projectName: "",
      url: "/Home",
      description: "Never give up, Great things take time, Be patient",
      imgUrl: "https://picsum.photos/400/500/?grayscale",
    },
    {
      projectName: "",
      url: "/Home",
      description: "Never give up, Great things take time, Be patient",
      imgUrl: "https://picsum.photos/400/550/?grayscale",
    },
    {
      projectName: "",
      url: "/Home",
      description: "Never give up, Great things take time, Be patient",
      imgUrl: "https://picsum.photos/400/?grayscale",
    },
    {
      projectName: "",
      url: "/Home",
      description: "Never give up, Great things take time, Be patient",
      imgUrl: "https://picsum.photos/400/500/?grayscale",
    },
    {
      projectName: "",
      url: "/Home",
      description: "Never give up, Great things take time, Be patient",
      imgUrl: "https://picsum.photos/400/600/?grayscale",
    },
    {
      projectName: "",
      url: "/Home",
      description: "Never give up, Great things take time, Be patient",
      imgUrl: "https://picsum.photos/400/?grayscale",
    },
    {
      projectName: "",
      url: "/Home",
      description: "Never give up, Great things take time, Be patient",
      imgUrl: "https://picsum.photos/400/600/?grayscale",
    },
    {
      projectName: "",
      url: "/Home",
      description: "Never give up, Great things take time, Be patient",
      imgUrl: "https://picsum.photos/400/?grayscale",
    },
    {
      projectName: "",
      url: "/Home",
      description: "Never give up, Great things take time, Be patient",
      imgUrl: "https://picsum.photos/400/500/?grayscale",
    },
    {
      projectName: "",
      url: "/Home",
      description: "Never give up, Great things take time, Be patient",
      imgUrl: "https://picsum.photos/400/600/?grayscale",
    },
    {
      projectName: "",
      url: "/Home",
      description: "Never give up, Great things take time, Be patient",
      imgUrl: "https://picsum.photos/400/500/?grayscale",
    },
    {
      projectName: "",
      url: "/Home",
      description: "Never give up, Great things take time, Be patient",
      imgUrl: "https://picsum.photos/400/450/?grayscale",
    },
  ];
  return (
    <Container>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <Row>
        <h1
          style={{
            borderBottom: "1px solid var(--body_color",
            padding: "8px",
          }}
        >
          Portfolio
        </h1>
      </Row>
      <motion.div
        className=" my-4 portfolioCon"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
      >
        <div className="colItems">
          {projects.slice(0, projects.length / 3).map((child, index) => {
            return (
              <div key={index} className="cardPortfolio">
                <div className="figure">
                  <BlurhashComp src={child.imgUrl} />
                  <div className="caption">
                    <p>{child.description}</p>
                    <Buttons url={child.url} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="colItems">
          {projects
            .slice(projects.length / 3, (projects.length * 2) / 3)
            .map((child, index) => {
              return (
                <div key={index} className="cardPortfolio">
                  <div className="figure">
                    <BlurhashComp src={child.imgUrl} />
                    <div className="caption">
                      <p>{child.description}</p>
                      <Buttons url={child.url} />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="thirdCol colItems">
          {projects.slice((projects.length * 2) / 3).map((child, index) => {
            return (
              <div key={index} className="cardPortfolio">
                <div className="figure">
                  <BlurhashComp src={child.imgUrl} />
                  <div className="caption">
                    <p>{child.description}</p>
                    <Buttons url={child.url} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
      <Footer />
    </Container>
  );
};
