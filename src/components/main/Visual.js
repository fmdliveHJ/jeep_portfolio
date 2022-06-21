import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Visual() {
	const cursor = useRef(null);
	const frame = useRef(null);
	const path = process.env.PUBLIC_URL;
	let isCursor = false;
	const mouseMove = (e) => {
		if (!isCursor) return;
		cursor.current.style.left = e.clientX + 'px';
		cursor.current.style.top = e.clientY + 'px';
	};

	const onMouseEnter = (e) => {
		cursor.current.style = ` transform: translate(-50%, -50%)  scale(4) `;
	};
	const onMouseLeave = (e) => {
		cursor.current.style = ` transform: translate(-50%, -50%)  scale(1) `;
	};

	useEffect(() => {
		window.addEventListener('mousemove', mouseMove);
		frame.current.addEventListener('mouseenter', () => {
			isCursor = true;
			cursor.current.style.display = 'block';
		});
		frame.current.addEventListener('mouseleave', () => {
			isCursor = false;
			cursor.current.style.display = 'none';
		});

		return () => window.removeEventListener('mousemove', mouseMove);
	}, []);
	return (
		<figure id='visual' className='myScroll' ref={frame}>
			<Swiper
				navigation={true}
				modules={[Navigation, Pagination]}
				loop={true}
				centeredSlides={true}
				breakpoints={{
					// when window width is >= 320px
					1180: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					1400: {
						slidesPerView: 1.4,
						spaceBetween: 0,
					},
					1920: {
						slidesPerView: 1.7,
						spaceBetween: 0,
					},
				}}>
				<SwiperSlide>
					<div
						className='con'
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}>
						<svg>
							<text>COMPASS</text>
						</svg>
						<div className='pic'>
							<img src={`${path}/img/main/visual01.png`}></img>
						</div>
						<div className='text_box'>
							<p>
								LET THE REDESIGNED <br /> NEW COMPASS LEAD THE WAY
							</p>
							<span>
								브랜드 디자이너들이 COMPASS를 완전히 새롭게 디자인하여
								드라이브의 모든 요소를 향상시켰습니다. <br /> 이제, 모던 SUV의
								정석을 보여주는 새로운 외관과 감각, 성능을 경험해 보세요.
							</span>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className='con'
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}>
						<svg>
							<text>RENEGADE</text>
						</svg>
						<div className='pic'>
							<img src={`${path}/img/main/visual02.png`}></img>
						</div>
						<div className='text_box'>
							<p>WHAT’S NEW?</p>
							<span>
								Jeep는 차량의 디자인과 기능의 모든 면에서 더 나은 운전 경험을
								선사하기 위해 언제나 최선을 다하고 있습니다. <br />
								2022 Jeep® Renegade에서 선보이는 새로운 기능들은 다음과
								같습니다.
							</span>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className='con'
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}>
						<svg>
						<text className='s_text'>NEW GRAND</text>
							<text>
								CHEROKEE
							</text>
						</svg>
						<div className='pic'>
							<img src={`${path}/img/main/visual03.png`}></img>
						</div>
						<div className='text_box'>
							<p>GREATNESS REDESIGNED</p>
							<span>
								ALL-NEW GRAND CHEROKEE L은 쿼드라-트랙 II (Quadra-Trac® II) 4WD
								시스템으로 오프로드에서 시내 주행까지 모든 도로에서의 주행이
								가능합니다.{' '}
							</span>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className='con'
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}>
						<svg>
						<text className='s_text'>4XE</text>
							<text>WRANGLER  </text>
						</svg>
						<div className='pic'>
							<img src={`${path}/img/main/visual04.png`}></img>
						</div>
						<div className='text_box'>
							<p>THE FUTURE IS NOW</p>
							<span>
							Wrangler 4xe 는 지금까지 경험하지 못한 강력한 오프로드 주행성능과 시내에서 효율적인 전기 주행이 가능합니다. <br /> 
							E-Select 주행 모드는 Power Routing 기술을 통해 최적화된 성능과 넓은 주행거리를 보장합니다. 
							</span>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className='con'
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}>
						<svg>
							<text>GLADIATOR</text>
						</svg>
						<div className='pic'>
							<img src={`${path}/img/main/visual05.png`}></img>
						</div>
						<div className='text_box'>
							<p>TAKE IT ALL WITH YOU</p>
							<span>
								뛰어난 견인능력으로 모험에 필요한 모든 것을 가져갈 수 있습니다. <br />
								전후방 Tru-Lok® 차동기어 잠금장치와 FOX 쇼크가 장착된 ALL-NEW Gladiator Rubicon은 강력한 성능을 자랑하는 트럭입니다.
							</span>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className='con'
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}>
						<svg>
							<text>WRANGLER</text>
						</svg>
						<div className='pic'>
							<img src={`${path}/img/main/visual06.png`}></img>
						</div>
						<div className='text_box'>
							<p>THE ICON LIVES ON</p>
							<span>
								Jeep® Wrangler는 운전의 재미와 자유를 동시에 선사합니다. <br />{' '}
								클래식 지프 특유의 디자인과 엔지니어링을 유지한 최고의 전천후
								오프로드 주행 성능은 물론, 여기에 더해진 탈착형 탑과 도어는
								진정한 자유까지 경험하게 해줍니다.
							</span>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className='con'
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}>
						<svg>
							<text className='s_text'>GRAND</text>
							<text>CHEROKEE</text>
						</svg>
						<div className='pic'>
							<img src={`${path}/img/main/visual07.png`}></img>
						</div>
						<div className='text_box'>
							<p>BEYOND YOUR EXPECTATIONS</p>
							<span>
								프리미엄의 세련됨과 탁월한 성능이 만난 Summit은 동급에서 가장
								럭셔리한 SUV입니다. 부드럽고 탄력있는 고급 가죽트림은 새로운
								차원의 편안함으로 차량 내부를 장식합니다
							</span>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className='con'
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}>
						<svg>
							<text>CHEROKEE</text>
						</svg>
						<div className='pic'>
							<img src={`${path}/img/main/visual08.png`}></img>
						</div>
						<div className='text_box'>
							<p>THE WORLD COMES CLOSER</p>
							<span>
								Jeep<sub>®</sub>&nbsp;Cherokee 라면 모든 기회가 탐험의 순간이
								됩니다. 새로운 외관 디자인이 강렬하게 시선을 사로잡으며,
								가죽트림 및 열선내장 시트로 편안함을 갖춘 앞좌석, 8.4인치
								터치스크린과 Apple CarPlay<sup>®</sup>,&nbsp;Android Auto™ 지원
								그리고 프리미엄 편의기능을 갖춘 Uconnect<sup>®</sup> 등의
								하이테크 설비가 어우러져 내부 인테리어의 격조 또한 한층
								높아졌습니다.&nbsp;
							</span>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
			<div className='cursor' ref={cursor}></div>
		</figure>
	);
}

export default Visual;
