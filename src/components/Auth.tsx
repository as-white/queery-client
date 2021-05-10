import React from 'react';
import './style.css';
import {Button} from 'reactstrap';
import Login from './Login'
import Signup from './Signup'
import { Container, Row, Col } from 'reactstrap';

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
        <Container>
            <Row>
            <Col>
            <div className="wrapper">
                {/* <h1>Welcome to Queery.</h1>
                <br/> */}
                <img src="https://i.imgur.com/MEyMEDm.png" />
                </div>
                </Col>
                <Col>
            {this.state.showLogin === true ? <Login updateToken={this.props.updateToken} handleToggle={this.handleToggle} /> : <Signup updateToken={this.props.updateToken} handleToggle={this.handleToggle}/>}
            </Col>
            </Row>
            </Container>
         );
    }
}
 
export default Auth;
