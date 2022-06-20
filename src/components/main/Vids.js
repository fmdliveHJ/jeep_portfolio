import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Popup from '../common/Popup';
function Vids() {
	const path = process.env.PUBLIC_URL;
	const Vids = useSelector((store) => store.youtubeReducer.youtube);
	const [Index, setIndex] = useState(0);
	const pop = useRef(null);
	return (
		<>
			<section id='vids' className='myScroll'>
				<h2>MEDIA</h2>
				<div className="top_text">
					<h3>Lorem, ipsum.</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique perferendis ipsum vel consectetur dolores reiciendis, voluptas possimus iusto qui officiis.</p>
				</div>
				<div className="vids_youtube">
				{Vids.map((vid, idx) => {
					if (idx < 6) {
						return (
							<article key={idx}>
								<div
									className='pic'
									onClick={() => {
										setIndex(idx);
										pop.current.open();
									}}>
									<img
										src={vid.snippet.thumbnails.standard.url}
										alt={vid.snippet.title}
									/>
								</div>
							</article>
						);
					}
				})}
				<Link to='/media' className='btnPlus'>MORE VIEW</Link>
				</div>
				<video
							muted
							controls
							src={`${path}/img/jeeplife/members_video.mp4`}></video>
			</section>
			<Popup ref={pop}>
				<>
					{Vids.length !== 0 && (
						<iframe
							src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
							frameBorder='0'></iframe>
					)}
				</>
			</Popup>
		</>
	);
}

export default Vids;
