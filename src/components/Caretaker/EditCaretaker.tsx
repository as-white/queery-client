import * as React from 'react';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import CaretakerCard from './CaretakerCard';
import {Modal, ModalBody, Button, ModalHeader} from 'reactstrap';

export interface EditCaretakerProfileProps {
  token: string
}
 
export interface EditCaretakerProfileState {
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
modal: boolean
}
 
class EditCaretakerProfile extends React.Component<EditCaretakerProfileProps, EditCaretakerProfileState> {
  constructor(props: EditCaretakerProfileProps) {
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
      modal: true
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   if (localStorage.getItem('token')){
  //     setSessionToken(localStorage.getItem('token'));
  // }
  
  //   clearToken =() => {
  //   localStorage.clear();
  //   setSessionToken('');
  // }

//   handleSubmit = (event : any) => {
//     let token = this.props.token ? this.props.token : localStorage.getItem("token");

//        fetch(`http://localhost:3000/caretakerinfo/${this.props.caretakerToUpdate.id}`, {
//          method: 'PUT',
//          body: JSON.stringify({
//           firstname: this.state.firstname,
//           lastname: this.state.lastname,
//           photourl: this.state.photourl,
//           citylocation: this.state.citylocation,
//           statelocation: this.state.statelocation,
//           zipcode: Number(this.state.zipcode),
//           street: this.state.street,
//           bio: this.state.bio,
//           age: Number(this.state.age),
//           experience: Number(this.state.experience),
//           preferredage: Number(this.state.preferredage),
//           distancewilling: Number(this.state.distancewilling)
//          }),
//          headers: new Headers({
//              'Content-Type': 'application/json',
//              Authorization: token ? token : "",
//          })
//      }).then(
//          (response) => response.json()
//      ).then((data) => {
//          console.log(data);
//          this.setState({firstname: ""});
//          this.setState({lastname: ""});
//          this.setState({photourl: ""});
//          this.setState({citylocation: ""});
//          this.setState({statelocation: ""});
//          this.setState({zipcode: ""});
//          this.setState({street: ""});
//          this.setState({bio: ""});
//          this.setState({age: ""});
//          this.setState({experience: ""});
//          this.setState({preferredage: ""});
//          this.setState({distancewilling: ""});
//      })
//       // .catch((err) => {
//       //   console.log(err);
//       // })
//     }

        toggle = () => {
        this.setState({modal : !this.state.modal});
        }

  render() { 
    return (
        <div> 
        <Button color="danger" onClick={this.toggle}>Update</Button>
        <Modal isOpen={!this.state.modal} toggle={this.toggle}>
            <ModalHeader>Update Profile</ModalHeader>
          <ModalBody>
      <div>
        <h1>Edit Your Profile!</h1>
        <div className='wrapper'>
            <div className='form-wrapper'>
               <h2>Tell us about yourself!</h2>
               <form>
                  <div className='firstname'>
                     <label htmlFor="firstname">First Name</label>
                     <input type='text' name='firstname'  onChange={(e) => this.setState({firstname: e.target.value})}
/>
                  </div>
                  <div className='lastname'>
                     <label htmlFor="lastname">Last Name</label>
                     <input type='text' name='lastname'  onChange={(e) => this.setState({lastname: e.target.value})}
/>
                  </div>
                  <div className='photourl'>
                  <label htmlFor="photourl">Photo </label>
                  <input type='text' name='photourl' onChange={(e) => this.setState({photourl: e.target.value})}
/>
                  </div>
                  <div className='citylocation'>
                  <label htmlFor="citylocation">City </label>
                  <input type='text' name='citylocation'  onChange={(e) => this.setState({citylocation: e.target.value})}
/>
                  </div>
                  <div className='statelocation'>
                  <label htmlFor="statelocation">State </label>
                  <input type='text' name='statelocation'  onChange={(e) => this.setState({statelocation: e.target.value})}
/>
                  </div>
                  <div className='zipcode'>
                  <label htmlFor="zipcode">Zipcode </label>
                  <input type='text' name='zipcode'  onChange={(e) => this.setState({zipcode: e.target.value})}
/>
                  </div>
                  <div className='street'>
                  <label htmlFor="street">Street </label>
                  <input type='text' name='street'  onChange={(e) => this.setState({street: e.target.value})}
/>
                  </div> 
                  <div className='bio'>
                  <label htmlFor="bio">Bio </label>
                  <input type='text' name='bio' onChange={(e) => this.setState({bio: e.target.value})}
/>
                  </div>
                  <div className='age'>
                  <label htmlFor="age">Age </label>
                  <input type='number' min="0" name='age'  onChange={(e) => this.setState({age: e.target.value})}
/>
                  </div>
                  <div className='experience'>
                  <label htmlFor="experience">Years of Experience </label>
                  <input type='number' min="0" name='experience'  onChange={(e) => this.setState({experience: e.target.value})}
/>
                  </div>
                  <div className='preferredage'>
                  <label htmlFor="preferredage">Preferred Age </label>
                  <input type='number' min="0" name='preferredage'  onChange={(e) => this.setState({preferredage: e.target.value})}
/>
                  </div>
                  <div className='distancewilling'>
                  <label htmlFor="distancewilling">Distance Willing to Travel </label>
                  <input type='number' min="0" name='distancewilling' onChange={(e) => this.setState({distancewilling: e.target.value})}
/>
                  </div>                              
                  <div className='submit'>
                     <button className="primarybutton">Create Profile</button>

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
 

export default EditCaretakerProfile;