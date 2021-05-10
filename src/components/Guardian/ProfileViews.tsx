import * as React from 'react';
import GuardianCard from './GuardianCard'
import GuardianProfile from './GuardianProfile'
import APIURL from '../../helpers/evironment'

export interface ProfileViewsProps {
    token: string;
}
 
export interface ProfileViewsState {
    firstname: string,
    lastname: string,
    citylocation: string,
    statelocation: string,
    zipcode: string,
    street: string,
    guardian: []
}
 
class ProfileViews extends React.Component<ProfileViewsProps, ProfileViewsState> {
    constructor(props: ProfileViewsProps) {
        super(props);
        this.state = { 
        firstname: "",
        lastname: "",
        citylocation: "",
        statelocation: "",
        zipcode: "",
        street: "",
        guardian: []
         };
    }

    fetchMyProfile = () => {
        // event.preventDefault();
        let token = this.props.token ? this.props.token : localStorage.getItem("token");
    
        fetch(`http://${APIURL}guardianinfo/mine`, {
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
        this.fetchMyProfile()
    }

    render() { 
        return ( 
            <div>
            {this.state.guardian.length > 0 ?
            <GuardianCard token={this.props.token}/> : <GuardianProfile token={this.props.token}/>
            }
            </div>
         );
    }
}
 
export default ProfileViews;