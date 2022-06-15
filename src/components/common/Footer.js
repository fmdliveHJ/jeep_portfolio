import { NavLink } from 'react-router-dom';

function Footer() {
	return (
		<footer>
			<div className='inner'>
				<h1>logo</h1>
				<div>
					<ul>
						<li>
							<NavLink to='/Jeeplife'>JEEPLIFE</NavLink>
						</li>
						<li>
							<NavLink to='/community'>COMMUNITY</NavLink>
						</li>
						<li>
							<NavLink to='/gallery'>GALLERY</NavLink>
						</li>
						<li>
							<NavLink to='/media'>MEDIA</NavLink>
						</li>
						<li>
							<NavLink to='/location'>LOCATION</NavLink>
						</li>
						<li>
							<NavLink to='/join'>JOIN</NavLink>
						</li>
					</ul>
					<p className='copyright'>©2022 Stellantis. All Rights Reserved.</p>
					<p>Chrysler, Jeep 및 FIAT 로고는 Stellantis의 등록 상표입니다.</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
