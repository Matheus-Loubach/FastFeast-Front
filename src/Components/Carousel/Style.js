import styled from "styled-components";
import { Swiper } from "swiper/react";


export const StyledSlide = styled(Swiper)`


padding-top: 50px;


.swiper-button-next {
    top: -220px;
    margin: 0 0 10px 0;
    left: 98%;
    position: relative;
    padding-bottom: 10px;
    --swiper-theme-color: #505050;
    --swiper-navigation-size: 20px;
}

.swiper-button-prev {
    top: -190px;
    left: 88%;
    margin: 0 0 10px 100px;
    position: relative;
    padding-bottom: 10px;
    --swiper-theme-color: #505050;
    --swiper-navigation-size: 20px;

}
`;

export const Link = styled.a`
    font-family: 'Nunito';
    font-weight: 800;
    color: #FF0000;
    font-size: 12px;
    z-index: 2;
    position: absolute;
    left: 87%;
`;