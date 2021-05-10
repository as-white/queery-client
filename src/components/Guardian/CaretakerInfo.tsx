import * as React from 'react';
import {CaretakerResponse, Result} from './GuardianInterface';
import {Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Modal,
    ModalBody,
    Button,
    ModalHeader} from 'reactstrap';
    import APIURL from '../../helpers/evironment'

export interface CaretakerInfoProps {
    token: string
    caretaker: Result;
}
 
export interface CaretakerInfoState {
firstname: string,
lastname: string,
photourl: string,
citylocation: string,
statelocation: string,
zipcode: string,
street: string,
modal: boolean,
caretaker: []
}
 
class CaretakerInfo extends React.Component<CaretakerInfoProps, CaretakerInfoState> {
    constructor(props: CaretakerInfoProps) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            photourl: "",
            citylocation: "",
            statelocation: "",
            zipcode: "",
            street: "",
            modal: true,
            caretaker: []
        };
    }

    componentDidMount () {
        let token = this.props.token ? this.props.token : localStorage.getItem("token");
    
        fetch(`${APIURL}caretakerinfo/`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: token ? token : "",
            })
        }).then(
            (response) => response.json())
          .then((data) => {console.log(data);
          this.setState({caretaker: data });
          
        });
      }
    

    toggle = () => {
        this.setState({modal : !this.state.modal});
        }

    render() { 
        return ( 
            <div>
        <Button color="danger" onClick={this.toggle}>View More</Button>
        <Modal isOpen={!this.state.modal} toggle={this.toggle}>
          <ModalBody>
            <Card>
            <CardImg
              top
              width="10px"
              src={this.props.caretaker.photourl}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle><h3>{this.props.caretaker.firstname} {this.props.caretaker.lastname}</h3></CardTitle>
              <CardSubtitle><h6>{this.props.caretaker.citylocation}, {this.props.caretaker.statelocation}</h6></CardSubtitle>
              <CardSubtitle><h6>{this.props.caretaker.zipcode}</h6></CardSubtitle>
              <CardSubtitle>{this.props.caretaker.street}</CardSubtitle>
              <CardSubtitle><b>Years of Experience:</b> {this.props.caretaker.experience}</CardSubtitle>
              <CardSubtitle><b>Preferred Age Group:</b> {this.props.caretaker.preferredage}</CardSubtitle>
              <CardSubtitle><b>Distance Willing to Travel:</b> {this.props.caretaker.distancewilling} miles</CardSubtitle>
              <br />
              <CardSubtitle><h3>{this.props.caretaker.bio}</h3></CardSubtitle>
                  <br />
            </CardBody>
          </Card>
          </ModalBody>
          </Modal>
          </div>
         );
    }
}
 
export default CaretakerInfo;