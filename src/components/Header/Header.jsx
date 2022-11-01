import { Navbar, Nav, Modal, Form, Button, FormControl } from "react-bootstrap";
import { useState } from "react";

import "./header.css";
import ImageUploader from "./ImageUploader";

import Logo from "../assets/logo.svg";
import Profile from "../assets/zafar.jpg";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="header">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <div className="logo">
            <img src={Logo} alt="" />
            <h5>TechMedia</h5>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <Nav.Link href="/">
                <i className="fa-solid fa-house-user"></i>
              </Nav.Link>
              <Nav.Link href="/post">
                <i className="fa-solid fa-passport"></i>
              </Nav.Link>
              <Nav.Link href="/chat">
                <i className="fa-solid fa-message"></i>
              </Nav.Link>
              <Nav.Link href="login">
                <i className="fa-solid fa-user"></i>
              </Nav.Link> */}

            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />

            <Button variant="outline-success" onClick={handleShow}>
              <div className="btn-icon">
                <i className="fa-solid fa-square-plus"></i>
              </div>
              Create
            </Button>
            <div className="profile-pic">
              <img src={Profile} alt="" />
            </div>
            <div>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Create Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>What's in your mind</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <ImageUploader />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Discard
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Post
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
