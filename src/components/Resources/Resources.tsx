import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';

export interface ResourcesProps {
    
}
 
export interface ResourcesState {
    
}
 
class Resources extends React.Component<ResourcesProps, ResourcesState> {
    constructor(props: ResourcesProps) {
        super(props);
        this.state = { };
    }
    render() { 
        return ( 
            <Container>
            <Row>
            <Col className="resources">
                {/* <h1>Welcome to Queery.</h1>
                <br/> */}
                <h5>Here, you can find an ever-growing list of resources for you, your child, a friend, a family member. The first step to protecting our LGBTQ+ friends and family is being informed.</h5>
                </Col>
                <Col xs="3">
                <h6>Crisis</h6>
                <br />
                <ul>
			<li className="link"><a href="/">The Trevor Project</a></li>
			<li className="link"><a href="/resources">Crisis Text Line</a></li>
			<li className="link"><a href="">Trans Lifeline</a></li>
		</ul>
                </Col>
                <Col xs="3">
                <h6>Healthcare</h6>
                <br />
                <ul>
			<li className="link"><a href="https://hrc.org/hei">Human Rights Campaign Healthcare Equality Index</a></li>
			<li className="link"><a href="http://www.glma.org/index.cfm?fuseaction=Page.viewPage&pageId=939&grandparentID=534&parentID=938&nodeID=1">GLMA Health Professionals Advancing LGBT Equality</a></li>
            </ul>
                </Col>
                <Col xs="3"><h6>Organizations</h6>
                <br />
                <ul>
			<li className="link"><a href="http://www.itgetsbetter.org/">It Gets Better Project</a></li>
            <li className="link"><a href="https://www.nqttcn.com/">The National Queer and Trans Therapists of Color Network</a></li>
			<li className="link"><a href="https://transequality.org/">National Center For Transgender Equality</a></li>
			<li className="link"><a href="https://www.glsen.org/">GLSEN</a></li>
            <li className="link"><a href="http://asianprideproject.org/">Asian Pride Project</a></li>
            <li className="link"><a href="https://victoryfund.org/">LGBTQ Victory Fund</a></li>
            <li className="link"><a href="http://wearetheyouth.org/">We Are The Youth</a></li>
            <li className="link"><a href="https://gillfoundation.org/">Gill Foundation</a></li>
		</ul>
        </Col>
            </Row>
            </Container>
         );
    }
}
 
export default Resources;