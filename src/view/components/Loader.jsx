import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { Rings } from 'react-loader-spinner';


const Loader = ({ showLoader }) => {
    return (
        <Rings
            height="100"
            width="100"
            color={COLORS.main}
            radius="10"
            wrapperStyle={{ "justify-content": "center", "align-items": "center", "position": "fixed", "top": "0", "bottom": "0", "left": "0", "right": "0" }}
            wrapperClass=""
            visible={showLoader}
            ariaLabel="rings-loading"
        />
    );
};
export default Loader;

const Box = styled.div`
 
`;

