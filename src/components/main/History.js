import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function History() {
	const path = process.env.PUBLIC_URL;
	const Members = useSelector((store) => store.memberReducer.members);
	return (
		<section id='history' className='myScroll'>
			<h2>History</h2>
			<div className='preview_members'>
				<Swiper
					navigation={true}
					modules={[Navigation, Pagination]}
					loop={true}
					centeredSlides={true}>
					{Members.map((member, ide) => {
						return (
							<SwiperSlide key={ide}>
								<div className='box'>
									<div className='pic'>
										<h3>{member.years}</h3>
										<img src={`${path}/img/${member.pic}`} alt={member.years} />
									</div>
									<div className='text_box'>
										<p>
											Lorem, ipsum dolor sit amet consectetur adipisicing elit.
											Est corrupti ipsum mollitia minima quaerat esse dolorem.
											Soluta nemo reprehenderit cum, quo consectetur optio vero
											iure veritatis impedit exercitationem architecto quam.
										</p>
										<p>
											Lorem, ipsum dolor sit amet consectetur adipisicing elit.
											Est corrupti ipsum mollitia minima quaerat esse dolorem.
											Soluta nemo reprehenderit cum, quo consectetur optio vero
											iure veritatis impedit exercitationem architecto quam.
										</p>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
}

export default History;
