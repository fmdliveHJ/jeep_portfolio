import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';
import Menumo from './Menumo';

function Header({ type }) {
	const style = { color: '#ffba00' };
	const [Open, setOpen] = useState(false);

	return (
		<header className={type}>
			<div className='inner'>
				<h1>
					<Link to='/'>JEEP1</Link>
				</h1>
				<ul id='gnb'>
					<li>
						<NavLink activeStyle={style} to='/Jeeplife'>
							JEEPLIFE
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={style} to='/community'>
							COMMUNITY
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={style} to='/gallery'>
							GALLERY
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={style} to='/flickr'>
							FLICKR
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={style} to='/media'>
							MEDIA
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={style} to='/location'>
							LOCATION
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={style} to='/join'>
							JOIN
						</NavLink>
					</li>
				</ul>
				<FontAwesomeIcon icon={faBars} onClick={() => setOpen(true)} />
			</div>
			{Open && (
				<Menumo size={{ width: 400, height: 250 }} setOpen={setOpen}>
					<h2>Hello</h2>
					<ul id='gnb' className='menuMo'>
						<li>
							<NavLink
								activeStyle={style}
								to='/Jeeplife'
								onClick={() => setOpen(false)}>
								JEEPLIFE
							</NavLink>
						</li>
						<li>
							<NavLink
								activeStyle={style}
								to='/community'
								onClick={() => setOpen(false)}>
								COMMUNITY
							</NavLink>
						</li>
						<li>
							<NavLink
								activeStyle={style}
								to='/gallery'
								onClick={() => setOpen(false)}>
								GALLERY
							</NavLink>
						</li>
						<li>
							<NavLink
								activeStyle={style}
								to='/media'
								onClick={() => setOpen(false)}>
								MEDIA
							</NavLink>
						</li>
						<li>
							<NavLink
								activeStyle={style}
								to='/location'
								onClick={() => setOpen(false)}>
								LOCATION
							</NavLink>
						</li>
						<li>
							<NavLink
								activeStyle={style}
								to='/join'
								onClick={() => setOpen(false)}>
								JOIN
							</NavLink>
						</li>
					</ul>
				</Menumo>
			)}
		</header>
	);
}

export default Header;
