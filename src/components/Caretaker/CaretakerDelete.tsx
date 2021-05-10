import * as React from 'react';
import {Button} from 'reactstrap';
import APIURL from '../../helpers/evironment'

export interface CaretakerDeleteProps {
    token: string;
    caretaker: any;
    fetchMyProfile: Function;
}
 
export interface CaretakerDeleteState {
    
}
 
class CaretakerDelete extends React.Component<CaretakerDeleteProps, CaretakerDeleteState> {
    constructor(props: CaretakerDeleteProps) {
        super(props);
        this.state = {  };
    }

    deleteProfile = () => {
        let token = this.props.token ? this.props.token: localStorage.getItem("token");
        fetch(`http://${APIURL}caretakerinfo/${this.props.caretaker.id}`, {
          method: "DELETE",
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization:  token ? token : "",
          }),
        }).then(() => this.props.fetchMyProfile());
      };

    render() { 
        return ( 
            <div>
                <Button onClick={() => this.deleteProfile()}>Delete</Button>
            </div>
         );
    }
}
 
export default CaretakerDelete;