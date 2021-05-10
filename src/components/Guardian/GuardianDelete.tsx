import * as React from 'react';
import {Button} from 'reactstrap';
import APIURL from '../../helpers/evironment'

export interface GuardianDeleteProps {
    token: string;
    guardian: any;
    fetchGuardianProfile: Function;
}
 
export interface GuardianDeleteState {
    
}
 
class GuardianDelete extends React.Component<GuardianDeleteProps, GuardianDeleteState> {
    constructor(props: GuardianDeleteProps) {
        super(props);
        this.state = {  };
    }

    deleteGuardianProfile = () => {
        let token = this.props.token ? this.props.token: localStorage.getItem("token");
        fetch(`http://${APIURL}guardianinfo/${this.props.guardian.id}`, {
          method: "DELETE",
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization:  token ? token : "",
          }),
        }).then(() => this.props.fetchGuardianProfile());
      };

    render() { 
        return ( 
            <div>
                <Button onClick={() => this.deleteGuardianProfile()}>Delete</Button>
            </div>
         );
    }
}
 
export default GuardianDelete;