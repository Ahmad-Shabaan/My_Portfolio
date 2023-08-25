import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { motion } from "framer-motion";
import "./Contact.css";
import { Button } from "@chakra-ui/react";
import * as Yup from "yup";
import { useAlertContext } from "../context/AlertContext";
import { Container, Row, Col } from "react-bootstrap";
import { useTheme } from "../context/Theme";
import "./Home.css";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";
export const Contact = () => {
  const { theme } = useTheme();
  const color = theme === "dark" ? "white" : "black";
  const [loading, setLoading] = useState(false);
  const { onOpen } = useAlertContext();
  const form = useRef();
  const initialValues = {
    user_name: "",
    user_email: "",
    message: "",
  };
  const validationSchema = Yup.object({
    user_name: Yup.string()
      .min(2, "Too Short!")
      .max(15, "Must be 15 characters or less!")
      .required("Required"),
    user_email: Yup.string().email("Invalid Email").required("Required"),
    message: Yup.string().min(20, "Too Short").required("Required"),
  });

  const sendEmail = (values) => {
    setLoading(true);
    emailjs
      .sendForm(
        "service_qffmmtv",
        "template_40lyx96",
        form.current,
        "wED-IzBUexSNHEEse"
      )
      .then(
        () => {
          onOpen(
            "Thanks for reaching out !, I'll get back to you ASAP",
            "success"
          );
          setLoading(false);
          values.user_name = "";
          values.user_email = "";
          values.message = "";
        },
        (error) => {
          onOpen(error.text, "error");
        }
      );
  };

  return (
    <Container className="px-3">
      <Helmet>
        <title>Contact Me</title>
      </Helmet>
      <Row>
        <h1 style={{ borderBottom: `1px solid ${color}`, padding: "8px" }}>
          Contact me
        </h1>
      </Row>
      <motion.div
        className="contact h-100 my-5"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
      >
        <Col>
          <h4>Please give me your feedback about my portfolio via email</h4>
          <h3 style={{ fontWeight: "bold" }}>Get in touch</h3>
          <address>
            <strong>Email:</strong> <a href="/contact">ashabaan887@gmail.com</a>
            <p>
              <strong>Phone:</strong>(+20)109-291-9962
            </p>
          </address>
        </Col>
        <Col className="myForm">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={sendEmail}
          >
            {({ sendEmail, submitForm }) => (
              <Form ref={form} onSubmit={sendEmail}>
                <div className="inputField">
                  <label htmlFor="user_name">Name</label>
                  <Field
                    type="text"
                    name="user_name"
                    id="user_name"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="user_name"
                    component="div"
                    className="errorMsg"
                  />
                </div>
                <div className="inputField">
                  <label htmlFor="user_email">Email Address </label>
                  <Field
                    type="email"
                    name="user_email"
                    id="user_email"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="user_email"
                    component="div"
                    className="errorMsg"
                  />
                </div>
                <div className="inputField">
                  <label htmlFor="message">Your message</label>
                  <Field
                    as="textarea"
                    name="message"
                    id="message"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="errorMsg"
                  />
                </div>
                <Button
                  type="submit"
                  className={theme === "dark" ? "btn_one" : "btn_lOne"}
                  isLoading={loading}
                  loadingText="Sending"
                  onClick={(e) => {
                    submitForm();
                    e.preventDefault();
                  }}
                >
                  Send Email
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </motion.div>
      <Footer />
    </Container>
  );
};
