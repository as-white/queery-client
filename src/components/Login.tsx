import React from "react";
import './style.css';
import {Button} from 'reactstrap';
import APIURL from '../helpers/evironment' 

const Regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);

interface LoginProps {
    name?: string;
    value?: string;
    updateToken: Function;
    handleToggle: () => void;
 }
 interface LoginState {
    email : string,
    password : string,
    errors : {
       email : string,
       password : string
    }
 }

class Login extends React.Component<LoginProps, LoginState>{

   constructor(props: LoginProps) {
      super(props);
      const initialState = {
         email : '',
         password: '',
         role: '',
         errors : {
            email : '',
            password : ''
         } 
      }
      this.state = initialState;
      this.handleChange = this.handleChange.bind(this);
   }
   handleChange = (event : any) => {
       event.preventDefault();
       const { name, value } = event.target;
       let errors = this.state.errors;
 switch (name) {
   case 'email':
      errors.email = Regex.test(value)? '': 'Email is not valid. ex: example@example.com';
      break;
   case 'password':
      errors.password = value.length < 8 ? 'Password must be at least eight characters long.': '';
      break;
   default:
     break;
 }
this.setState(Object.assign(this.state, { errors,[name]: value }));
console.log(this.state.errors);
}

     handleSubmit = (event : React.SyntheticEvent) => {
       event.preventDefault();
       let validity = true;
       Object.values(this.state.errors).forEach(
         (val) => val.length > 0 && (validity = false)
       );
       if(validity == true){
          console.log("Login successful!");
          fetch(`${APIURL}users/login`, {
            method: 'POST',
            body: JSON.stringify({email: this.state.email, password: this.state.password}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.updateToken(data.sessionToken, data.role)
            console.log(data.sessionToken);
            console.log(data);
        })
      //  }else{
      //     console.log("Error: cannot login.")
       }
     }

    render() {
        const {errors} = this.state
        return (
          <div className='wrapper'>
            <div className='form-wrapper'>
               <h2>Log In</h2>
               <form onSubmit={this.handleSubmit} noValidate >
                  <div className='email'>
                     <label htmlFor="email">Email</label>
                     <input type='email' name='email' onChange={this.handleChange}/>
                     {errors.email.length > 0 &&  <span style={{color: "red"}}>{errors.email}</span>}
                  </div>
                  <div className='password'>
                     <label htmlFor="password">Password</label>
                     <input type='password' name='password' onChange={this.handleChange}/>
                     {errors.password.length > 0 &&  <span style={{color: "red"}}>{errors.password}</span>}
                  </div>                         
                  <div className='submit'>
                     <button className="primarybutton">Login</button>
                  </div>
                  <p className="toggletext">Don't have a Queery account yet? <Button color="link" size="sm" className="toggle" onClick={this.props.handleToggle}>Sign up!</Button></p>
             </form>
         </div>
      </div>
     );
    }
   }

   export default Login;