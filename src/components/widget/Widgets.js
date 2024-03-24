import { Search } from '@mui/icons-material'
import React from 'react'
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import './Widgets.css'

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <Search className='widgets__searchIcon' />
        <input placeholder='キーワード検索' type='text' />
      </div>

      <div className='widgets__widgetContainer'>
        <h2>いまどうしてる？</h2>
        {/* ライブラリ追加 */}
        <TwitterTweetEmbed tweetId={"1771916063070187927"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="shumatsumoto328"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/shumatsumoto328"}
          options={{ text: "#ちいかわ", via: "Shu_Matsumoto" }}
        />
      </div>
    </div>
  )
}

export default Widgets