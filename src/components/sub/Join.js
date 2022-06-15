import Layout from '../common/Layout';
import { useState, useEffect } from 'react';

function Join() {
	const initVal = {
		userid: '',
		pwd1: '',
		pwd2: '',
		email: '',
		comments: '',
		gender: null,
		interests: null,
	};
	const [Val, setVal] = useState(initVal);
	const [Err, setErr] = useState({});

	const check = (Val) => {
		const errs = {};
		const eng = /[a-zA-Z]/;
		const num = /[0-9]/;
		const spc = /[!@#$%^&*()_+]/;

		//userid인증처리
		if (Val.userid.length < 5) {
			errs.userid = '아이디를 5글자 이상 입력하세요';
		}
		//password인증처리
		if (
			Val.pwd1.length < 5 ||
			!eng.test(Val.pwd1) ||
			!num.test(Val.pwd1) ||
			!spc.test(Val.pwd1)
		) {
			errs.pwd1 =
				'비밀번호는 5글자 이상, 영문, 숫자, 특수문자를 모두 포함하세요.';
		}
		if (Val.pwd1 !== Val.pwd2 || !Val.pwd2) {
			errs.pwd2 = '두개의 비밀번호를 동일하게 입력하세요';
		}
		if (Val.email.length < 8 || !/@/.test(Val.email)) {
			errs.email = '이메일은 8글자이상 @를 포함해 입력하세요';
		}
		if (!Val.gender) {
			errs.gender = '성별을 선택하세요';
		}
		if (!Val.interests) {
			errs.interests = '관심사를 하나이상 선택하세요';
		}
		if (Val.comments.length < 20) {
			errs.comments = '남기는 말은 20글자 이상 입력하세요';
		}
		return errs;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};

	const handleRadio = (e) => {
		const { name } = e.target;
		const isCheck = e.target.checked;
		setVal({ ...Val, [name]: isCheck });
	};

	const handleCheck = (e) => {
		let isCheck = false;
		const { name } = e.target;
		const inputs = e.target.parentElement.querySelectorAll('input');

		inputs.forEach((el) => {
			if (el.checked) isCheck = true;
		});

		setVal({ ...Val, [name]: isCheck });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(Val));
	};

	useEffect(() => {
		console.log(Err);
	}, [Err]);

	const path = process.env.PUBLIC_URL;

	return (
		<Layout name={'Join'}>
			<div className='visual'>
				<div className='inner'>
					<div className='text_box'>
						<h2>Join</h2>
						<p>
							Jeep Care Service는 Jeep만의 최상의 서비스를 제공하기 위한
							프로그램 으로 차량 보증과 5년 소모성 부품 무상 교환 서비스가
							통합된 프로그램 입니다. 더 나은 고객 만족을 위해 아래의 서비스
							패키지를 Jeep 차량을 구매하는 모든 고객에게 제공합니다.
						</p>
					</div>
				</div>
			</div>
			<div className='inner'>
				<div className='left_box'>
					<h2>
						What will <br /> be next step?
					</h2>
					<ul>
						<li>
							<h3>1. We'll prepare a proposal</h3>
							<p>
								Required scope, timeline and apr.price will be included if you
								porvide us with detial information about a project.
							</p>
						</li>
						<li>
							<h3>2. Together we discuss it</h3>
							<p>
								Let's get acquainted and discuss all the possible variants and
								options. Google Hangouts or Skype usually works great.
							</p>
						</li>
						<li>
							<h3>3. Let's start building</h3>
							<p>
								When the contract is signed, and all goals are set we can start
								the first sprint
							</p>
						</li>
					</ul>
				</div>
				<div className='form_box'>
					<div className='top_box'>
						<div className='pic'>
							<img
								src={`${path}/img/join/ico_v_bl.jpg`}
								alt='지프 파트너사 유벤투스 이미지'
							/>
						</div>
						<p>
							회원가입을 하시면 다양한 서비스와 혜택을 받으실 수 있습니다.{' '}
							<br />
							고객님의 개인정보보호를 위해 인증을 거쳐 회원가입을 하고 있습니다.
						</p>
					</div>
					<form onSubmit={handleSubmit}>
						<fieldset>
							<legend className='h'>회원가입 폼 양식</legend>
							<table>
								<caption className='h'>회원가입 정보입력</caption>
								<colgroup>
									<col width={'50%'} />
									<col width={'50%'} />
								</colgroup>
								<tbody>
									<tr>
										<th colSpan={2}>status</th>
									</tr>
									<tr>
										<td>
											<label htmlFor='userid'>USER ID</label>
											<input
												type='text'
												id='userid'
												name='userid'
												placeholder='아이디를 입력하세요.'
												value={Val.userid}
												onChange={handleChange}
											/>
											<span className='err'>{Err.userid}</span>
										</td>
										<td>
											<label htmlFor='pwd1'>PASSWORD</label>
											<input
												type='password'
												name='pwd1'
												id='pwd1'
												placeholder='비밀번호를 입력하세요'
												value={Val.pwd1}
												onChange={handleChange}
											/>
											<span className='err'>{Err.pwd1}</span>
										</td>
									</tr>
									<tr>
										<td>
											<label htmlFor='pwd2'>RE-PASSWORD</label>
											<input
												type='password'
												name='pwd2'
												id='pwd2'
												placeholder='비밀번호를 재입력하세요'
												value={Val.pwd2}
												onChange={handleChange}
											/>
											<span className='err'>{Err.pwd2}</span>
										</td>
										<td>
											<label htmlFor='email'>E-MAIL</label>
											<input
												type='text'
												id='emial'
												name='email'
												placeholder='이메일주소를 입력하세요'
												value={Val.email}
												onChange={handleChange}
											/>
											<span className='err'>{Err.email}</span>
										</td>
									</tr>
									<tr>
										<th colSpan={2}>Comments</th>
									</tr>
									<tr>
										<td colSpan={2}>
											<label htmlFor='comments'>COMMENTS</label>
											<textarea
												name='comments'
												id='comments'
												cols='30'
												rows='10'
												value={Val.comments}
												onChange={handleChange}></textarea>
											<span className='err'>{Err.comments}</span>
										</td>
									</tr>

									{/* btnSet */}
									<tr>
										<th colSpan='2'>
											<input type='reset' value='CANCEL' />
											<input type='submit' value='SUBMIT' />
										</th>
									</tr>
								</tbody>
							</table>
						</fieldset>
					</form>
				</div>
			</div>
		</Layout>
	);
}

export default Join;
