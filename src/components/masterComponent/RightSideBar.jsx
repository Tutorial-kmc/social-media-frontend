import React from "react";
import { Button } from "react-bootstrap";
import "./rightsidebar.css";

import Profile from "../assets/man.png";
import Profile2 from "../assets/woman.png";

const RightSideBar = () => {
  return (
    <div className="right-side-bar">
      <div className="right-user-req">
        <div className="right-profile">
          <div className="profile-pic">
            <img src={Profile} alt="" />
          </div>
          <div className="profile-username">
            <h6>Farhaj Hussain</h6>
            <p>Wants to Add you</p>
          </div>
        </div>
        <div className="right-req-btn">
          <Button variant="primary">Accept</Button>
          <Button variant="outline-secondary">Decline</Button>
        </div>
      </div>
      <div className="right-user-req">
        <div className="right-profile">
          <div className="profile-pic">
            <img src={Profile2} alt="" />
          </div>
          <div className="profile-username">
            <h6>Fahad Khan</h6>
            <p>Wants to Add you</p>
          </div>
        </div>
        <div className="right-req-btn">
          <Button variant="primary">Accept</Button>
          <Button variant="outline-secondary">Decline</Button>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
