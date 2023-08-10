import { SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import * as S from './Style';

function CarouselBanner() {
  return (
    <S.SwiperStyled
      spaceBetween={5}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      navigation={true}
      modules={[Navigation, Pagination]}
      isInfinite={true}
      loop={true}
    >
      <SwiperSlide><div className="content"></div></SwiperSlide>
      <SwiperSlide><div className="content"></div></SwiperSlide>
      <SwiperSlide><div className="content"></div></SwiperSlide>
      <SwiperSlide><div className="content"></div></SwiperSlide>
    </S.SwiperStyled>
  );
}

export default CarouselBanner