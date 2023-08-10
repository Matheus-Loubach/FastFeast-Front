import styled from "styled-components";
import { Swiper } from 'swiper/react';

export const SwiperStyled = styled(Swiper)`
    max-width: 1158px;
    height: 385px;

    div.swiper-button-prev,
    div.swiper-button-next {
        --swiper-navigation-size: 40px;
        color: white;
        background-color: #6A696E;
        padding: 35px;
        border-radius: 100%;
        transform: scale(.3);
    }

    div.swiper-button-prev {
        left: -11px;
    }
    div.swiper-button-next {
        right: -11px;
    }


    .content {
        background-color: #d6d6d6;
        max-width: 1158px;
        height: 385px;
    }
  

`;