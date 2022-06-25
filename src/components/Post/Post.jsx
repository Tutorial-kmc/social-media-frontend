import { Container } from "react-bootstrap";
import Layout from "../Layout/Layout";
import "./post.css";

import Post1 from ".././assets/post1.jpg";
import Profile from ".././assets/zafar.jpg";

const Post = () => {
  return (
    <div className="post-body">
      <Layout>
        <Container>
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
                  <i className="lar la-thumbs-up"></i>
                  <span>Like</span>
                </div>
                <div className="like">
                  <i className="las la-comment-alt"></i>
                  <span>Comment</span>
                </div>
                <div className="like">
                  <i className="las la-share"></i>
                  <span>Share</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  );
};

export default Post;
