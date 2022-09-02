import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../styles/colors";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const TopBar = () => {
  return (
    <Header>
      <SLink to="/">
        <Logo src="logo.jpeg" alt="logo" />
      </SLink>
      <SLink offset="100px" href="#hero">ראשי</SLink>
      <SLink offset="100px" href="#about">חבילה</SLink>
      <SLink offset="100px" href="#contact">צור קשר</SLink>
    </Header>
  );
};
export default TopBar;

const Header = styled.header`
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  background: ${COLORS.main};
  position: fixed;
  left: 0;
  right: 0;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  height: 7rem;
  z-index: 9999;
  direction: rtl;
`;
const SLink = styled(AnchorLink)`
  color: ${COLORS.text};
  text-decoration: none;
  font-weight: 700;
  margin-right: 2rem;
  :hover {
    text-decoration: underline;
  }
`;
const Logo = styled.img`
  width: 7rem;
  cursor: pointer;
  border-radius: 10px;
`;
