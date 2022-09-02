import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Home from "./Home.page";
// import Joker from "./pages/Joker.page";
import Footer from "./components/Footer.view";
import TopBar from "./components/TopBar.view";

const App = () => {
  return (
    <Box>
      <TopBar />
      <Route path="/" exact component={Home} />
      <Footer />
    </Box>
  );
};
export default App;

const Box = styled.div`
  min-height: 100vh;
  width: 100%;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
