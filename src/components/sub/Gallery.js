import Layout from '../common/Layout';
import Popup from '../common/Popup';
import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Masonry from 'react-masonry-component';
import * as types from '../../redux/actionType';

function Gallery() {
	const path = process.env.PUBLIC_URL;
	const { gallery } = useSelector((store) => store.galleryReducer);
	const dispatch = useDispatch();
	const frame = useRef(null);
	const input = useRef(null);
	const pop = useRef(null);
	const [Index, setIndex] = useState(0);
	const [Loading, setLoading] = useState(true);
	const [EnableClick, setEnableClick] = useState(true);
	//Opt값에 처음 api인수로 전달될 값으로 초기화
	const [Opt, setOpt] = useState(null);
	const masonryOptions = { transitionDuration: '0.5s' };

	const endLoading = () => {
		setTimeout(() => {
			if (!frame.current) return;
			frame.current.classList.add('on');
			setLoading(false);
			setTimeout(() => setEnableClick(true), 1000);
		}, 1000);
	};

	const showInterest = () => {
		if (!EnableClick) return;
		setLoading(true);
		frame.current.classList.remove('on');
		setOpt({ type: 'interest', count: 50 });
	};

	const showSearch = () => {
		if (!EnableClick) return;
		const tag = input.current.value.trim();
		input.current.value = '';
		if (!tag) return alert('검색어를 입력하세요');

		setLoading(true);
		frame.current.classList.remove('on');
		setOpt({ type: 'search', count: 50, tags: tag });
	};

	const showUser = (e) => {
		if (!EnableClick) return;
		const user = e.target.innerText;

		setLoading(true);
		frame.current.classList.remove('on');
		setOpt({ type: 'user', count: 50, user: user });
	};

	//Opt값이 변경될때마다 해당 값을 FLICKR_START타입의 액션객체에 담아서 saga.js로 전달
	useEffect(() => {
		dispatch({ type: types.GALLERY.start, Opt });
	}, [Opt]);

	//flickr데이터가 변경되면 endLoading을 호출해
	//로딩바 제거하고 컴포넌트 frame출력
	useEffect(() => {
		endLoading();
	}, [gallery]);

	return (
		<>
			<Layout name={'Flickr'}>
				{Loading && (
					<div className='loading'>
						<div className='cloud'>
							<p>Loading...</p>
							<div className='rain'></div>
						</div>
					</div>
				)}
				<div className='inner'>
					<h2>Gallery</h2>
					<div className='gallery_box'>
						<div className='top_box'>
							<div>
								<div className='text_box'>
									<h2>Gallery</h2>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Cum voluptate labore ratione nobis hic error aut atque
										voluptatum, reiciendis nostrum!
									</p>
								</div>
								<div className='pic'>
									<img src={`${path}/img/gallery/gallery01.jpg`}></img>
								</div>
							</div>
							<div>
								<div className='pic con1'>
									<img src={`${path}/img/gallery/gallery02.jpg`}></img>
								</div>
								<div className='pic con2'>
									<img src={`${path}/img/gallery/gallery03.jpg`}></img>
								</div>
								<div className='pic con3'>
									<img src={`${path}/img/gallery/gallery04.jpg`}></img>
								</div>
							</div>
						</div>
					</div>

					<div className='searchBox'>
						<input
							type='text'
							ref={input}
							placeholder='검색어를 입력하세요'
							onKeyUp={(e) => {
								if (e.key === 'Enter') showSearch();
							}}
						/>
						<button onClick={showSearch}>SEARCH</button>
					</div>

					<div className='frame' ref={frame}>
						<Masonry elementType={'div'} options={masonryOptions}>
							{gallery.map((item, idx) => {
								return (
									<article key={idx}>
										<div className='inner'>
											<h2>{item.title}</h2>
											<div
												className='pic'
												onClick={() => {
													setIndex(idx);
													pop.current.open();
												}}>
												<img
													src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
													alt={item.title}
												/>
											</div>
										</div>
									</article>
								);
							})}
						</Masonry>
					</div>
				</div>
			</Layout>

			<Popup ref={pop}>
				{gallery.length !== 0 && (
					<img
						src={`https://live.staticflickr.com/${gallery[Index].server}/${gallery[Index].id}_${gallery[Index].secret}_b.jpg`}
						alt={gallery[Index].title}
					/>
				)}
			</Popup>
		</>
	);
}

export default Gallery;