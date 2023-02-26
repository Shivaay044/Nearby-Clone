import React from 'react'
import './ProductCard.css'
import {BiRupee} from 'react-icons/bi'
import { Link } from 'react-router-dom'
export const ProductCard = ({id,imageUrl,merchantCity,distanceFromUser,merchantLocation,merchantName,price}) => {
  return (
    
    <div className='product'>
      <Link className='Link' to={`/product/${id}`} >
      <img src={imageUrl} alt={merchantName} width={'100%'} style={{borderRadius:'2%'}}/>
    
      
      <h4 style={{fontSize:'15px'}}className='display-flex-container'>{merchantName}</h4>
    <div className='display-flex-container'>
    <p style={{fontWeight:'bold',fontSize:'12px'}}>{distanceFromUser}</p><p style={{fontSize:'12px',color:'gray' }}>{'- '}{merchantLocation}</p>
    <p style={{fontSize:'12px',color:'gray' }}>{merchantCity}</p></div> 
      <div className='display-flex-container'>
     <button style={{backgroundColor:'#F47B5F',color:'white',border:'none'}}>Deals</button> <p style={{fontSize:'12px'}}>{'Drinks with Starters from '} </p>
      <BiRupee style={{fontSize:'12px'}}/>
      <p style={{fontSize:'12px'}}> {price}</p>

      </div> 
      </Link>
    </div>
  
  )
}