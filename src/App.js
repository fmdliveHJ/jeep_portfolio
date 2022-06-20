import { Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//sub
import Jeeplife from './components/sub/Jeeplife';
import Community from './components/sub/Community';
import Gallery from './components/sub/Gallery';
import Media from './components/sub/Media';
import Location from './components/sub/Location';
import Join from './components/sub/Join';
import Main from './components/main/Main';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as types from './redux/actionType';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({
			type: types.GALLERY.start,
			Opt: { type: 'user', count: 50, user: '195814985@N05' },
		});
		dispatch({ type: types.YOUTUBE.start });
		dispatch({ type: types.MEMBER.start });
	}, []);

	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Main />
				</Route>

				{/* 서브용 header */}
				<Route path='/' render={() => <Header type={'sub'} />} />
			</Switch>

			<Route path='/jeeplife' component={Jeeplife} />
			<Route path='/community' component={Community} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/media' component={Media} />
			<Route path='/location' component={Location} />
			<Route path='/join' component={Join} />

			<Footer />
		</>
	);
}

export default App;