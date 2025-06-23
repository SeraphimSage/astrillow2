import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PersonalLogo from "../images/Favicon.png";

import "../css/menu.css";

function Menu() {
	return (
		<Navbar
			expand="lg"
			bg="dark"
			data-bs-theme="dark"
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
							className="d-inline-block align-top logo-navbar-img"
						/>{" "}
						Astrillow2
					</div>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />

				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Menu;
