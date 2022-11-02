import React from 'react'
import s from './index.module.css'
import { CloseOutlined } from '@ant-design/icons'
import FormItem from '../FormItem'
import { Routes, Route } from 'react-router-dom'

export default function Modal({ active, setActive }) {
  return (
    <div className={[s.modal, active ? s.active : ''].join(' ')}>
      <div className={s.modal_content}>
        <CloseOutlined 
          className={s.crossIcon}
          onClick={() => setActive(false)} 
        />
        
        <Routes>

          <Route 
            path='/registration_form'
            element={
              <FormItem 
                title={'Registration'}
                button={{submit: 'Registration', redirect: 'Login'}}
                infoText={'By registering on the site, you agree to our Rules and Privacy Policy and agree to receive newsletters.'}
                formType={'registration'}
                btn_link={'/login_form'}
              />} 
          />

          <Route 
            path='/login_form'
            element={        
              <FormItem 
                title={'Login'}
                button={{submit: 'Login', redirect: 'Registration'}}
                infoText={'Restore password'}
                formType={'login'}
                btn_link={'/registration_form'}
              />}
          />

          <Route 
            path='/reset_password_form'
            element={
              <FormItem 
                title={'Reset password'}
                button={{submit: 'Reset'}}
                infoText={'The temporary password is valid for 24 hours.'}
                formType={'reset_password'}
                infoTextAdditional={'To receive a temporary password, you must enter the email address you provided during registration.'}
              />}
          />

        </Routes> 
      </div>
    </div>
  )
}
