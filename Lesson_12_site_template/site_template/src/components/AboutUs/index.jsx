import React from 'react'
import AboutUsCard from '../AboutUsCard'
import {data} from './data'

export default function AboutUs() {
  return (
    <section>
      <div>
        <p className='subheader'>О нас</p>
        <h2>Компания ИванПром</h2>
        <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.</p>
      </div>

      <div>
        {
          data.map(el => <AboutUsCard key={el.id} {...el}/>)
        }
      </div>
    </section>
  )
}
