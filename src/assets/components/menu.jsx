import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PersonalLogo from "../images/Favicon.png";

import "../css/menu.css";

function Menu() {
	return (
		<Navbar
			expand="lg"
			className="bg-body-tertiary"
		>
			<Container className="navbar-wrapper">
				<Navbar.Brand href="/">
					<div className="logo-content-wrapper">
						<img
							alt="Personal Logo"
							src={PersonalLogo}
							width="30"
							height="30"
							className="logo d-inline-block align-top"
						/>{" "}
						Astrillow2
					</div>
				</Navbar.Brand>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Menu;
