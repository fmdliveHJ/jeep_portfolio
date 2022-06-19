import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';
import Menu from './Menu';

function Header({ type }) {
	const menu = useRef(null);
	const style = { color: '#ffba00' };

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
				<FontAwesomeIcon icon={faBars} onClick={() => menu.current.toggle()} />
			</div>
			<Menu ref={menu} />
		</header>
	);
}

export default Header;
