// children components use arrow function component

import React from "react";
import {Container} from "react-bootstrap";
import Colletion from "./collection.albums";

const Albums = (props) => {
  
  return(
    <React.Fragment>
      <Container className="mt-4">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <Colletion/>
      </Container>
    </React.Fragment>
  )
}

export default Albums;