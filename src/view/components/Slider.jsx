import React from "react";
import styled from "styled-components";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Slider = ({ sliderPhotos }) => {
    console.log(sliderPhotos);
    let items = [];
    sliderPhotos?.map(photo => {
        items.push(<img src={photo.url} />)
    })

    const responsive = {
        0: {
            items: 1,
        },
        1024: {
            items: 2
        }
    }

    const stagePadding = {
        paddingLeft: 50,
        paddingRight: 100
    };

    return (
        <Box>
            <AliceCarousel
                autoPlay={true}
                autoPlayInterval={2000}
                infinite={true}
                // autoHeight={true}
                // autoWidth={true}
                // paddingLeft={100}
                stagePadding={stagePadding}
                autoPlayStrategy="action"
                items={items}
                responsive={responsive}
            // mouseTracking={true}
            />
        </Box >
    );
};
export default Slider;

const Box = styled.div`
padding: 3rem 0;
  /* height: 100vh; */
  /* display: flex; */
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;
`;

