import * as React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import EditGuardian from './EditGuardian';
import GuardianDelete from './GuardianDelete';
import APIURL from '../../helpers/evironment'

export interface GuardianCardProps {
  token: string
  }
  
  export interface GuardianCardState {
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
    guardian: [],
    id?: number,
    modal: boolean
    }

  class GuardianCard extends React.Component<GuardianCardProps, GuardianCardState> {
    constructor(props: GuardianCardProps) {
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
        guardian: [],
        id: undefined,
        modal: true
      };
    }

 

    fetchGuardianProfile = () => {
    // event.preventDefault();
    let token = this.props.token ? this.props.token : localStorage.getItem("token");

    fetch(`${APIURL}/guardianinfo/mine`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: token ? token : "",
        })
    }).then(
        (response) => response.json())
      .then((json) => {console.log(json);
      this.setState({guardian: json});
      
    });
  }

  componentDidMount = () => {
    this.fetchGuardianProfile()
}


    render() {
      return (
        <div>
          <div className='wrapper'>
          {this.state.guardian.map((guardian: GuardianCardState) => (
            <Card className="guardianCard">
              <h3 className="welcome2"><i>Welcome, {guardian.firstname}!</i></h3>
              <CardBody>
                  <CardTitle tag="h5">{guardian.firstname} {guardian.lastname}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">{guardian.citylocation}, {guardian.statelocation} {guardian.zipcode}</CardSubtitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">{guardian.street}</CardSubtitle>
                  <EditGuardian fetchGuardianProfile={this.fetchGuardianProfile} token={this.props.token} guardian={guardian}/>
                  <GuardianDelete fetchGuardianProfile={this.fetchGuardianProfile} token={this.props.token} guardian={guardian} />
              </CardBody>
          </Card>
          ))}
          </div>
          </div>
      )
    }
}
  export default GuardianCard;