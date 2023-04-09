import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'
import SimpleImageSlider from "react-simple-image-slider";
import styles from './SingleProduct.module.css'
import { useParams } from "react-router-dom";
import {Button,Text} from '@chakra-ui/react'

// SINGLE PRODUCT PAGE
const SingleProduct = () => {
  const params = useParams();
  console.log("uu", params)

  const [data, setData] = useState({});

  // getting data of single product by ID
  const getProduct = (dispatch) => {
    console.log("ac", `https://stienfildapi.onrender.com/data/${params.id}`)
    return axios
      .get(`https://stienfildapi.onrender.com/data/${params.id}`)
      .then((r) => setData(r.data))
      .catch((e) => console.log(e));
  };
  
  useEffect(() => {
    getProduct();
  }, []);

  console.log(data)
  const img = data && data.images && data.images.length > 0 ? data.images[0] : ""
  const img1 = data && data.images && data.images.length > 0 ? data.images[1] : ""
  const img2 = data && data.images && data.images.length > 0 ? data.images[2] : ""
  const img3 = data && data.images && data.images.length > 0 ? data.images[3] : ""
  const img4 = data && data.images && data.images.length > 0 ? data.images[4] : ""

  const images = [
    { url: img1 },
    { url: img2 },
    { url: img3 },
    { url: img4 },


  ];


  if (!data && !data.images) {
    return;
  }
  return (
    <div id={styles.main_single} >
      <div >
      </div>
      <div className={styles.outer} >
        <div className={styles.div1} >
          <h1></h1>
          <Text style={{ margin: "1px", color: "gray", }}> {data.Category}</Text>
          <h3 >{data.merchantName}</h3>
          <h5 style={{ margin: "1px", color: "gray", }}>{data.merchantLocation}</h5>
          <h3>{data.distanceFromUser} <span><a>Get Directions</a></span> </h3>
          <Link className='Link'><Button style={{ margin: "10px", backgroundColor: "lightBlue", borderRadius: "1em", width: "70px" }}>view</Button></Link>
        </div>
        <div className={styles.div2} style={{}}>
          <div style={{ margin: "10px", border: "none", width: "40%" }}>
            {data && <img src={img} />}
          </div>
          <div style={{ margin: "10px" }}>
            <SimpleImageSlider
              margin={10}
              width={250}
              height={155}
              images={images}
              showBullets={true}
              showNavs={true}
            /></div>
        </div>

      </div>

      <div style={{ width: "80%", backgroundColor: "white", height: "550px", margin: "auto", marginTop: "20px" }}>
        
        <div style={{ width: "100%", border: " ", height: "10px", padding: "30px 10px", color: "gray", textAlign: "start" }}>{data.merchantLocation}</div>
        <div style={{ display: "flex", border: "" ,marginLeft :"20px"}}>
          <div style={{width:"70%"}}>
            <div style={{ padding:'10px', width: "100%", backgroundColor: "#ffddee" ,borderRadius:"2em",marginBottom:"20px"}}>
              {/* <p style={{ margin: "1px", color: "gray", }}> {data.Category}</p> */}
              <h3 >{data.merchantName}</h3>
              <h5 style={{ margin: "1px", color: "gray", }}>{data.merchantLocation}</h5>
              <h3>{data.distanceFromUser} <span><a>Get Directions</a></span> </h3>
              <Link className='Link'><button style={{ margin: "10px", backgroundColor: "pink", borderRadius: "1em", width: "150px",border:"1px solid red" }}>view</button></Link>
            </div>
            <div style={{ padding:'10px', width: "100%", backgroundColor: "lightblue" ,borderRadius:"2em",marginBottom:"20px"}}>
              {/* <p style={{ margin: "1px", color: "gray", }}> {data.Category}</p> */}
              <h3 >{data.merchantName}</h3>
              <h5 style={{ margin: "1px", color: "gray", }}>{data.merchantLocation}</h5>
              <h3>{data.distanceFromUser} <span><a>Get Directions</a></span> </h3>
              <Link className='Link' to={`/checkout/${params.id}`} ><button   style={{ margin: "10px", backgroundColor: "lightBlue", borderRadius: "1em", width: "150px",border:"1px solid blue" }}>Buy</button></Link></div>
          </div>
          <div style={{width:"20%" , borderRadius:'10px', backgroundColor:'#ffddee', marginLeft:"30px",height:"250px",padding:"10px", boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}}>
            <h2>Win Rs 500 instant off code</h2>
            <p>Valid on all prepaid deals | No minimum purchase</p>
            <div style={{border:"1px solid gray",paddingRight:"0px",marginBottom:"90px"}}>NBLUCKY<button>Copy</button></div>
            <p>Valid till 03 Mar 2023</p>
          </div>
        </div>
      </div>

    </div>)
}
export default SingleProduct