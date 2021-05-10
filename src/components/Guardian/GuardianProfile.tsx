
import * as React from 'react';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import APIURL from '../../helpers/evironment'

export interface GuardianProfileProps {
  token: string
}
 
export interface GuardianProfileState {
firstname: string,
lastname: string,
citylocation: string,
statelocation: string,
zipcode: string,
street: string,
id?: number
}
 
class GuardianProfile extends React.Component<GuardianProfileProps, GuardianProfileState> {
  constructor(props: GuardianProfileProps) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      citylocation: "",
      statelocation: "",
      zipcode: "",
      street: "",
      id: undefined
    };
  }


  handleSubmit = (event : any) => {
    event.preventDefault();
    let token = this.props.token ? this.props.token : localStorage.getItem("token");

       fetch(`${APIURL}/guardianinfo/`, {
         method: 'POST',
         body: JSON.stringify({
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          citylocation: this.state.citylocation,
          statelocation: this.state.statelocation,
          zipcode: Number(this.state.zipcode),
          street: this.state.street
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
         this.setState({citylocation: ""});
         this.setState({statelocation: ""});
         this.setState({zipcode: ""});
         this.setState({street: ""});
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
                  <div className='submit'>
                     <button className="primarybutton">Create Profile</button>
                  </div>
             </form>
         </div>
      </div>
        </div>
     );
  }
}
 

export default GuardianProfile;
