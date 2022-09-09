import React from 'react'
import AddCommentForm from '../AddCommentForm'
import Comment from '../Comment'

export default function CommentsContainer({comments, add_comment, post_id}) {
  return (
    <div>
      {
        comments.map(comment => <Comment key={comment.id} {...comment} />)
      }
      <AddCommentForm add_comment={add_comment} post_id={post_id}/>
    </div>
  )
}
