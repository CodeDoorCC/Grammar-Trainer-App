import React from "react";
import ButtonCard from "./ButtonCard";
import "../App.css";

import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export default function Buttons(props) {
  return (
    <div>
      <main>
        <div className="container">
          <Card>
            <CardImg
              top
              className="cardImg"
              src="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU3OTIzNTc4ODAwMjUyNTYy/brandenburg-gate-a-brief-historys-featured-photo.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Beispiel</CardTitle>
              <CardSubtitle>Choose Correct Answer</CardSubtitle>

              <Button outline color="info">
                der
              </Button>
              <Button outline color="info">
                die
              </Button>
              <Button outline color="info">
                das
              </Button>
            </CardBody>
          </Card>

          <div className="deckButtons">
            <Button outline color="info" className="previous">
              previous
            </Button>
            <Button outline color="info" className="next">
              next
            </Button>
          </div>
        </div>
      </main>
      <br />
      <br /> <br />
      {props.data &&
        props.data.map((noun, index) => (
          <ButtonCard key={index} name={noun.name} gender={noun.gender} />
        ))}
    </div>
  );
}
