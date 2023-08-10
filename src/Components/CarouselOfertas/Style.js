import styled from "styled-components";
import { Swiper } from 'swiper/react';

export const SwiperStyled = styled(Swiper)`
    /* max-width: 1358px; */
    /* height: fit-content; */
    /* margin-top: 200px; */
    /* background: red; */

    div.swiper-button-prev,
    div.swiper-button-next {
        --swiper-navigation-size: 18px;
        color: #6A696E;
        /* background-color: #6A696E; */
        /* padding: 35px; */
        /* border-radius: 100%; */
        /* transform: scale(.3); */
        position: absolute;
        top: 54px;
    }

    div.swiper-button-prev {
        left: 1263px;
    }
    div.swiper-button-next {
        right: 52px;
    }


    .content {
        background-color: #d6d6d6;
        max-width: 351px;
        height: 194px;
        margin: 0 auto;
        margin-top: 110px;
        border-radius: 16px;
        box-shadow: 0px 4px 10px rgba(33, 34, 36, 0.1);
    }
  


`;

export const Title = styled.h1`
    font-family: 'Nunito';
    font-weight: 800;
    color: #353535;
    font-size: 33px;
    margin-left: 55px;
    z-index: 2;
    position: absolute;
    margin-top: 25px;
`;

export const Link = styled.a`
    font-family: 'Nunito';
    font-weight: 800;
    color: #FF0000;
    font-size: 12px;
    z-index: 2;
    position: absolute;
    margin-top: 45px;
    left: 1290px;
    /* top: 0px; */
`;