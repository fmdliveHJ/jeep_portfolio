import Layout from '../common/Layout';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import Masonry from 'react-masonry-component';
import Popup from '../common/Popup';

function Gallery() {
	const frame = useRef(null);
	const input = useRef(null);
	const pop = useRef(null);
	const [Items, setItems] = useState([]);
	const [Loading, setLoading] = useState(true);
	const [EnableClick, setEnableClick] = useState(true);
	const [Index, setIndex] = useState(0);
	const masonryOptions = { transitionDuration: '0.5s' };
	const path = process.env.PUBLIC_URL;

	const getFlickr = async (opt) => {
		const key = 'e348bed2bd80ff66c01682c0c396ac50';
		const method_search = 'flickr.photos.search';
		const method_user = 'flickr.people.getPhotos';
		let url = '';

		if (opt.type === 'search') {
			url = `https://www.flickr.com/services/rest/?method=${method_search}&api_key=${key}&per_page=${opt.count}&nojsoncallback=1&format=json&tags=${opt.tags}`;
		}
		if (opt.type === 'user') {
			url = `https://www.flickr.com/services/rest/?method=${method_user}&api_key=${key}&per_page=${opt.count}&nojsoncallback=1&format=json&user_id=${opt.user}`;
		}

		await axios.get(url).then((json) => {
			//만약 검색 결과가 없다면 경고창 띄우고 종료
			console.log(json);
			if (json.data.photos.photo.length === 0)
				return alert('해당검색어의 결과이미지 없습니다.');
			setItems(json.data.photos.photo);
		});

		setTimeout(() => {
			if (!frame.current) return;
			frame.current.classList.add('on');
			setLoading(false);

			setTimeout(() => {
				setEnableClick(true);
			}, 2000); //frame요소의 transition시간까지 지연
		}, 1000); //데이터준비 완료될때까지 지연
	};

	const showSearch = (e) => {
		const result = input.current.value.trim();

		input.current.value = '';
		if (!result) return alert('검색어를 입력하세요');

		if (EnableClick) {
			setEnableClick(false);
			setLoading(true);
			frame.current.classList.remove('on');
			getFlickr({
				type: 'search',
				count: 16,
				tags: result,
			});
		}
	};

	useEffect(() => {
		getFlickr({
			type: 'user',
			count: 16,
			user: '195814985@N05',
		});
	}, []);

	return (
		<>
			<Layout name={'Gallery'}>
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
								if (e.key === 'Enter') showSearch(e);
							}}
						/>
						<button onClick={showSearch}>SEARCH</button>
					</div>
					<div className='frame' ref={frame}>
						<Masonry elementType={'div'} options={masonryOptions}>
							{Items.map((item, idx) => {
								return (
									<article key={idx}>
										<div className='inner'>
											<h2>{item.title}</h2>
											<div
												className='pic'
												onClick={() => {
													pop.current.open();
													setIndex(idx);
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

			{/* 컴포넌트자체를 useRef로 참조 */}
			<Popup ref={pop}>
				{Items.length !== 0 && (
					<img
						src={`https://live.staticflickr.com/${Items[Index].server}/${Items[Index].id}_${Items[Index].secret}_b.jpg`}
						alt={Items[Index].title}
					/>
				)}
			</Popup>
		</>
	);
}

export default Gallery;
