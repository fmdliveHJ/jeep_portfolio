import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import Popup from '../common/Popup';

function Pics({ Scrolled, start, base }) {
	const { gallery } = useSelector((store) => store.galleryReducer);
	let position = 0;
	if (start) position = Scrolled - start - base;

	const [Index, setIndex] = useState(0);
	const pop = useRef(null);

	return (
		<>		
		<section id='pic' className='myScroll'>
			<h2>Pics</h2>
			{/* <p style={{ left: 100 + position }}>FLICKR</p>
			<h3 style={{ left: 100 + position / 2 }}>FLICKR</h3> */}
			<div className='box'>
				{gallery.map((item, idx) => {
					if (idx < 12) {
						return (
							<div className='pic' key={idx} className='pic'
							onClick={() => {
								setIndex(idx);
								pop.current.open();
							}}>
								<img
									src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
									alt={item.title}
								/>
							</div>
						);
					}
				})}
			</div>
		</section>
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

export default Pics;
