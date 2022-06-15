function Pics({ Scrolled, start, base }) {
	let position = 0;
	if (start) position = Scrolled - start - base;

	return (
		<section id='pic' className='myScroll'>
			{/* <p style={position >= 0 ? { left: 100 + position } : null}>FLICKR</p> */}
			<p style={{ left: 100 + position }}>FLICKR</p>
		</section>
	);
}

export default Pics;
