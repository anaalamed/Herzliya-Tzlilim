import React from "react";
import styled from "styled-components";
import { COLORS } from "../../styles/colors";

const Footer = () => {
  return (
    <Box>
      <Row>  יאכטה בהרצליה - צלילים מרפאים </Row>
      <Row>2022</Row>
    </Box>
  );
};
export default Footer;

const Box = styled.footer`
  width: 100%;
  height: 100px;
  /* border-top: 1px solid #dddd; */
  background: ${COLORS.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: inherit;
  text-decoration: none;
`;

const Row = styled.div`
  padding: 10px 0;
`;

