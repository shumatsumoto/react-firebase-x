import { Avatar, Button } from '@mui/material'
import React from 'react'

const TweetBox = () => {
  return (
    <div className='tweetBox'>
      <form>
        <Avatar />
        <input placeholder="いまどうしてる?" type="text" />
        <input className='tweetBox__imageInput' placeholder="画像のURLを貼り付けてください" type="text" />
        <Button className='tweetBox__tweetButton' type='submit'>ツイートする</Button>
      </form>
    </div>
  )
}

export default TweetBox