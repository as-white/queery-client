import * as React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardBody, CardColumns, CardText, CardSubtitle, CardTitle, CardDeck } from 'reactstrap';
import APIURL from '../../helpers/evironment'

export interface GuardianPostsProps {
    token: string
}
 
export interface GuardianPostsState {
    firstname: string,
    lastname: string,
    message: string
    guardian: []
}
 
class GuardianPosts extends React.Component<GuardianPostsProps, GuardianPostsState> {
    constructor(props: GuardianPostsProps) {
        super(props);
        this.state = { 
        firstname: "",
        lastname: "",
        message: "",
        guardian: [],
        };
    }

    handleSubmit = (event : React.SyntheticEvent) => {
        event.preventDefault();
        let token = this.props.token ? this.props.token : localStorage.getItem("token");
    
           fetch(`http://${APIURL}posts/`, {
             method: 'POST',
             body: JSON.stringify({
              firstname: this.state.firstname,
              lastname: this.state.lastname,
              message: this.state.message,
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
             this.setState({message: ""});
         })
          // .catch((err) => {
          //   console.log(err);
          // })
        }

        fetchPosts = () => {
            // event.preventDefault();
            let token = this.props.token ? this.props.token : localStorage.getItem("token");
        
            fetch(`http://${APIURL}posts/`, {
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
            this.fetchPosts()
        }

    render() { 
        return ( 
    <div className='wrapper'>
        <div className='form-wrapper'>
    <Form onSubmit={this.handleSubmit}>
      <FormGroup>
        
        <Input type="text" name="email" id="exampleEmail" placeholder="First Name" onChange={(e) => this.setState({firstname: e.target.value})}/>
      </FormGroup>
      <FormGroup>
        <Input type="text" name="email" id="examplePassword" placeholder="Last Name" onChange={(e) => this.setState({lastname: e.target.value})}/>
      </FormGroup>
      <FormGroup>
        <Label for="message">Message</Label>
        <Input type="textarea" name="text" id="exampleText" onChange={(e) => this.setState({message: e.target.value})}/>
      </FormGroup>
      <div className='submit'>
      <Button className="postbutton">Submit</Button>
        </div>
    </Form>
    </div>
    {this.state.guardian.map((guardian: GuardianPostsState) => (
    <div className="wrapper">
    <Col xs="6">
    <Card className="posts">
    <CardTitle><h6><b>{guardian.firstname} {guardian.lastname}</b></h6></CardTitle>
          <CardSubtitle><i>{guardian.message}</i></CardSubtitle>
          </Card>
      </Col>
      </div>
    ))}
    </div>
    );
    }
}
 
export default GuardianPosts;