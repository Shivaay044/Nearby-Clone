import React from 'react'
import './ProductCard.css'
import {BiRupee} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import {Heading,Text} from '@chakra-ui/react'
export const ProductCard = ({id,imageUrl,merchantCity,distanceFromUser,merchantLocation,merchantName,price}) => {
  return (
    
    <div className='product'>
      <Link className='Link' to={`/product/${id}`} >
      <img src={imageUrl} alt={merchantName} width={'100%'} style={{borderRadius:'2%'}}/>
      </Link>
      
      <Heading size ='sm'className='display-flex-container'>{merchantName}</Heading>
    <div className='display-flex-container'>
      <Text >{distanceFromUser}</Text>
      <Text color={'gray'}>{'- '}{merchantLocation}</Text>
   
      </div> 
      <div className='display-flex-container'>
     <button style={{backgroundColor:'#F47B5F',color:'white',border:'none' ,fontSize:'12px',padding:'0 5px'}}>DEALS</button>
      <Text style={{fontSize:'12px'}}>{'Drinks with Starters from '} </Text>
      <BiRupee style={{fontSize:'12px'}}/>
      <Text> {price}</Text>

      </div> 
     
    </div>
  
  )
}
