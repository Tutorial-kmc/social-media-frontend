import React from "react";
import { Nav, Button } from "react-bootstrap";
import "./leftsidebar.css";

import Profile from "../assets/zafar.jpg";
import blogImg from "../assets/blogpost.svg";

const LeftSideBar = () => {
  return (
    <div className="left-side-bar">
      <div className="feed-user-profile">
        <div className="profile-pic">
          <img src={Profile} alt="" />
        </div>
        <div className="profile-username">
          <h6>Md Saiduzzafar Khan</h6>
          <p>khanzafer448</p>
        </div>
      </div>
      <div className="left-menu">
        <Nav>
          <Nav.Link href="#home">
            <div className="nav-icon">
              <i className="fa-solid fa-house-user"></i>
            </div>
            Home
          </Nav.Link>
          <Nav.Link href="#home">
            <div className="nav-icon">
              <i className="fa-solid fa-user"></i>
            </div>
            People
          </Nav.Link>
          <Nav.Link href="#home">
            <div className="nav-icon">
              <i className="fa-solid fa-image"></i>
            </div>
            Photos
          </Nav.Link>
          <Nav.Link href="#home">
            <div className="nav-icon">
              <i className="fa-solid fa-newspaper"></i>
            </div>
            News Feed
          </Nav.Link>
          <Nav.Link href="#home">
            <div className="nav-icon">
              <i className="fa-solid fa-user"></i>
            </div>
            Profile
          </Nav.Link>
          <Nav.Link href="#home">
            <div className="nav-icon">
              <i className="fa-solid fa-gear"></i>
            </div>
            Settings
          </Nav.Link>
        </Nav>
      </div>
      <div className="left-invitation">
        <h5>Invitation</h5>
        <span>5</span>
      </div>
      <div className="left-blog">
        <div className="blog-post">
          <img src={blogImg} alt="blog" />
        </div>
        <div className="left-blog-btn">
          <Button variant="success">Accept Invitation</Button>
          <Button variant="outline-success">
            <i className="fa-solid fa-xmark"></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
