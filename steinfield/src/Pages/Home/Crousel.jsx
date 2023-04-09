import { Box, Image, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Slider from 'react-slick';

// slider by "REACT-SLICK"
export const Slide = ({ title }) => {

  return (
    <Image
      w="60%"
      h="2%"
      border="cyan.300"
      mx="4"
      src={title}
    >
     </Image>
  );
};

export default function SliderCrousel(prop) {
  const {categoryName,img_responsivesrc1,img_responsivesrc2,img_responsivesrc3,img_responsivesrc4,img_responsivesrc5,img_responsivesrc6} = prop;
  const [data,setData] = useState(5);
  
  // dimensions for making page responsive
  const updateDimensions = () => {
    const width = window.innerWidth;
     
     if(width<=768 && width>=500){
        setData(3);
      }else if(500>=width && width>=320){
        setData(2);
      }else{
        setData(5);
      }
  };
  window.addEventListener("resize", updateDimensions);

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: false,
    slidesToShow: data
  };
  return (
    <div style={{borderTop:"1px solid grey"}}>
      <Box style={{textAlign:"left"}} m="20">
        <Heading m="4" size={"lg"}>{categoryName}</Heading>
        <Box
          sx={{
            ".slick-dots": {
              transform: "translateY(1em)"
            },
            ".slick-dots li button": {
              _before: {
                h:"50%",
                w:"50%",
                transition: "0.2s",
                content: "''",
                borderRadius: "100%",
                background: "red"
              }
            },
            ".slick-arrow": {
              backgroundColor: "red",
              color: "black",
              w: "3%",
              h: "50%",
              transition: "0.2s",
              _hover: {
                backgroundColor: "black",
                color: "black"
              },
              _focus: {
                backgroundColor: "black",
                color: "black"
              },
              _before: {
                transition: "0.2s"
              }
            },
            ".slick-prev": {
              left: "-40px",
              _before: {
                content: '"◀"'
              }
            },
            ".slick-next": {
              right: "-40px",
              _before: {
                content: '"▶"'
              }
            }
          }}
        >
          <Slider {...slickSettings}>
            <Slide title={img_responsivesrc1} />
            <Slide title={img_responsivesrc2} />
            <Slide title={img_responsivesrc3} />
            <Slide title={img_responsivesrc4} />
            <Slide title={img_responsivesrc5} />
            <Slide title={img_responsivesrc6} />
          </Slider>
        </Box>  
      </Box>
    </div>
  );
}
