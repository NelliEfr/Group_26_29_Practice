import React from 'react'
import s from './style.module.css'
import { MailOutlined } from '@ant-design/icons'
import Form from '../Form'

export default function Contacts() {
  return (
    <section className={s.contacts}>
      <div className={['wrapper', s.all_blocks].join(' ')}>
        
        <div className={s.info_block}>
          <h2>Связь с нами</h2>
          <p>У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!</p>
          
          <div className={s.main_contacts}>
            <p className={s.phone}>+7 (111) 222-33-44</p>
            <div className={s.email}>
              <MailOutlined />
              <p>order@bu-one.ru</p>
            </div>
          </div>
        </div>

        <Form />

      </div>  
    </section>
  )
}
