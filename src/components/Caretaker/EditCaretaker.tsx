import * as React from 'react';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import CaretakerCard from './CaretakerCard';
import {Modal, ModalBody, Button, ModalHeader} from 'reactstrap';
import {Result, CaretakerResponse} from './CaretakerInterface';
import APIURL from '../../helpers/evironment'

export interface EditCaretakerProfileProps {
  token: string
  caretaker: {
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
    caretaker: [],
    id?: number
    }
  fetchMyProfile: Function;
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
modal: boolean,
caretaker: Result[],
loading: boolean,
id?: number
}
 
class EditCaretakerProfile extends React.Component<EditCaretakerProfileProps, EditCaretakerProfileState> {
  constructor(props: EditCaretakerProfileProps) {
    super(props);
    this.state = {
      firstname: this.props.caretaker.firstname,
          lastname: this.props.caretaker.lastname,
          photourl: this.props.caretaker.photourl,
          citylocation: this.props.caretaker.citylocation,
          statelocation: this.props.caretaker.statelocation,
          zipcode: this.props.caretaker.zipcode,
          street: this.props.caretaker.street,
          bio: this.props.caretaker.bio,
          age: this.props.caretaker.age,
          experience: this.props.caretaker.experience,
          preferredage: this.props.caretaker.preferredage,
          distancewilling: this.props.caretaker.distancewilling,
          id: this.props.caretaker.id,
      modal: true,
      caretaker: [],
      loading: false
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  uploadImage = async (e: any) => {
    const data = new FormData();
    const files = e.target.files;
    data.append("file", files[0]);
    data.append("upload_preset", "artisan-goods-cloudinary");
    // this.setState({ loading: true });
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/natescloudinary/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    this.setState({ photourl: file.secure_url });
    this.setState({ loading: false });

  };

  handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    let token = this.props.token ? this.props.token : localStorage.getItem("token");

       fetch(`${APIURL}caretakerinfo/${this.props.caretaker.id}`, {
         method: 'PUT',
         body: JSON.stringify({
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          photourl: this.state.photourl,
          citylocation: this.state.citylocation,
          statelocation: this.state.statelocation,
          zipcode: Number(this.state.zipcode),
          street: this.state.street,
          bio: this.state.bio,
          age: Number(this.state.age),
          experience: Number(this.state.experience),
          preferredage: Number(this.state.preferredage),
          distancewilling: Number(this.state.distancewilling)
         }),
         headers: new Headers({
             'Content-Type': 'application/json',
             Authorization: token ? token : "",
         })
     }).then(
         (response) => response.json()
     ).then((data) => {
         this.setState({firstname: "", lastname: "", photourl: "", citylocation: "", statelocation: "", zipcode: "", street: "", bio: "", age: "", experience: "", preferredage: "", distancewilling: ""});
     })

     this.props.fetchMyProfile()
     this.toggle()
    }


        toggle = () => {
        this.setState({modal : !this.state.modal});
        }


  render() { 
    return (
        <div> 
        <Button color="danger" onClick={this.toggle}>Update</Button>
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
                  <div className='photourl'>
                  {/* <label htmlFor="photourl">Photo </label>
                  <input type='text' name='photourl' value={this.state.photourl} onChange={(e) => this.setState({photourl: e.target.value})} */}
                  <label htmlFor="photoURL">Upload image</label>
                  <input type="file" onChange={this.uploadImage} />
            {this.state.loading ? (
              <h6>Loading...</h6>
            ) : (
              <img src={this.state.photourl} style={{ width: "120px" }} />
            )}
            <br />
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
                  <input type='text' name='street' value={this.state.street} onChange={(e) => this.setState({street: e.target.value})}
/>
                  </div> 
                  <div className='bio'>
                     <label htmlFor="bio">Bio</label>
                     <input type='text' name='bio' value={this.state.bio} onChange={(e) => this.setState({bio: e.target.value})}
/>
                  </div>
                  <div className='age'>
                  <label htmlFor="age">Age </label>
                  <input type='number' min="0" name='age' value={this.state.age} onChange={(e) => this.setState({age: e.target.value})}
/>
                  </div>
                  <div className='experience'>
                  <label htmlFor="experience">Years of Experience </label>
                  <input type='number' min="0" name='experience' value={this.state.experience} onChange={(e) => this.setState({experience: e.target.value})}
/>
                  </div>
                  <div className='preferredage'>
                  <label htmlFor="preferredage">Preferred Age </label>
                  <input type='number' min="0" name='preferredage' value={this.state.preferredage} onChange={(e) => this.setState({preferredage: e.target.value})}
/>
                  </div>
                  <div className='distancewilling'>
                  <label htmlFor="distancewilling">Distance Willing to Travel </label>
                  <input type='number' min="0" name='distancewilling' value={this.state.distancewilling} onChange={(e) => this.setState({distancewilling: e.target.value})}
/>
                  </div>                              
                  <div className='submit'>
                     <button className="primarybutton">Submit</button>

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