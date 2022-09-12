import React from "react";
import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Title } from "../../styles/reset.css";
import { devices } from "../../styles/responsive";



const Popup = ({ display, text, setShowPopup, setMainOpacity }) => {
  console.log(display)

  return (
    <Backdrop display={display} onClick={() => setShowPopup(false)}>

      <Box display={display}>
        <Text>{text}</Text>
        <Button display={display} onClick={() => {
          setShowPopup(false);
          setMainOpacity(false);
        }}>תודה</Button>

      </Box>
    </Backdrop>

  );
};
export default Popup;


const Backdrop = styled.div`
  display: ${props => props.display ? "block" : "none"};
  background: rgba(255,255,255,0.5);
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`


const Box = styled.div`
  display: ${props => props.display ? "block" : "none"};
  background: ${COLORS.main};
  width: 50%;
  height: 150px;
  margin: 0 auto;
  position: relative;
  left: 0;
  right: 0;
  top: 40%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;
  -webkit-box-shadow: 5px 5px 15px 5px #000000; 
  box-shadow: 5px 5px 15px 5px #000000;
  z-index: 9999999;
`;


const Text = styled.h1`
  font-size: 3rem;
  text-align: center;
  padding: 2.2rem 4.4rem;

  @media ${devices.mobile} {
    font-size: 1.6rem;
  }

`;

export const Button = styled.button`
display: block;
  background: ${COLORS.secondary};
  padding: 10px;
  border-radius: 10px;

  margin-top: 10px;
  border: 1px solid ${COLORS.main};
  margin: 10px auto;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  /* border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px; */
  width: 15rem;

  :hover {
      /* background: ${COLORS.main}; */
  }
`;