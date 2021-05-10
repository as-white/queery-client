import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import {Container, Row, Col} from 'reactstrap';
import Auth from './components/Auth';
import CaretakerProfile from './components/Caretaker/CaretakerProfile';
import { Route, Switch, Redirect } from 'react-router-dom';
import GuardianProfile from './components/Guardian/GuardianProfile';
import CaretakerCard from './components/Caretaker/CaretakerCard';
import GuardianCard from './components/Guardian/GuardianCard';
import CaretakerMainpage from './components/Caretaker/CaretakerMainpage';
import GuardianMainpage from './components/Guardian/GuardianMainpage';
import NavBar from './components/Guardian/GuardianNavbar';
import Signup from './components/Signup';
import GuardianPosts from './components/Guardian/GuardianPosts';
import Footer from './components/Header & Footer/Footer';
import Resources from './components/Resources/Resources';
import ProfileViews from './components/Guardian/ProfileViews';

export interface AppProps {

}
 
export interface AppState {
  token: string,
  role: string,
}
 
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { token: '', role: '', };
  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    let role = localStorage.getItem('role')

    if (token){
      this.setState({
        token: token
      })

      if (role){
        this.setState({
          role: role
        })
  }
  }}

  updateToken = (token: string, role: string) => {
    localStorage.setItem('token', token);
    this.setState({
      token: token
    })
    this.updateRole(role);
  }

  updateRole =(role: string) => {
    localStorage.setItem('role', role);
    this.setState({
      role: role
    })
  }
  


    clearToken = () => {
    localStorage.clear();
    this.setState({
      token: ''
  })
}
  
protectedViews () {
  if(this.state.role === "Caretaker" && this.state.token) {
    return <Redirect to="/caretakermainpage" />
  } else if (this.state.role === "Guardian" && this.state.token){
    return <Redirect to="/guardianmainpage" />
  } else {
    return <Auth updateToken={this.updateToken}/>
  }
}

  render() { 
    return ( 
      <div id="page-container">
        <div id="content-wrap">
      <NavBar />
        <Switch>
          <Route exact path="/">
            {this.protectedViews()}
            {/* {this.state.role === "Caretaker" && this.state.token ? (
              <Redirect to="/caretakerprofile" />
            ) : (this.state.role === "Guardian" && this.state.token) ? <Redirect to="/guardianprofile" /> : (
              <Auth updateToken={this.updateToken}/>
            )} */}
          </Route>
          <Route exact path="/caretakermainpage">{this.state.token ? <CaretakerMainpage token = {this.state.token}/> : <Redirect to="/" />}</Route>
          <Route exact path="/guardianmainpage">{this.state.token ? <GuardianMainpage token={this.state.token} /> : <Redirect to="/" />}</Route>
          <Route exact path="/caretaker"><CaretakerCard token={this.state.token} /></Route>
           <Route exact path="/guardian"><GuardianCard token={this.state.token}/></Route>
           {/* <CaretakerProfile token = {this.state.token}/> */}
          <Route exact path="/guardiancreate"><GuardianProfile token={this.state.token}/></Route>
          <Route exact path="/yourprofile"><ProfileViews token={this.state.token}/></Route>
          <Route exact path="/resources"><Resources /></Route>
        </Switch>
        <Switch>
        <Route exact path="/postboard"><GuardianPosts token={this.state.token}/></Route>
        </Switch>
        {/* {/* {this.protectedViews()} */}
        <Footer />
        </div>
        </div>
     );
  }
}
 

export default App;
