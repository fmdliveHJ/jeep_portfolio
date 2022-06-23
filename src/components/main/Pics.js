import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import Popup from '../common/Popup';

function Pics({ Scrolled, start, base }) {
	const path = process.env.PUBLIC_URL;
	const { pics } = useSelector((store) => store.picsReducer);
	let position = 0;
	if (start) position = Scrolled - start - base;

	const [Index, setIndex] = useState(0);
	
	const video = useRef(null);

	const onMouseEnter = (e) => {
		console.log(1);
		
	};
	const onMouseLeave = (e) => {
		console.log(2);
	};

	return (
		<>		
		<section id='pic' className='myScroll'>
			<h2>Pics</h2>
			{/* <p style={{ left: 100 + position }}>FLICKR</p>
			<h3 style={{ left: 100 + position / 2 }}>FLICKR</h3> */}
			<div className='box'>
				{pics.map((item, idx) => {
					if (idx < 8) {
						return (
							<div className='pic' key={idx} className='pic'
							onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
						>
									<h3>{item.title}</h3>
									<img src={`${path}/img/${item.pic}`} 
									alt={item.title}/>
									<video muted src={`${path}/img/${item.video}`} className='video' ref={video}></video>
							</div>
						);
					}
				})}
			</div>
		</section>
		</>

	);
}

export default Pics;
