import React from "react";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="timeline__header">
        <h2>ホーム</h2>
      </div>
      <TweetBox />
      <Post
        displayName="プログラミングチュートリアル"
        userName="Shu_Matsumoto"
        verified={true}
        text="初めてのツイート"
        avatar="https://source.unsplash.com/random"
        image="https://source.unsplash.com/random"
      />
    </div>
  );
};

export default Timeline;
