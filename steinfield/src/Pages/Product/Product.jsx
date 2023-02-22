import React, { useEffect } from 'react'
import { ProductCard } from '../../Components/ProductCard/ProductCard'
import Slider from "react-slick";
import './Product.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {useSelector,useDispatch} from 'react-redux'
import { getProducts } from '../../Redux/appReducer/action';

export const Product = () => {

  // const products =[1,2,3,4,5,6]
  const products = useSelector((store)=>store.appReducer.products)
  const dispatch =useDispatch()
  const inputChecbox =[1,2,3,4,5]

  useEffect(()=>{
    getProducts(dispatch)
  },[])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
<div className='productPage'>
    <div className='sidebar'>

      
      <div className='offer-slider'>
      {/* <div style={{border:'1px solid red'}}>
<Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider> 
</div> */}
      </div>
      
      <div className='filtering-container'>
        <p style={{fontSize:'16px',color:'#333333'}}>Categories</p>
        <p>Restaruants</p>
        <div style={{border:'1px solid gray',width:'100%'}}></div>
        <p>Location</p>
        <input placeholder='search for a location'/>

        {
           inputChecbox.map((el)=>(
            <input type={"checkbox"}/>
            ))
         }

      </div>
    </div>  

    <div className='product-container'>{
      products.map((el)=>(
     <ProductCard key={el.id} {...el}/>
     ))
     } 
    </div>   

</div>
  )
}
