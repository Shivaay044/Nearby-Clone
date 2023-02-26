import React,{useState,useEffect} from "react"
import axios from "axios"
import { Link } from 'react-router-dom'
import SimpleImageSlider from "react-simple-image-slider";

// import  Navbar  from "./Navbar"
import { useParams } from "react-router-dom";

const SingleProduct =()=>{
    const params = useParams();
    console.log("uu",params)
    
    const [data, setData] = useState({});
    //  console.log(id)
    const getProduct= (dispatch) => {
      console.log("ac",`http://localhost:8080/data/${params.id}`)
      return axios
        .get(`http://localhost:8080/data/${params.id}`)
        .then((r) => setData(r.data))

        .catch((e) => console.log(e));
    };
      useEffect(() => {
        getProduct();
      },[]);
      // console.log (data.images)
      // const [e,r,t]=[...data.images]
     console.log(data)
     const img=data && data.images && data.images.length>0 ?data.images[0] :""
     const img1=data && data.images && data.images.length>0 ?data.images[1] :""
     const img2=data && data.images && data.images.length>0 ?data.images[2] :""
     const img3=data && data.images && data.images.length>0 ?data.images[3] :""
     const img4=data && data.images && data.images.length>0 ?data.images[4] :""
    
     const images = [
      { url: img1 },
      { url: img2 },
      { url: img3},
      { url: img4 },
     
      
    ];


if(!data&& !data.images){
  return;
}
return (
<div>
        <div>
            {/* <Navbar/> */}
        </div>
        <div style={{display:"flex" ,margin :"100px",border:"solid blue"}}>
            <div style={{margin :"30px",border:"none"}}>
            <h1></h1>
                <p style={{margin :"1px",color:"gray",}}> {data.Category}</p>
                <h1>{data.merchantName}</h1>
                <h3 style={{margin :"1px",color:"gray",}}>{data.merchantLocation}</h3>
                <h3>{data.distanceFromUser} <span><a>Get Directions</a></span> </h3>
                <Link className='Link' to={`/cart`} ><button style={{margin :"10px",backgroundColor:"lightBlue", borderRadius:"1em",width :"50px"}}>view</button></Link>
            </div>
            <div style={{margin :"10px",border:"none"}}>
               {data && <img src={img}/>}
            </div>
            {/* <div style={{margin :"10px",border:"none"}}>
               {data && <img src={img}/>}
            </div> */}
            <div style={{margin:"10px"}}>
            <SimpleImageSlider 
            margin={10 }
        width={350}
        height={210}
        images={images}
        showBullets={true}
        showNavs={true}
      /></div>
        </div>

</div>)
}
export default SingleProduct