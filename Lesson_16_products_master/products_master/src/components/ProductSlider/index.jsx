import React, { useContext } from 'react'
import Slider from "react-slick";
import { Context } from '../../context'

export default function ProductSlider() {

  const { products } = useContext(Context);

  const prod_imgs = products.map(el => el.images);

  console.log(prod_imgs);

  const settings = {
    dots: true,
    infinite: true
  };

  return (
    <div>
      <Slider {...settings}>
        {
          prod_imgs.map(el => <img src={el} alt='product_photo' key={el} />)
        }
      </Slider>
    </div>
  )
}
