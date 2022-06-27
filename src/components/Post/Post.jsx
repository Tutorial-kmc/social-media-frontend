import { Container } from "react-bootstrap";
import Layout from "../Layout/Layout";
import "./post.css";

import { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosconfig";
import UserPost from "./userPost";

const Post = () => {
  const [allPostsData, setAllPostsData] = useState([]);

  const getAllPosts = async () => {
    const response = await axiosInstance.get("/api/posts/allposts");
    const { data: { code, posts } = {} } = response;
    if (code === 200) {
      setAllPostsData(posts || []);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="post-body">
      {console.log("allPostsData", allPostsData)}
      <Layout>
        <Container>
          <UserPost />0
        </Container>
      </Layout>
    </div>
  );
};

export default Post;
