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

    handleToggle = () => {if(this.state.showLogin === true){
        this.setState({ showLogin: false })
    } else {
        this.setState({showLogin: true })
    }}


    render() { 
        return ( 
            <div>
            {this.state.showLogin === true ? <Login updateToken={this.props.updateToken} handleToggle={this.handleToggle} /> : <Signup updateToken={this.props.updateToken} handleToggle={this.handleToggle}/>}

       </div>
         );
    }
}
 
export default Auth;
