import React from "react";
import { Result } from "./GuardianInterface";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export interface CaretakerCardsProps {
  caretaker: Result;
  
}

const CaretakerCards: React.SFC<CaretakerCardsProps> = (props) => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="10px"
          src={props.caretaker.photourl}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{props.caretaker.firstname} {props.caretaker.lastname}</CardTitle>
          <CardSubtitle>{props.caretaker.citylocation}, {props.caretaker.statelocation}</CardSubtitle>
          <CardSubtitle>{props.caretaker.zipcode}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default CaretakerCards;