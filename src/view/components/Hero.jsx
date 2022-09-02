import React from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player';

import { } from "../../assets/bg.jpg"

const Hero = ({ heroUrl }) => {

    return (
        <Box id="hero">
            <ReactPlayer
                url={heroUrl}
                playing
                loop
                controls
                // muted
                // light="https://v5.airtableusercontent.com/v1/7/7/1661990400000/ZjD3yIonL1aaU3lrmLRNzg/1vSw2xzfS2O7Z2hsq4JkH7TzTpro4InYBz23ByO2BTjOw5ryyUAHKcK4zhmqKFT8e-7XnNX32IBLZZVIqc_HlQ/vfOfxruNUG8mG3x-eXP6aUzoNpUqDDrpZRyOEncusqM"
                volume={0.5}
                width="100%"
                height="100%"
            />
        </Box>

    );
};
export default Hero;


const Box = styled.div`
  /* max-height: 90rem; */
`;
