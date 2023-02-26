import React, {useState} from 'react'
import { useEffect } from "react";
import styles from "./AdminPage.module.css";
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import styled from 'styled-components'
import { useDispatch, useSelector} from "react-redux";
import {getAdminData, addAdminData, deleteAdminData, updateAdminData} from "../Redux/Admin/action"
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

let initialState={
  merchantName:"",
  imageUrl:"",
  merchantLocation:"",
  merchantCity:"",
  price:"",
}

export const AdminPage = () => {
    const adminData = useSelector((store) => store.AdminReducer.adminData);
    const dispatch = useDispatch();
    const [merchant,setMerchant]=useState(initialState)

    useEffect(() => {
      dispatch(getAdminData);
    }, []);

    const handleChange=(e)=>{
      const{name,value}=e.target
   
    //console.log(e.target.name)
    setMerchant(prev=>{
      return{...prev,[name]: name=== "price"? +value : value}
    })
   // console.log(e)
    }
 
   
      const handleAddData = (e) => {

        e.preventDefault();
        dispatch(addAdminData(merchant));
      
        setMerchant(initialState)

        let newData=merchant
      
      
        dispatch(addAdminData(newData)).then((res) => {
            dispatch(getAdminData);
            console.log(newData);
          });
        
        };


        const handleDelete = (id) => {
          dispatch(deleteAdminData(id)).then(() => {
            dispatch(getAdminData);
          });
        };

        const handleEdit = (id)=>{
          let newEditData = merchant
           
          dispatch(updateAdminData(newEditData)).then(() => {
            dispatch(getAdminData);
          });
        }
         

  return (
    <div >
   <div style={{background: "-webkit-linear-gradient(60deg, #ee7752,#ffff, #23a6d5 80%)"}}>
    <Wrapper>
 <form onSubmit={(e)=>{handleAddData(e)}} >
  <FormControl>
  <FormLabel>Merchant Name</FormLabel>
  <Input placeholder='Merchant Name'  type="text" name="merchantName" value={merchant.merchantName}  onChange={(e)=>handleChange(e)} />
  
  <FormLabel >Image URL</FormLabel>
  <Input placeholder='Image URL' name="imageUrl" value={merchant.imageUrl}  type="url"  onChange={(e)=>handleChange(e)}  />

  <FormLabel>Merchant Location</FormLabel>
  <Input placeholder='Merchant Location' name="merchantLocation" value={merchant.merchantLocation}  onChange={(e)=>handleChange(e)}/>

  <FormLabel>Merchant City</FormLabel>
  <Input placeholder='Merchant City' name="merchantCity" value={merchant.merchantCity} onChange={(e)=>handleChange(e)} />

  <FormLabel>Price</FormLabel>
  <Input placeholder='Price' name="price" value={merchant.price} type="number" onChange={(e)=>handleChange(e)}/>
  <br /><br />

  <Button type='submit' colorScheme="teal">Add Merchant</Button>
  </FormControl>
</form>

 </Wrapper>
 </div>

 <div className={styles.AdminProdcutCard}>
  <br />
        <TableContainer >
          <Table variant="striped" colorScheme="cyan">
            <Thead  w={"100%"} bgColor={"blue.400"}>
              <Tr>
                <Th color="white">S. No.</Th>
                <Th color="white">Name</Th>
                <Th color="white" isNumeric>
                  Price
                </Th>
                <Th color="white">Image</Th>
                <Th color="white">Location</Th>
                <Th  textAlign={"center"} color="white">City</Th>
                <Th color="white">EDIT</Th>
                <Th color="white">DELETE</Th>
              </Tr>
            </Thead>
            {adminData.length > 0 &&
              adminData.map((el) => {
                return (
                  <Tbody>
                    <Tr >
                      <Td>{el.id} </Td>
                      <Td > {el.merchantName}</Td>
                      <Td isNumeric>Price : {el.price} </Td>
                      <Td>
                        <img src={el.imageUrl} />
                      </Td>
                      <td>{el.merchantCity}</td>
                      <td>{el.merchantLocation}</td>
                      <Td>
                        <Button border={"1px solid gray"}  onClick={()=>handleEdit(el.id)}>EDIT</Button>
                      </Td>
                      <Td>
                        <Button border={"1px solid gray"}  onClick={()=> handleDelete(el.id)}>
                          DELETE
                        </Button>
                      </Td>
                    </Tr>
                  </Tbody>
                );
              })}
          </Table>
        </TableContainer>
      </div>

 </div>

 
  );
}


const Wrapper=styled.div`
    padding: 60px;
    width: 50%;
    margin: auto;
    margin-top: 100px;
    background: -webkit-linear-gradient(65deg, #ee7752,#ffff, #23a6d5 80%);
   border-radius: 5%;
`;


