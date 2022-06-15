import { Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//sub
import Jeeplife from './components/sub/Jeeplife';
import Gallery from './components/sub/Gallery';
import Community from './components/sub/Community';
import Flickr from './components/sub/Flickr';
import Media from './components/sub/Media';
import Location from './components/sub/Location';
import Join from './components/sub/Join';
import Main from './components/main/Main';

import axios from 'axios';
import { useEffect } from 'react';
import { setYoutube } from './redux/action';
import { useDispatch } from 'react-redux';

function App() {
	const dispatch = useDispatch();


	useEffect(() => {
		dispatch({
			type: 'FLICKR_START',
			Opt: { type: 'user', count: 50, user: '195814985@N05' },
		});
		dispatch({ type: 'YOUTUBE_START' });
		dispatch({ type: 'MEMBER_START' });
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

			<Route path='/Jeeplife' component={Jeeplife} />
			<Route path='/community' component={Community} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/flickr' component={Flickr} />
			<Route path='/Media' component={Media} />
			<Route path='/location' component={Location} />
			<Route path='/join' component={Join} />

			<Footer />
		</>
	);
}

export default App;
