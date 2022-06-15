import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function News() {
	const path = process.env.PUBLIC_URL;
	const Members = useSelector((store) => store.memberReducer.members);

	//로컬저장소에서 데이터를 받아와서 json형태로 반환
	const getLocalData = () => {
		const data = localStorage.getItem('post');
		const dummyPosts = [
			{ title: 'Hello5', content: 'Here comes description in detail.' },
			{ title: 'Hello4', content: 'Here comes description in detail.' },
			{ title: 'Hello3', content: 'Here comes description in detail.' },
			{ title: 'Hello2', content: 'Here comes description in detail.' },
			{ title: 'Hello1', content: 'Here comes description in detail.' },
		];

		if (data) {
			return JSON.parse(data);
		} else {
			return dummyPosts;
		}
	};

	const [Posts] = useState(getLocalData());

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(Posts));
	}, []);
	return (
		<section id='news' className='myScroll'>
			<h3>History</h3>
			<div className='preview_members'>
				{Members.map((member, idx) => {
					return (
						<div key={idx}>
							<div className='pic'>
								<img src={`${path}/img/${member.pic}`} alt={member.years} />
							</div>
						</div>
					);
				})}
			</div>

			<div className='preview_news'>
				{Posts.map((post, idx) => {
					if (idx < 4) {
						return (
							<article key={idx}>
								<h2>{post.title}</h2>
								<p>{post.content}</p>
							</article>
						);
					}
				})}
			</div>
		</section>
	);
}

export default News;
