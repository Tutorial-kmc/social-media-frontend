import React from "react";
import "./post.css";
import Post1 from ".././assets/post1.jpg";
import Profile from ".././assets/zafar.jpg";

const UserPost = () => {
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="user-profile">
          <div className="profile-pic">
            <img src={Profile} alt="" />
          </div>
          <div className="profile-username">
            <span>khanzafer448</span>
          </div>
        </div>
        <div className="post-image">
          <img src={Post1} alt="" />
        </div>
        <div className="like-bar">
          <div className="like">
            <i className="fa-solid fa-heart"></i>
            <span>Like</span>
          </div>
          <div className="like">
            <i className="fa-solid fa-comment"></i>
            <span>Comment</span>
          </div>
          <div className="like">
            <i className="fa-solid fa-share"></i>
            <span>Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPost;
