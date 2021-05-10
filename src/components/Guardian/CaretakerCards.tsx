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
import CaretakerInfo from './CaretakerInfo';
import APIURL from '../../helpers/evironment'

export interface CaretakerCardsProps {
  caretaker: Result;
  token: string
}

const CaretakerCards: React.SFC<CaretakerCardsProps> = (props) => {
  return (
    <div className="mainpage">
      <Card>
        <CardImg
          src={props.caretaker.photourl}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle><b><h3>{props.caretaker.firstname} {props.caretaker.lastname}</h3></b></CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.caretaker.citylocation}, {props.caretaker.statelocation}</CardSubtitle>
          <CardSubtitle  tag="h6" className="mb-2 text-muted">{props.caretaker.zipcode}</CardSubtitle>
        </CardBody>
        <CaretakerInfo token={props.token} caretaker={props.caretaker}/>
      </Card>
    </div>
  );
};

export default CaretakerCards;