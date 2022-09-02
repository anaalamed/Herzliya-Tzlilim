import React from "react";
import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Title } from "../../styles/reset.css";
import { devices } from "../../styles/responsive";



const About = ({ text, price }) => {

  return (
    <Box id="about">
      <Title>החבילה שלנו</Title>
      <Text>{text}</Text>
      <Text>{price}</Text>


      {/* <Button><a href="https://wa.me/+972548777172" target="_blank" ><Icon icon={faWhatsapp} />לשליחת</a></Button> */}

    </Box>

  );
};
export default About;


const Box = styled.div`

`;


const Text = styled.h1`
  margin-bottom: 1rem;
  line-height: 1.15;
  font-size: 2rem;
  text-align: center;
  padding: 2.2rem 4.4rem;
  border-radius: 0.4rem;

  @media ${devices.mobile} {
    font-size: 1.6rem;
  }

`;

export const Button = styled.div`
  background: ${COLORS.secondary};
  padding: 15px;
  border-radius: 10px;

  border: 1px solid ${COLORS.main};
  margin: 0 auto;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;
  width: 20rem;
  text-align: center;

  :hover {
        background: ${COLORS.main};

        a {
          color: ${COLORS.text};
        }

        a Icon * {
          color: #fff;

        }
  }

  a {
    text-decoration: none;
    color: green;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 30px;
  margin: 0 10px;
  color: green;

  * {
    color: green;  
  }
`;