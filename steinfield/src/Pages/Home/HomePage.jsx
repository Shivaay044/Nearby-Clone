import { Link } from "react-router-dom";
import { BuffetData, BuffetData2, crousel1, crousel2, linkImages, Mind, Popular, Quick, Quick2, TopBrands } from "./data";
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css";
import SliderCrousel from "./Crousel";
import { Heading } from "@chakra-ui/react";
import PopularCard from "./PopularCard";
import MindCard from "./MindCard";

function HomePage(){
    const data1 = TopBrands;
    
    return(
        <div id="home">
            <div id="linkImage">
                {
                    linkImages.length>0 && linkImages.map((ele,index)=>{
                        return (
                        <Link to='/product' key={index}>
                         <div key={index} className="top">
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
            <div id="slider">
                {
                     data1.map((ele,index)=>{
                        return(
                            <SliderCrousel key={index} {...ele} />
                        )
                    })
                }
            </div>
            <div id="buffet">
                <Heading style={{textAlign:"left"}} size="lg">Everything Buffet! 🍱 🍲</Heading>
                <div>   
                {
                    BuffetData.length>0 && BuffetData.map((ele,index)=>{
                        return(
                            <div key={index}>
                                <img className="buff" src={ele.img_responsivesrc} alt="image" />
                            </div>
                            )
                    })
                    }
                </div>
            </div>
            <div className="crousel">
                <Carousel>
                    {
                        BuffetData2.length>0 && BuffetData2.map((ele,index)=>{
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
            <div className="popular">
                    {
                        Popular.length>0 && Popular.map((ele,index)=>{
                            return(
                                <PopularCard key={index} {...ele} />
                            )
                        })
                    }
            </div>
            <div className="popular">
                    {
                        Quick.length>0 && Quick.map((ele,index)=>{
                            console.log(ele);
                            return(
                                <PopularCard key={index} {...ele} />
                            )
                        })
                    }
            </div>
            <div className="crousel">
                <Carousel>
                    {
                        Quick2.length>0 && Quick2.map((ele,index)=>{
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
            <div style={{marginBottom:"7%"}}>
                <Heading style={{textAlign:"left"}} m="5" size={"lg"}>Next Thing On Your Mind</Heading>
                <div id="mind">
                {
                    Mind.length>0 && Mind.map((ele,index)=>{
                        return(
                            <MindCard key={index} {...ele} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default HomePage;