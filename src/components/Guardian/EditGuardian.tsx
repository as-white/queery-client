import * as React from 'react';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import GuardianCard from './GuardianCard';
import {Modal, ModalBody, Button, ModalHeader} from 'reactstrap';
import APIURL from '../../helpers/evironment';
import { library } from '@fortawesome/fontawesome-svg-core'


export interface EditGuardianProfileProps {
  token: string
  guardian: {
    firstname: string,
    lastname: string,
    citylocation: string,
    statelocation: string,
    zipcode: string,
    street: string,
    modal: boolean,
    guardian: [],
    id?: number
  }
  fetchGuardianProfile: Function;
}
 
export interface EditGuardianProfileState {
firstname: string,
lastname: string,
citylocation: string,
statelocation: string,
zipcode: string,
street: string,
modal: boolean,
guardian: [],
id?: number
}
 
class EditGuardianProfile extends React.Component<EditGuardianProfileProps, EditGuardianProfileState> {
  constructor(props: EditGuardianProfileProps) {
    super(props);
    this.state = {
      firstname: this.props.guardian.firstname,
      lastname: this.props.guardian.lastname,
      citylocation: this.props.guardian.citylocation,
      statelocation: this.props.guardian.statelocation,
      zipcode: this.props.guardian.zipcode,
      street: this.props.guardian.street,
      modal: true,
      id: this.props.guardian.id,
      guardian: []
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    let token = this.props.token ? this.props.token : localStorage.getItem("token");

       fetch(`${APIURL}/guardianinfo/${this.props.guardian.id}`, {
         method: 'PUT',
         body: JSON.stringify({
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          citylocation: this.state.citylocation,
          statelocation: this.state.statelocation,
          zipcode: Number(this.state.zipcode),
          street: this.state.street,
         }),
         headers: new Headers({
             'Content-Type': 'application/json',
             Authorization: token ? token : "",
         })
     }).then(
         (response) => response.json()
     ).then((data) => {
         this.setState({firstname: ""});
         this.setState({lastname: ""});
         this.setState({citylocation: ""});
         this.setState({statelocation: ""});
         this.setState({zipcode: ""});
         this.setState({street: ""});
        // this.setState({firstname: "", lastname: "", citylocation: "", statelocation: "", zipcode: "", street: ""});
     })
     
     this.props.fetchGuardianProfile()
     this.toggle()

    }

        toggle = () => {
        this.setState({modal : !this.state.modal});
        }

        // fetchGuardianProfile = () => {
        //   // event.preventDefault();
        //   let token = this.props.token ? this.props.token : localStorage.getItem("token");
      
        //   fetch(`${APIURL}/guardianinfo/`, {
        //       method: 'PUT',
        //       headers: new Headers({
        //           'Content-Type': 'application/json',
        //           Authorization: token ? token : "",
        //       })
        //   }).then(
        //       (response) => response.json())
        //       .then((data) => {console.log(data);
        //         this.setState({guardian: data});
            
        //   });
        // }


        // deleteProfile = ( guardian: any) => {
        //   let token = this.props.token ? this.props.token: localStorage.getItem("token");
        //   fetch(`${APIURL}/guardianinfo/${guardian.id}`, {
        //     method: "DELETE",
        //     headers: new Headers({
        //       "Content-Type": "application/json",
        //       Authorization:  token ? token : "",
        //     }),
        //   }).then(() => this.fetchMyProfile());
        // };

  render() { 
    return (
      <div>
        <button className="primarybutton" onClick={this.toggle}>Update</button>
        <Modal isOpen={!this.state.modal} toggle={this.toggle}>
          <ModalBody>
      <div>
        <h1>Edit Your Profile!</h1>
        <div className='wrapper'>
            <div className='form-wrapper'>
               <form onSubmit={this.handleSubmit}>
                  <div className='firstname'>
                     <label htmlFor="firstname">First Name</label>
                     <input type='text' name='firstname' value={this.state.firstname} onChange={(e) => this.setState({firstname: e.target.value})}
/>
                  </div>
                  <div className='lastname'>
                     <label htmlFor="lastname">Last Name</label>
                     <input type='text' name='lastname' value={this.state.lastname} onChange={(e) => this.setState({lastname: e.target.value})}
/>
                  </div>
                  <div className='citylocation'>
                  <label htmlFor="citylocation">City </label>
                  <input type='text' name='citylocation' value={this.state.citylocation} onChange={(e) => this.setState({citylocation: e.target.value})}
/>
                  </div>
                  <div className='statelocation'>
                  <label htmlFor="statelocation">State </label>
                  <input type='text' name='statelocation' value={this.state.statelocation} onChange={(e) => this.setState({statelocation: e.target.value})}
/>
                  </div>
                  <div className='zipcode'>
                  <label htmlFor="zipcode">Zipcode </label>
                  <input type='text' name='zipcode' value={this.state.zipcode} onChange={(e) => this.setState({zipcode: e.target.value})}
/>
                  </div>
                  <div className='street'>
                  <label htmlFor="street">Street </label>
                  <input type='text' name='street' value={this.state.street} onChange={(e) => this.setState({street: e.target.value})}/></div>            
                  <div className='submit'>
                     <button className="primarybutton">Submit Changes</button>

                    <br />
                    </div></form>
                    </div>
                    </div>
                    </div>
                    </ModalBody>
                    </Modal>
                    </div>
     );
  }
}
 

export default EditGuardianProfile;