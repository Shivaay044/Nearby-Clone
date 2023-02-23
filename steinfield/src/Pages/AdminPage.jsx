import React, {useState,useEffect} from 'react'
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import {getAdminData, addAdminData} from "../Redux/Admin/action"

export const AdminPage = () => {
    // const adminData = useSelector((store) => store.AdminReducer.adminData);
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const [place, setPlace] = useState("");
    const [city, setCity] = useState("");
    useEffect(() => {
        dispatch(getAdminData);
      }, []);
      const handleAddData = (e) => {
        e.preventDefault();
        let newData = {
          name,
          image,
          price,
        };
        dispatch(addAdminData(newData)).then((res) => {
            dispatch(getAdminData);
            //console.log(newData);
          });
          setName("");
          setImage("");
          setPrice("");
          setPlace("");
          setCity("");
        };

  return (
    <Wrapper>
   
 <FormControl onSubmit={handleAddData} isRequired>
  <FormLabel>Merchant Name</FormLabel>
  <Input placeholder='Merchant Name' value={name} />
  
  <FormLabel>Image URL</FormLabel>
  <Input placeholder='Image URL' value={image} type="url" />

  <FormLabel>Merchant Location</FormLabel>
  <Input placeholder='Merchant Location' value={place}/>

  <FormLabel>Merchant City</FormLabel>
  <Input placeholder='Merchant City' value={city} />

  <FormLabel>Price</FormLabel>
  <Input placeholder='Price' value={price} type="number"/>
  <br /><br />

  <Button colorScheme="teal">Add Merchant</Button>
</FormControl>

 </Wrapper>
  );
}


const Wrapper=styled.div`
    padding: 60px;
    width: 50%;
    margin: auto;
    
   
`;
