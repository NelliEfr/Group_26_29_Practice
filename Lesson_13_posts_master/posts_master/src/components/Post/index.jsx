import React from 'react'
import CommentsContainer from '../CommentsContainer';
import s from './style.module.css'

export default function Post({id, title, text, like, comments, change_like, add_comment}) {

  const like_classes = [s.like_btn, like ? s.like_btn_active : ''];

  return (
    <div className={s.post}>
      <h2>{title}</h2>
      <p>{text}</p>
      <p 
        className={like_classes.join(' ')}
        onClick={() => change_like(id)}>
          {
            like ? 'Liked' : 'Like?'
          }
      </p>
      <CommentsContainer comments={comments} add_comment={add_comment} post_id={id}/>
    </div>
  )
}
