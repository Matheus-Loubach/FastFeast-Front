import { SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import * as S from './Style';

function CarouselBanner() {
    return (
        <div className='mt-[10px] max-w-[1358px] h-[385px] m-auto'>
            <S.Title>Ofertas Imperdíveis</S.Title> 
            <S.Link href=''>Ver todos</S.Link>           
            <S.SwiperStyled
            breakpoints={{
                //if width > ?
                200: {
                    slidesPerView: 1,
                },
                500: {
                    slidesPerView: 2,
                },
                640: {
                    slidesPerView: 2,
                },
                900: {
                    slidesPerView: 2,
                },
                1020: {
                    slidesPerView: 3,
                },
                1280: {
                    slidesPerView: 3,
                },
            }} 
            spaceBetween={0}
            slidesPerView={3}
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
                <SwiperSlide><div className="content"></div></SwiperSlide>
                <SwiperSlide><div className="content"></div></SwiperSlide>
                <SwiperSlide><div className="content"></div></SwiperSlide>
                <SwiperSlide><div className="content"></div></SwiperSlide>
                <SwiperSlide><div className="content"></div></SwiperSlide>
            </S.SwiperStyled>
        </div>
    );
}

export default CarouselBanner