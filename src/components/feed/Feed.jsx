import React from "react";
import Layout from "../Layout/Layout";
import LeftSideBar from "../masterComponent/LeftSideBar";
import RightSideBar from "../masterComponent/RightSideBar";

import "./feed.css";

const Feed = () => {
  return (
    <Layout>
      <div className="feed-layout">
        <LeftSideBar />
        <RightSideBar />
      </div>
    </Layout>
  );
};

export default Feed;
