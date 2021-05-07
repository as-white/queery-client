import React from "react";
import { CaretakerResponse, Result } from "./GuardianInterface";
import CaretakerCards from "./CaretakerCards";
import { CardColumns } from "reactstrap";

export interface GuardianMainpageProps {
  token: string;
  results: [];
}

export interface GuardianMainpageState {
  caretaker: any;
}

class GuardianMainpage extends React.Component<GuardianMainpageProps, GuardianMainpageState> {
  constructor(props: GuardianMainpageProps) {
    super(props);
    this.state = { caretaker: [] };
  }

  componentDidMount () {
    let token = this.props.token ? this.props.token : localStorage.getItem("token");

    fetch(`http://localhost:3000/caretakerinfo/`, {
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
              <CaretakerCards caretaker={caretaker}/>
            )
          )
        ) : (
          <></>
        )}
      </CardColumns>
    );
  }
}

export default GuardianMainpage;