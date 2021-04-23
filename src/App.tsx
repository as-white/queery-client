import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup  from './components/Signup';
import Login from './components/Login';
import {Container, Row, Col} from 'reactstrap';
import Auth from './components/Auth';

export interface AppProps {

}
 
export interface AppState {
  token: string
}
 
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { token: '' };
  }

  // componentDidMount() {
  //   if (localStorage.getItem('token')){
  //     setSessionToken(localStorage.getItem('token'));
  // }


  updateToken = (token: string) => {
    localStorage.setItem('token', token);
    this.setState({
      token: token
    })
  }
  
  //   clearToken =() => {
  //   localStorage.clear();
  //   setSessionToken('');
  // }
  
  render() { 
    return ( 
      <div>
        <Auth updateToken={this.updateToken}/>
        </div>
     );
  }
}
 

export default App;
