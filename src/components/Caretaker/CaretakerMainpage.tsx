import * as React from 'react';
import CaretakerCard from './CaretakerCard';
import CaretakerProfile from './CaretakerProfile';
import APIURL from '../../helpers/evironment';

export interface CaretakerMainPageProps {
    token: string;
}
 
export interface CaretakerMainPageState {
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
    caretaker: []
}
 
class CaretakerMainPage extends React.Component<CaretakerMainPageProps, CaretakerMainPageState> {
    constructor(props: CaretakerMainPageProps) {
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
                {this.state.caretaker.length > 0 ?
                <CaretakerCard token={this.props.token}/> : <CaretakerProfile token={this.props.token}/>
                }
                </div>
         );
    }
}
 
export default CaretakerMainPage;