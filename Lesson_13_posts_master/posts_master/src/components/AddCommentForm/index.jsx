import React from 'react'
import s from './style.module.css'

export default function AddCommentForm({add_comment, post_id}) {

  const submit = event => {
    event.preventDefault();
    const {comment} = event.target;
    add_comment(post_id, comment.value);
    comment.value = '';
  }

  return (
    <form onSubmit={submit} className={s.add_comment_form}>
      <input type='text' name='comment' placeholder='Ваш комментарий'/>
      <button>Добавить</button>
    </form>
  )
}
