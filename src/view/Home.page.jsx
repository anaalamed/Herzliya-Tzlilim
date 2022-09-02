import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../state/root.reducer";
import { fetchData } from "../state/slices/main.slice";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import ContactMail from "./components/ContactMail";
import About from "./components/About";
import Whatsapp from "./components/Whatsapp.view";
import { COLORS } from "../styles/colors";
import { devices } from "../styles/responsive";
import { Title } from "../styles/reset.css";



// import { } from "../../public/bg.jpg"




const Home = () => {
  const dispatch = useDispatch();
  const { is_loading, data, error_msg } = useSelector((state) => state.data);
  console.log(data);
  // const [heroUrl, setHeroUrl] = useState("");
  // const [sliderPhotos, setsliderPhotos] = useState([]);


  useEffect(() => {
    dispatch(fetchData());
  }, [])

  return (
    <Main>
      {Object.keys(data).length !== 0 ? (
        <>
          <Hero heroUrl={data?.records.find(record => record.fields.name == "video").fields.attachments[0].url} />
          <Title>יאכטה בהרצליה - צלילים מרפאים</Title>
          <Slider sliderPhotos={data?.records.find(record => record.fields.name == "pictures").fields.attachments}></Slider>
          <About text={data?.records.find(record => record.fields.name == "text_about").fields.text}
            price={data?.records.find(record => record.fields.name == "price_about").fields.text}></About>
        </>

      ) : (
          // <img src="../../public/bg.jpg" />
          null
        )}
      <Whatsapp></Whatsapp>
      <ContactMail />
    </Main>
  );
};
export default Home;

const Main = styled.main`
  height: 100%;
  width: 100%;
  margin-top: 7rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${COLORS.secondary};
`;


