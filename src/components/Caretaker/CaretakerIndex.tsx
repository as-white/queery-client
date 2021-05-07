import * as React from 'react';
import CaretakerCard from './CaretakerCard';
import {Container} from 'reactstrap';
import EditCaretaker from './EditCaretaker'

export interface CaretakerIndexProps {
    token: string;
    editUpdateCaretaker: Function;
    caretakerToUpdate: any;
}
 
export interface CaretakerIndexState {
    caretakers: {};
    updateActive: boolean;
    caretakerToUpdate: {};
}
 
class CaretakerIndex extends React.Component<CaretakerIndexProps, CaretakerIndexState> {
    constructor(props: CaretakerIndexProps) {
        super(props);
        this.state = { 
            caretakers: [{
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

            }],
            updateActive: false,
            caretakerToUpdate: {}
        }
    }

    fetchMyProfile = () => {
        // event.preventDefault();
        let token = this.props.token ? this.props.token : localStorage.getItem("token");
    
        fetch(`http://localhost:3000/caretakerinfo/mine`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: token ? token : "",
            })
        }).then(
            (response) => response.json())
          .then((caretakerData) => {
              this.setState({caretakers: caretakerData}); 
        });
      }

      editUpdateCaretaker = (caretaker: number) => {
          this.setState({caretakerToUpdate: caretaker});
          console.log(caretaker)
      }

      componentDidMount = () => {
        this.fetchMyProfile()
    }
    

    render() { 
        return (
            <Container> 
            <CaretakerCard token={this.props.token}/>
            {this.state.updateActive ? <EditCaretaker token={this.props.token}/> : <></>}
         </Container>
         );
    }
}
 
export default CaretakerIndex;