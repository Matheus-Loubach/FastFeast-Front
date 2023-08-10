import Starbucks from '../../assets/LogoStarbucks.png'

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";
import { SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import * as S from './Style';

const Carousel = () => {
    const isWideScreen = window.innerWidth > 640;

    return (
        <div className='carousel-container justify-center m-auto tablet:w-11/12 mobile1:w-full'>
            <h1 className="text-base font-bold mt-9 tablet:text-3xl">Peça do conforto da sua casa</h1>
            <S.Link href=''>Ver todos</S.Link>       
            <S.StyledSlide
                breakpoints={{
                    //if width > ?
                    200: {
                        slidesPerView: 4,
                    },
                    640: {
                        slidesPerView: 7,
                    },
                    900: {
                        slidesPerView: 8,
                    },
                    1020: {
                        slidesPerView: 10,
                    },
                    1280: {
                        slidesPerView: 13,
                    },
                }}
                spaceBetween={23}
                pagination={{
                    type: "progressbar",
                }}

                navigation={isWideScreen} // Ativa a navegação somente quando for maior que 640
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className="rounded-full w-full" src={Starbucks} /> <p className="text-center w-auto font-bold bg-gray-50 drop-shadow-md rounded-2xl p-3 mt-2 text-gray-400">Starbucks</p></SwiperSlide>
                <SwiperSlide><img className="rounded-full w-full" src={Starbucks} /> <p className="text-center font-bold bg-gray-50 drop-shadow-md rounded-2xl p-3 mt-2 text-gray-400">Starbucks</p></SwiperSlide>
                <SwiperSlide><img className="rounded-full w-full" src={Starbucks} /> <p className="text-center font-bold bg-gray-50 drop-shadow-md rounded-2xl p-3 mt-2 text-gray-400">Starbucks</p></SwiperSlide>
                <SwiperSlide><img className="rounded-full w-full" src={Starbucks} /> <p className="text-center font-bold bg-gray-50 drop-shadow-md rounded-2xl p-3 mt-2 text-gray-400">Starbucks</p></SwiperSlide>
                <SwiperSlide><img className="rounded-full w-full" src={Starbucks} /> <p className="text-center font-bold bg-gray-50 drop-shadow-md rounded-2xl p-3 mt-2 text-gray-400">Starbucks</p></SwiperSlide>
                <SwiperSlide><img className="rounded-full w-full" src={Starbucks} /> <p className="text-center font-bold bg-gray-50 drop-shadow-md rounded-2xl p-3 mt-2 text-gray-400">Starbucks</p></SwiperSlide>
                <SwiperSlide><img className="rounded-full w-full" src={Starbucks} /> <p className="text-center font-bold bg-gray-50 drop-shadow-md rounded-2xl p-3 mt-2 text-gray-400">Starbucks</p></SwiperSlide>
                <SwiperSlide><img className="rounded-full w-full" src={Starbucks} /> <p className="text-center font-bold bg-gray-50 drop-shadow-md rounded-2xl p-3 mt-2 text-gray-400">Starbucks</p></SwiperSlide>
                <SwiperSlide><img className="rounded-full w-full" src={Starbucks} /> <p className="text-center font-bold bg-gray-50 drop-shadow-md rounded-2xl p-3 mt-2 text-gray-400">Starbucks</p></SwiperSlide>
                <SwiperSlide><img className="rounded-full w-full" src={Starbucks} /> <p className="text-center font-bold bg-gray-50 drop-shadow-md rounded-2xl p-3 mt-2 text-gray-400">Starbucks</p></SwiperSlide>
                <SwiperSlide><img className="rounded-full w-full" src={Starbucks} /> <p className="text-center font-bold bg-gray-50 drop-shadow-md rounded-2xl p-3 mt-2 text-gray-400">Starbucks</p></SwiperSlide>
                <SwiperSlide><img className="rounded-full w-full" src={Starbucks} /> <p className="text-center font-bold bg-gray-50 drop-shadow-md rounded-2xl p-3 mt-2 text-gray-400">Starbucks</p></SwiperSlide>
                <SwiperSlide><img className="rounded-full w-full" src={Starbucks} /> <p className="text-center font-bold bg-gray-50 drop-shadow-md rounded-2xl p-3 mt-2 text-gray-400">Starbucks</p></SwiperSlide>
                <SwiperSlide><img className="rounded-full w-full" src={Starbucks} /> <p className="text-center font-bold bg-gray-50 drop-shadow-md rounded-2xl p-3 mt-2 text-gray-400">Starbucks</p></SwiperSlide>
            </S.StyledSlide>

        </div>
    )
}

export default Carousel