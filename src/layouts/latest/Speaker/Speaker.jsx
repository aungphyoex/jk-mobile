import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import Card from "../../../components/Card.jsx";

const Speaker = () => {
    return (
        <section className='max-w-screen-xl mx-auto pl-3 px-0 md:px-3 h-auto pb-11'>
            <div className='mb-5 flex justify-between items-center pr-3'>
                <h1 className='text-[20px] md:text-[25px] font-semibold leading-[30px]'>Headphone and Speakers</h1>
                <Link to='#' className='text-sm'>
                    See more
                </Link>
            </div>
            <div>
                <Swiper
                    slidesPerView={'auto'}
                    classsName="swiper-slide-mobile"
                >
                    <SwiperSlide className='swiper-slide-mobile'>
                        <Card/>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-mobile'>
                        <Card/>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-mobile'>
                        <Card/>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-mobile'>
                        <Card/>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-mobile'>
                        <Card/>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-mobile'>
                        <Card/>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-mobile'>
                        <Card/>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-mobile'>
                        <Card/>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-mobile'>
                        <Card/>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-mobile'>
                        <Card/>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-mobile'>
                        <Card/>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-mobile'>
                        <Card/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Speaker;
