import React, { useEffect, useState } from 'react'
import { ProductCard } from '../../Components/ProductCard/ProductCard'
import Slider from "react-slick";
import './Product.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {useSelector,useDispatch} from 'react-redux'
import { getProducts } from '../../Redux/appReducer/action';
import { useLocation, useSearchParams } from 'react-router-dom';

export const Product = () => {


const [SearchParams,setSearchParams] =useSearchParams()
const initialmerchantLocation =SearchParams.getAll("merchantLocation")
const [merchantLocation,setmerchantLocation] =useState(initialmerchantLocation)

const initialOrder =SearchParams.get("order")
const [order,setOrder] =useState(initialOrder)
const [btnColor,setBtnColor]=useState('#686654')



const handleSorting =(e)=>{
  console.log(e.target)
  setOrder(e.target.value)
  setBtnColor('red')
  
}

const handleFiltering =(e)=>{
console.log(e.target.value)
  let newmerchantLocation =[...merchantLocation]

  if(newmerchantLocation.includes(e.target.value)){

    newmerchantLocation.splice(newmerchantLocation.indexOf(e.target.value),1)
  }
  else{
    newmerchantLocation.push(e.target.value)
  }
setmerchantLocation(newmerchantLocation)
}



useEffect(()=>{
  const params={
   merchantLocation,
  }
  order&& (params.order=order)
  setSearchParams(params)
},[order,merchantLocation])


  // const products =[1,2,3,4,5,6]
  const products = useSelector((store)=>store.appReducer.products)

  const dispatch =useDispatch()
  const inputChecbox =[1,2,3,4,5]
const location=useLocation()
  useEffect(()=>{

    let paramObj={
      params:{

       merchantLocation: SearchParams.getAll('merchantLocation'),
        _sort : order && 'price',
        _order : order && SearchParams.get('order')
    
    
      }
    }
   dispatch(getProducts(paramObj))
  },[location.search])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const styles={
    backgroungColor:'red'
  }
  return (
    <>
    <div className='subNav'>
      <div className='nav-heading'>
      <h4 style={{   color:'#55504B'}}>Promos & Filters</h4> 
      <h4 style={{   color:'#55504B'}}>Drinks & Nightlife Tags - All in New Delhi</h4>   
      
      </div>
      <div className='sorting-div'>
        <button   className='sort-btn' value ='desc'onClick={handleSorting}>Price (High to Low)</button>
      <button   className='sort-btn' value ='asc' onClick={handleSorting}>Price (Low to High)</button>
      </div> 
    
    </div>
<div className='productPage'>

    <div className='sidebar'>

      
      <div className='offer-slider'>

    
<Slider {...settings}>
          <div>
            <h3>Win Rs 500 instant off code</h3>
            <p>Valid on all prepaid deals | No minimum purchase</p>
           
         
          </div>
          <div><h3>25% OFF</h3>
            <p>Get discount code of 25% value | All Restaurant Deals</p>
          </div>
          <div>
          <h3>25% OFF</h3>
           <p>Get discount code of 25% value | All Spa Deals</p> 
          </div>
          <div>
          <h3>25% OFF</h3>
            <p>Get discount code of 25% value | All Activities Deals</p>
          </div>
          <div>
          <h3>25% OFF</h3>
            <p>Get discount code of 25% value | All Salon Deals</p>
          </div>
          <div>
          <h3>5% OFF</h3>
            <p>5% Instant discount upto ₹100 | Valid for new users only.</p>
          </div>
        </Slider> 

    
      </div>
      
      <div className='filtering-container'>
        <p style={{fontSize:'16px',color:'#333333'}}>Categories</p>
        <p>Restaruants</p>
        <div style={{border:'1px solid gray',width:'100%'}}></div>
        <p>Location</p>
        <input placeholder='search for a location'/>

      
            
           <div>
            <input type={"checkbox"} onChange={handleFiltering} value ='Greater Kailash 1' checked={merchantLocation.includes('Greater Kailash 1')}/>
            <label>Greater Kailash 1 </label>
            
            </div>
            <br></br>
            <div>
            <input type={"checkbox"} onChange={handleFiltering} value='Karol Bagh' checked={merchantLocation.includes('Karol Bagh')}/>
            <label>Karol Bagh</label>
            </div>
            <br></br>
            <div>
            <input type={"checkbox"} onChange={handleFiltering} value={'Samalka'} checked={merchantLocation.includes('Samalka')} />
            <label>Samalka </label>
            </div>
            <br></br>
            <div>
            <input type={"checkbox"} onChange={handleFiltering} value={'AeroCity'} checked={merchantLocation.includes('AeroCity')} />
            <label>AeroCity </label>
            </div>
            <br></br>
            <div>
            <input type={"checkbox"} onChange={handleFiltering} value={'Indraprastha'} checked={merchantLocation.includes('Indraprastha')} />
            <label>Indraprastha </label>
            </div>
            <div>

              
            {/* <input type={"checkbox"}  /> */}
            {/* <label>Greater kailashn 1 </label> */}

            </div>

      </div>
    </div>  

    <div className='product-container'>{
      products.map((el)=>(
     <ProductCard key={el.id} {...el}/>
     ))
     } 
    </div> 



</div>
</>
  )
}