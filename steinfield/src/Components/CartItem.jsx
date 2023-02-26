import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteCartItem, getCartItem } from '../Redux/Cart/action'
import styles from '../Styles/Products.module.css'
import {Link} from 'react-router-dom'

const CartItem = ({ id, name, image, price, category, shipping, star }) => {

    const dispatch = useDispatch()
    const handleDelete=(id)=>{
        dispatch(deleteCartItem(id)).then(()=>dispatch(getCartItem()))
    }
    console.log("name is:",name)

    const [ counter, setCounter ] = useState(1);

    const handleIncrement = () => {
        setCounter(counter => counter + 1 );
    };

    const handleDecrement = () => {
        setCounter(counter => counter - 1 );
    };

    
  return (
      <Card margin={'auto'} boxShadow={'2xl'} >  
  <CardBody width={'250px'} >
    <Image className={styles.imag}
      src={image}
      alt={name}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{name}</Heading>
      <Text>
       {category} <br />
       {shipping}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        Rs : {price} 
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
        <Button variant='ghost' colorScheme='blue' onClick={()=>handleDelete(id)}>
        Delete
      </Button>
      
      <Button onClick={() => handleDecrement()} disabled={counter == 0}>-</Button>
            <Button disabled>{counter}</Button>
            <Button onClick={() => handleIncrement()}>+</Button>

      <Link to={'/checkout'}>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      </Link>
      
      
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default CartItem