import { Link } from "react-router-dom";
import { crousel1, crousel2, linkImages, scrapData } from "./data";
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css";

function HomePage(){
    const data = scrapData[0];
    console.log(data);
    return(
        <div id="home">
            <div id="linkImage">
                {
                    linkImages.length>0 && linkImages.map((ele,index)=>{
                        return (
                        <Link key={index}>
                         <div key={index} id="top">
                            <img id="images" src={ele.img} alt="image" />
                            <p style={{color:"black",fontWeight:"600"}}>{ele.name}</p>
                        </div>
                        </Link>
                    )
                    })
                }
            </div>
            <div className="crousel">
                <Carousel>
                    {
                        crousel1.length>0 && crousel1.map((ele,index)=>{
                            return(
                                <Carousel.Item key={index} interval={1500}>
                                    <img
                                        className="d-block w-100"
                                        src={ele.img}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            </div>

            <div className="crousel">
                <Carousel>
                    {
                        crousel2.length>0 && crousel2.map((ele,index)=>{
                            return(
                                <Carousel.Item key={index} interval={1500}>
                                    <img
                                        className="d-block w-100"
                                        src={ele.img}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            </div>
        </div>
    )
}
export default HomePage;