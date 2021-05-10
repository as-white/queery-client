import React from "react";
import { CaretakerResponse, Result } from "./GuardianInterface";
import CaretakerCards from "./CaretakerCards";
import { CardColumns, Input, CardGroup, CardDeck } from "reactstrap";
import GuardianCard from "./GuardianCard";
import CaretakerInfo from './CaretakerInfo';
import APIURL from '../../helpers/evironment';

export interface GuardianMainpageProps {
  token: string;
  // editSearchTerm?: string;
}

export interface GuardianMainpageState {
  caretaker: any;
}

class GuardianMainpage extends React.Component<GuardianMainpageProps, GuardianMainpageState> {
  constructor(props: GuardianMainpageProps) {
    super(props);
    this.state = { caretaker: [] };
  }

  // editSearchTerm = (e: any) => {
  //   let search = this.state.caretaker;
  //   this.setState({ caretaker: e.target.value });
  //   console.log(search);
  // };

  componentDidMount () {
    let token = this.props.token ? this.props.token : localStorage.getItem("token");

    fetch(`${APIURL}caretakerinfo/`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: token ? token : "",
        })
    }).then(
        (response) => response.json())
      .then((data: CaretakerResponse) => {console.log(data);
      this.setState({caretaker: data });
      
    });
  }

  render() {
    return (
      <CardColumns>
        {this.state.caretaker.length > 0 ? (
          this.state.caretaker.map(
            (caretaker: Result) => (
              <CaretakerCards token={this.props.token} caretaker={caretaker}/>
            )
          )
        ) : (
            <GuardianCard token={this.props.token} />
        )}
      </CardColumns>
      
    );
  }
}

export default GuardianMainpage;