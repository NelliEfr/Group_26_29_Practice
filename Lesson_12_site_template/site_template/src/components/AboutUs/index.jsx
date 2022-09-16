import React from 'react'
import AboutUsCard from '../AboutUsCard'
import s from './style.module.css'
import {data} from './data'

export default function AboutUs() {
  return (
    <section className={['wrapper', s.about_us].join(' ')}>
      <div>
        <p className='subheader'>О нас</p>
        <h2>Компания <span className={s.accent}>ИванПром</span></h2>
        <p className={s.infoText}>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.</p>
      </div>

      <div className={s.achievements}>
        {
          data.map(el => <AboutUsCard key={el.id} {...el}/>)
        }
      </div>
    </section>
  )
}
