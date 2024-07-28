import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box, Button, Divider, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";



const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const Component = styled(Box)`
    margin-top: 10px;
    background-color: #ffffff;
  `
  const Deal = styled(Box)`
    padding: 15px 20px;
    display: flex;
  `

  const DealText = styled(Typography)`
    font-size: 22px;
    font-weight: 600;
    margin-right: 25px;
    line-height: 32px;
  `

  const ViewAllButton = styled(Button)`
    margin-left: auto;
    background-color: #2874f0;
    border-radius: 2px;
    font-size: 13px;
    font-weight: 600;
  `

  const Image = styled('img')`
  width: auto;
  height: 150px;
  `

  const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
  `

function ProductBar(props){
    return(
      <Component>
      <Deal>
        <DealText>{props.title}</DealText>
        <ViewAllButton variant="contained">View All</ViewAllButton>
      </Deal>
      <Divider />
        <Carousel 
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        centerMode={true}
        dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
        >
        { 
            props.products.map(data => (
                    <>
                    <Link to={`product/${data.id}`} style={{textDecoration: "none"}}>
                    <Box textAlign="center" style={{ padding: '25px 15px' }}>
                    <Image src={data.url} alt="Product" /> 
                    <Text style={{ fontWeight: 600, color: "#212121" }}>{data.title.shortTitle}</Text>
                    <Text style={{ color: "green" }}>{data.discount}</Text>
                    <Text style={{ color: "#212121", opacity: ".6" }}>{data.tagline}</Text>
                    </Box>
                    </Link>
                    </>
                ))
            }
        </Carousel>
      </Component>
    )
}


export default ProductBar;