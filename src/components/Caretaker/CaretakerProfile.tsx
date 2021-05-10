import * as React from 'react';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import CaretakerCard from './CaretakerCard';
import APIURL from '../../helpers/evironment'

export interface CaretakerProfileProps {
  token: string
}
 
export interface CaretakerProfileState {
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
loading: boolean
}
 
class CaretakerProfile extends React.Component<CaretakerProfileProps, CaretakerProfileState> {
  constructor(props: CaretakerProfileProps) {
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
      loading: false
    };
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

  // componentDidMount() {
  //   if (localStorage.getItem('token')){
  //     setSessionToken(localStorage.getItem('token'));
  // }
  
  //   clearToken =() => {
  //   localStorage.clear();
  //   setSessionToken('');
  // }

  handleSubmit = (event : React.SyntheticEvent) => {
    let token = this.props.token ? this.props.token : localStorage.getItem("token");

       fetch(`${APIURL}/caretakerinfo/`, {
         method: 'POST',
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
         console.log(data);
         this.setState({firstname: ""});
         this.setState({lastname: ""});
         this.setState({photourl: ""});
         this.setState({citylocation: ""});
         this.setState({statelocation: ""});
         this.setState({zipcode: ""});
         this.setState({street: ""});
         this.setState({bio: ""});
         this.setState({age: ""});
         this.setState({experience: ""});
         this.setState({preferredage: ""});
         this.setState({distancewilling: ""});
     })
      // .catch((err) => {
      //   console.log(err);
      // })
    }

  
  render() { 
    console.log(localStorage.getItem("token"));
    console.log(this.props.token);
    return ( 
      <div>
        <h1>Create a Profile</h1>
        <div className='wrapper'>
            <div className='form-wrapper'>
               <h2>Tell us about yourself!</h2>
               <form onSubmit={this.handleSubmit} noValidate >
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
                  {/* <label htmlFor="photourl">Photo </label>
                  <input type='text' name='photourl' onChange={(e) => this.setState({photourl: e.target.value})} */}
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
     );
  }
}
 

export default CaretakerProfile;
