import React from "react";
import { Alert } from "react-bootstrap";

const State = ({ message, variant }) => {
  return <Alert variant={variant}>{message}</Alert>;
};

export default State;
