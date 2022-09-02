import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { COLORS } from "./colors";
import styled from "styled-components";
import { devices } from "./responsive";



export const GlobalStyles = createGlobalStyle`
  ${reset}
  html,body,#root{min-height:100%}
  html{font-size:10px;}
  body{
    /* border:deeppink 1px solid; */
    font-size:1.6rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; */
    background: ${COLORS.secondary};
  }

  * {
    color: ${COLORS.text};
  }


  .player-wrapper {
  position: relative;
  padding-top: 56.25%;  
  //Player ratio: 100 / (1280 / 720)
}

.react-player {
  position: absolute;
  top: 0;
  left: 0;
}

@media screen and (min-width: 1024px) {
    div#hero video {
        max-height: 90vh !important;
    }
}


li.alice-carousel__stage-item img {
    margin: auto;
    display: block;
}



/* homepage slider  */
.alice-carousel__stage-item img {
    width: 100%;
    max-height: 90vh;
}

 /* @media screen and (min-width: 1024px) {
    .alice-carousel__stage-item img {
        max-height: 375px;
        height: 375px;
    }
 }

 @media screen and (min-width: 768px) and (max-width: 1024px) {
    .alice-carousel__stage-item img {
        max-height: 530px;
        height: 530px;
    }
 }

 @media screen and (max-width: 768px) {
    .alice-carousel__stage-item img {
        max-height: 300px;
        height: 300px;
    }
 } */


/* .alice-carousel__prev-btn {
    position: absolute; 
    bottom: 0;
    top: 80vh; 
    right: 50px; 
    width: auto;
}

.alice-carousel__next-btn {
    position: absolute; 
    bottom: 0;
    top: 80vh; 
    right: 15px; 
    width: auto;
} */

.alice-carousel__prev-btn  span,
.alice-carousel__next-btn  span {
    /* font-size: 40px; */
    display: none;
}

/* .alice-carousel__dots .alice-carousel__dots-item {
    display: none;
} */
`;

export const Title = styled.h1`
  margin: 3rem 1rem 4rem;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  padding: 2.2rem 4.4rem;
  border-radius: 0.4rem;
  position: relative;

  :after {
      content: "";
      display: block;
      background: url("./anchor.svg") no-repeat;
      height: 80px;
      width: 50px;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
  }
  
  @media ${devices.mobile} {
    font-size: 3rem;
    margin: 3rem 1rem 1rem;
    padding: 1.1rem 2.2rem;

    :after {
      height: 40px;
      width: 30px;
  }
  
  }
`;


