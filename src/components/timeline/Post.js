import {
  ChatBubbleOutline,
  FavoriteBorder,
  PublishOutlined,
  Repeat,
  VerifiedUser,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";

const Post = ({ displayName, userName, verified, text, image, avator }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avator} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>{displayName}</h3>
            <span className="post__headerSpecial">
              <VerifiedUser className="post__badge" />@{userName}
            </span>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="" />
        <div className="post__footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
