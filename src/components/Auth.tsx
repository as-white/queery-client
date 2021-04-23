import React from 'react';
import './style.css';
import {Button} from 'reactstrap';
import Login from './Login'
import Signup from './Signup'

export interface AuthProps {
    updateToken: Function;
}
 
export interface AuthState {
    showLogin: boolean;
}
 
class Auth extends React.Component<AuthProps, AuthState> {
    constructor(props: AuthProps) {
        super(props);
        this.state = { showLogin: true  };
    }
    render() { 
        return ( 
            <div>
            <Login updateToken={this.props.updateToken}/>
            <Signup updateToken={this.props.updateToken}/>
       </div>
         );
    }
}
 
export default Auth;
