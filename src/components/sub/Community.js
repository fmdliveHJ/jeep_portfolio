import Layout from '../common/Layout';
import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEdit,
	faDeleteLeft,
	faCancel,
	faSave,
} from '@fortawesome/free-solid-svg-icons';

function Community() {
	const input = useRef(null);
	const textarea = useRef(null);
	const inputEdit = useRef(null);
	const textareaEdit = useRef(null);

	const getLocalData = () => {
		const data = localStorage.getItem('post');
		return JSON.parse(data);
	};

	const [Posts, setPosts] = useState(getLocalData());
	const [Allowed, setAllowed] = useState(true);

	//글 초기화  함수
	const resetPost = () => {
		input.current.value = '';
		textarea.current.value = '';
		if (inputEdit.current) {
			inputEdit.current.value = '';
			textareaEdit.current.value = '';
		}
	};

	//글 저장 함수
	const createPost = () => {
		if (!input.current.value.trim() || !textarea.current.value.trim()) {
			resetPost();
			return alert('제목과 본문을 모두 입력하세요');
		}
		setPosts([
			{ title: input.current.value, content: textarea.current.value },
			...Posts,
		]);
		resetPost();
	};

	//글 삭제 함수
	const deletePost = (index) => {
		console.log(index);
		setPosts(Posts.filter((_, idx) => index !== idx));
	};

	//실제 글 수정 함수
	const updatePost = (index) => {
		setAllowed(true);
		if (!inputEdit.current.value.trim() || !textareaEdit.current.value.trim()) {
			resetPost();
			return alert('수정할 제목과 본문을 모두 입력하세요');
		}

		setPosts(
			Posts.map((post, idx) => {
				if (idx === index) {
					post.title = inputEdit.current.value;
					post.content = textareaEdit.current.value;
					post.enableUpdate = false;
				}
				return post;
			})
		);
	};

	//글 수정모드 변경함수
	const enableUpdate = (index) => {
		if (!Allowed) return;
		setAllowed(false);
		setPosts(
			Posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = true;

				return post;
			})
		);
	};

	//출력모드 변경함수
	const disableUpdate = (index) => {
		setAllowed(true);
		setPosts(
			Posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = false;
				return post;
			})
		);
	};
	const main = useRef(null);
	const favoriteBtn = useRef(null);

	useEffect(() => {
		//console.log(Posts);
		localStorage.setItem('post', JSON.stringify(Posts));
	}, [Posts]);

	return (
		<Layout name={'Community'}>
			<div className='visual'>
				<div className='text_box'>
					<h2>TALK THE TALK</h2>
					<p>
						Jeep Care Service는 Jeep만의 최상의 서비스를 제공하기 위한 프로그램
						으로 차량 보증과 5년 소모성 부품 무상 교환 서비스가 통합된 프로그램
						입니다. 더 나은 고객 만족을 위해 아래의 서비스 패키지를 Jeep 차량을
						구매하는 모든 고객에게 제공합니다.
					</p>
				</div>
			</div>
			<div className='inner'>
				<div className='inputBox'>
					<div className='top_box'>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
							cumque quasi necessitatibus aliquid voluptas labore amet eaque
							quibusdam quas veniam!
						</p>
					</div>
					<input type='text' placeholder='제목을 입력하세요' ref={input} />
					<br />
					<textarea
						cols='30'
						rows='5'
						placeholder='본문을 입력하세요'
						ref={textarea}></textarea>
					<br />

					<div className='btnSet'>
						<button onClick={resetPost}>CANCEL</button>
						<button onClick={createPost}>WRITE</button>
					</div>
				</div>

				<div className='showBox'>
					{Posts.map((post, idx) => {
						return (
							<article key={idx}>
								{post.enableUpdate ? (
									//수정모드
									<>
										<div className='editTxt'>
											<input
												type='text'
												defaultValue={post.title}
												ref={inputEdit}
											/>
											<br />
											<textarea
												cols='30'
												rows='5'
												ref={textareaEdit}
												defaultValue={post.content}></textarea>
										</div>

										<div className='btnSet'>
											<button onClick={() => disableUpdate(idx)}>
												{' '}
												<FontAwesomeIcon icon={faCancel} />
											</button>
											<button onClick={() => updatePost(idx)}>
												{' '}
												<FontAwesomeIcon icon={faSave} />
											</button>
										</div>
									</>
								) : (
									//출력
									<>
										<div className='txt'>
											<h2>{post.title}</h2>
											<p>{post.content}</p>
										</div>
										<div className='btnSet'>
											<button onClick={() => enableUpdate(idx)}>
												{' '}
												<FontAwesomeIcon icon={faEdit} />
											</button>
											<button onClick={() => deletePost(idx)}>
												{' '}
												<FontAwesomeIcon icon={faDeleteLeft} />
											</button>
										</div>
									</>
								)}
							</article>
						);
					})}
				</div>
			</div>
		</Layout>
	);
}

export default Community;
