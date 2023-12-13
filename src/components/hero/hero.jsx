import React from "react";
import Card from "react-bootstrap/Card";
import bgimg from "../../assets/bg.jpg";

export const Hero = () => {
  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img className="max-h-96" src={bgimg} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="text-green-900 lead fw-bolder text-5xl text-center">NEW FASHION</Card.Title>
          <Card.Text className="text-green-700 lead fw-bolder text-3xl text-center">
            We sell only famouse brands
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};
