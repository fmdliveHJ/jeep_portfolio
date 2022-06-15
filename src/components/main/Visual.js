import Anime from '../../asset/anim.js';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Visual() {
	return (
		<figure id='visual' className='myScroll'>
			<Swiper
				navigation={true}
				pagination={{ clickable: true }}
				modules={[Navigation, Pagination]}
				centeredSlides={true}
				slidesPerView={1.7}
				loop={true}
				className='mySwiper'>
				<SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				<SwiperSlide>Slide 5</SwiperSlide>
				<SwiperSlide>Slide 6</SwiperSlide>
				<SwiperSlide>Slide 7</SwiperSlide>
				<SwiperSlide>Slide 8</SwiperSlide>
			</Swiper>
		</figure>
	);
}

export default Visual;
