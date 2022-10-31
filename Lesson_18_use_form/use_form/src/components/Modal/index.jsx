import React from 'react'
import s from './index.module.css'
import { CloseOutlined } from '@ant-design/icons'
import FormItem from '../FormItem'

export default function Modal({ active, setActive }) {
  return (
    <div className={[s.modal, active ? s.active : ''].join(' ')}>
      <div className={s.modal_content}>
        <CloseOutlined 
          className={s.crossIcon}
          onClick={() => setActive(false)} 
        />
        
        <FormItem 
        title={'Registration'}
        button={{submit: 'Registration', redirect: 'Login'}}
        infoText={'By registering on the site, you agree to our Rules and Privacy Policy and agree to receive newsletters.'}
        formType={'registration'}
        />
      </div>
    </div>
  )
}
