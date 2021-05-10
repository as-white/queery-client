import * as React from 'react';

export interface FooterProps {
    
}
 
export interface FooterState {
    
}
 
class Footer extends React.Component<FooterProps, FooterState> {
    constructor(props: FooterProps) {
        super(props);
        this.state = {  };
    }
    render() { 
        return ( 
    <footer>
    <div className="footer-wrapper">
	<div className="section-1">
		<h2 className="footer">About Us</h2>
		<p className="footerabout">Our mission here at Queery is to provide a community that makes it easy to connect parents and guardians of LGBTQ+ children with caregivers who are allies that not only fit but respect all of their child's needs. In this day and age, it's so important that we make sure we are doing our best to protect LGBTQIA+ youth and provide them with adequate care and a safe-space they might not otherwise be able to find.</p>
	</div>
	<div className="section-2">
		<h2 className="footer">Links</h2>
		<ul>
			<li className="link"><a href="/">Home</a></li>
			<li className="link"><a href="/resources">Resources</a></li>
			<li className="link"><a href="">Contact us today</a></li>
		</ul>
	</div>
</div>
    <div className="copyright"><sub><span>Queery</span>&copy; <span className="year">2021</span></sub></div>
</footer>
         );
    }
}
 
export default Footer;