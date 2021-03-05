import React from "react";
import Card from "react-bootstrap/Card";
import Placeholder from "../assets/placeholder.png";

const HomeItem = ({ title }) => {
  const style = {
    width: "18em",
    cursor: "pointer",
  };

  return (
    <Card className="bg-dark text-white" style={style}>
      <Card.Img src={Placeholder} alt={title} />
      <Card.ImgOverlay>
        <Card.Title>{title}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
};

export default HomeItem;
