import React from "react";
import Layout from "../Layout/Layout";
import LeftSideBar from "../masterComponent/LeftSideBar";
import RightSideBar from "../masterComponent/RightSideBar";
import UserPost from "../Post/userPost";

import "./feed.css";

const Feed = () => {
  return (
    <Layout>
      <div className="feed-layout">
        <LeftSideBar />
        <div className="feed-wrapper">
          <UserPost />
        </div>
        <RightSideBar />
      </div>
    </Layout>
  );
};

export default Feed;
