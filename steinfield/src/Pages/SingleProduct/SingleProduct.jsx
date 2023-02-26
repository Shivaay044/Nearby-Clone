import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'
import SimpleImageSlider from "react-simple-image-slider";
import styles from './SingleProduct.module.css'

// import  Navbar  from "../Components/Navbar"
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const params = useParams();
  console.log("uu", params)

  const [data, setData] = useState({});
  //  console.log(id)
  const getProduct = (dispatch) => {
    console.log("ac", `http://localhost:8080/data/${params.id}`)
    return axios
      .get(`http://localhost:8080/data/${params.id}`)
      .then((r) => setData(r.data))

      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getProduct();
  }, []);
  // console.log (data.images)
  // const [e,r,t]=[...data.images]
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
        {/* <Navbar/> */}
      </div>
      <div className={styles.outer} >
        <div className={styles.div1} style={{}}>
          <h1></h1>
          <p style={{ margin: "1px", color: "gray", }}> {data.Category}</p>
          <h3 >{data.merchantName}</h3>
          <h5 style={{ margin: "1px", color: "gray", }}>{data.merchantLocation}</h5>
          <h3>{data.distanceFromUser} <span><a>Get Directions</a></span> </h3>
          <Link className='Link' to={`/cart`} ><button style={{ margin: "10px", backgroundColor: "lightBlue", borderRadius: "1em", width: "70px" }}>view</button></Link>
        </div>
        <div className={styles.div2} style={{}}>
          <div style={{ margin: "10px", border: "none", width: "40%" }}>
            {data && <img src={img} />}
          </div>
          {/* <div style={{margin :"10px",border:"none"}}>
               {data && <img src={img}/>}
            </div> */}
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
        <div style={{ width: "100%", border: " 1px solid gray", height: "70px", display: "flex", gap: "5px" }}>
          <div style={{ border: "1px solid gray", width: "70px", height: "10px", padding: "30px 0", color: "black", backgroundColor: "lightgray" }}>DEALS</div>
          <div style={{ border: "1px solid gray", width: "70px", height: "10px", padding: "30px 0", backgroundColor: "lightgray" }}>VIEW</div>
          <div style={{ border: "1px solid gray", width: "70px", height: "10px", padding: "30px 0", backgroundColor: "lightgray" }}>About</div>
          <div style={{ border: "1px solid gray", width: "70px", height: "10px", padding: "30px 0", backgroundColor: "lightgray" }}>photos</div>
        </div>
        <div style={{ width: "100%", border: " ", height: "10px", padding: "30px 10px", color: "gray", textAlign: "start" }}>{data.merchantLocation}</div>
        <div style={{ display: "flex", border: "" ,marginLeft :"20px"}}>
          <div style={{width:"70%"}}>
            <div style={{ border: "1px solid red", width: "100%", backgroundColor: "#ffddee" ,borderRadius:"2em",marginBottom:"20px"}}>
              {/* <p style={{ margin: "1px", color: "gray", }}> {data.Category}</p> */}
              <h3 >{data.merchantName}</h3>
              <h5 style={{ margin: "1px", color: "gray", }}>{data.merchantLocation}</h5>
              <h3>{data.distanceFromUser} <span><a>Get Directions</a></span> </h3>
              <Link className='Link' to={`/cart`} ><button style={{ margin: "10px", backgroundColor: "pink", borderRadius: "1em", width: "150px",border:"1px solid red" }}>view</button></Link>
            </div>
            <div style={{ border: " 1px solid blue", width: "100%", backgroundColor: "lightblue" ,borderRadius:"2em",marginBottom:"20px"}}>
              {/* <p style={{ margin: "1px", color: "gray", }}> {data.Category}</p> */}
              <h3 >{data.merchantName}</h3>
              <h5 style={{ margin: "1px", color: "gray", }}>{data.merchantLocation}</h5>
              <h3>{data.distanceFromUser} <span><a>Get Directions</a></span> </h3>
              <Link className='Link' to={`/checkout`} ><button  style={{ margin: "10px", backgroundColor: "lightBlue", borderRadius: "1em", width: "150px",border:"1px solid blue" }}>Buy</button></Link></div>
          </div>
          <div style={{width:"20%",border:"1px solid gray" ,marginLeft:"30px",height:"300px",padding:"10px"}}>
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