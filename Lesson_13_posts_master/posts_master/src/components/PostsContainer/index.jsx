import React from 'react'
import Post from '../Post'
import s from './style.module.css'

export default function PostsContainer({posts, change_like, add_comment}) {
  return (
    <div>
      {
        posts.map(post => <Post key={post.id} {...post} change_like={change_like} add_comment={add_comment}/>)
      }
    </div>
  )
}
