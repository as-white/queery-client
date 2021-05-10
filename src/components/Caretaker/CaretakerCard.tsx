import * as React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import {CaretakerResponse, Result} from './CaretakerInterface';
import EditCaretaker from './EditCaretaker'
import CaretakerDelete from './CaretakerDelete';
import APIURL from '../../helpers/evironment'
import CaretakerInfo from '../Guardian/CaretakerInfo';

export interface CaretakerCardProps {
    token: string
}
  
  export interface CaretakerCardState {
    firstname: string,
    lastname: string,
    photourl: string,
    citylocation: string,
    statelocation: string,
    zipcode: string,
    street: string,
    bio: string,
    age: string,
    experience: string,
    preferredage: string,
    distancewilling: string,
    id?: number,
    caretaker: []
    }

  class CaretakerCard extends React.Component<CaretakerCardProps, CaretakerCardState> {
    constructor(props: CaretakerCardProps) {
      super(props);
      this.state = {
        firstname: "",
        lastname: "",
        photourl: "",
        citylocation: "",
        statelocation: "",
        zipcode: "",
        street: "",
        bio: "",
        age: "",
        experience: "",
        preferredage: "",
        distancewilling: "",
        id: undefined,
        caretaker: []
      };
    }




    fetchMyProfile = () => {
    // event.preventDefault();
    let token = this.props.token ? this.props.token : localStorage.getItem("token");

    fetch(`${APIURL}caretakerinfo/mine`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: token ? token : "",
        })
    }).then(
        (response) => response.json())
      .then((json) => {console.log(json);
      this.setState({caretaker: json});
      
    });
  }

  componentDidMount = () => {
    this.fetchMyProfile()
}


    render() {
      return (
        <div>
          <div className='wrapper'>
            
          {this.state.caretaker.map((caretaker: CaretakerCardState) => (
            <Card className="caretakerCard">
              <h2 className="welcome"><i>Welcome, {caretaker.firstname}!</i></h2>
              <CardImg top width="200px" src={caretaker.photourl} alt="Card image cap" />
              <CardBody>
                  <CardTitle tag="h5">{caretaker.firstname} {caretaker.lastname}, {caretaker.age}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">{caretaker.citylocation}, {caretaker.statelocation} {caretaker.zipcode}</CardSubtitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">{caretaker.street}</CardSubtitle>
                  <CardSubtitle><b>Years of Experience:</b> {caretaker.experience}</CardSubtitle>
                  <CardSubtitle><b>Preferred Age Group:</b> {caretaker.preferredage}</CardSubtitle>
                  <CardSubtitle><b>Distance Willing to Travel:</b> {caretaker.distancewilling} miles</CardSubtitle>
                  <br />
                  <CardText tag="h5">{caretaker.bio}</CardText>
                  <EditCaretaker fetchMyProfile={this.fetchMyProfile} token={this.props.token} caretaker={caretaker}/>
                  <CaretakerDelete fetchMyProfile={this.fetchMyProfile} token={this.props.token} caretaker={caretaker} />
              </CardBody>
          </Card>
          ))}
          </div>
          </div>
      )
    }
}
  export default CaretakerCard;