import React from "react";
import { Card } from "react-bootstrap";

const GridItem = ({ url, title }) => {
  const style = {
    width: "18em",
    marginRight: "1.25em",
    marginBottom: "3em",
  };

  return (
    <Card style={style}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default GridItem;
