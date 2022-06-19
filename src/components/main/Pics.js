import { useSelector } from 'react-redux';

function Pics({ Scrolled, start, base }) {
	const { gallery } = useSelector((store) => store.galleryReducer);
	let position = 0;
	if (start) position = Scrolled - start - base;

	return (
		<section id='pic' className='myScroll'>
			<h2>Pics</h2>
			{/* <p style={{ left: 100 + position }}>FLICKR</p>
			<h3 style={{ left: 100 + position / 2 }}>FLICKR</h3> */}
			<div className='box'>
				{gallery.map((item, idx) => {
					if (idx < 8) {
						return (
							<div className='pic' key={idx}>
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
	);
}

export default Pics;
