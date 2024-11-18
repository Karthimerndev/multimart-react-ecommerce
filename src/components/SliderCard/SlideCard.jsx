import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./slidercard.css";

const SlideCard = ({ title, desc, cover, mob }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    console.log(screenWidth + "kjhgfdsdfghjk");
  }, [screenWidth]);
  return (
    <Container fluid className="box">
      <Row>
        {/* <Col md={4}>
          <h1>{title}</h1>
          <p>{desc}</p>
          <button className="btn-primary">Visit Collections</button>
        </Col> */}
        <Col md={12}>
          <img
            src={screenWidth < 600 ? mob : cover}
            alt="#"
            style={{ objectFit: "cover", width: "100%" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SlideCard;
