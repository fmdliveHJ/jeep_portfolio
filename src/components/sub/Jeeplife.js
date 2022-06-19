import { useSelector} from 'react-redux';
import Layout from '../common/Layout';

function Jeeplife({}) {
	const path = process.env.PUBLIC_URL;
	const Members = useSelector((store) => store.memberReducer.members);

	return (
		<>
			<Layout name={'Jeeplife'}>
				<div className='visual'>
					<div className='text_box'>
						<h2>THE STORY OF THE LEGEND</h2>
						<p>
							Jeep® 브랜드는 지난 78년 동안 자유, 모험, 진정성, 그리고 열정과
							뗄래야 뗄 수 없는 관계였습니다. Jeep® 뱃지는 브랜드 그 이상의 것을
							상징하며 사실 ‘명예의 훈장’입니다. Jeep®의 전설적인 라인업을
							자세히 알아보고 세월이 흘러도 변하지 않을 당신만의 스토리를 만들어
							보세요.
						</p>
					</div>
				</div>
				<div className='inner'>
					<h2>Jeeplife</h2>

					<div className='partner'>
						<h3>Partner</h3>
						<div className='box left'>
							<div className='pic'>
								<img
									src={`${path}/img/jeeplife/partner02.jpg`}
									alt='지프 파트너사 유벤투스 이미지'
								/>
							</div>
							<div className='text_box'>
								<h4>JEEP® BRAND PARTNERSHIPS</h4>
								<p>
									힘과 스타일의 상징인 Bianconeri의 흑백 줄무늬는 한 세기가
									넘도록 함께해왔으며 상징적인 Jeep® 7 슬롯 그릴과 완벽하게
									어울립니다. Jeep® 브랜드는 유벤투스와 팀을 이룬 것을
									자랑스럽게 여깁니다.
								</p>
							</div>
						</div>
						<div className='box right'>
							<div className='pic con1'>
								<img
									src={`${path}/img/jeeplife/partner03.jpg`}
									alt='지프 파트너사 서빙 이미지'
								/>
							</div>
							<div className='text_box con2'>
								<h4>Keeping Adventure Alive</h4>
								<p>
									서핑과 모험은 언제나 밀접하게 연관되어 있습니다. 세계 2차
									대전에서 활약했던 Willys MB가 다시 고향의 평화로운 해변으로
									돌아와 최고의 서핑 장소를 찾는 임무를 맡게 되었지만, 완벽한
									파도는 쉽게 찾을 수 없죠. 최고의 서핑 장소를 물색하기 위해선
									단단한 암석을 뛰어넘고, 사막과 웅덩이를 가로지를 수 있는
									강인한 차가 필요합니다. 쉽게 닿을 수 없는 파도일수록 그 가치는
									더 특별해지니까요.
								</p>
							</div>
							<div className='pic con3'>
								<img
									src={`${path}/img/jeeplife/partner01.jpg`}
									alt='지프 파트너사 서빙 이미지'
								/>
							</div>
						</div>
					</div>
				</div>

				<div className='members'>
					<div className='wrap'>
						<h3>Members</h3>
						<div className='text_box'>
							<h3></h3>
							<p>
								Jeep Wave® 프로그램은 지프 브랜드 80주년을 맞아 고객들에게
								최고의 브랜드 경험과 서포트를 제공하기 위해 마련된 Jeep® Owners
								전용 멤버십 프로그램이자 커뮤니티입니다. Jeep® Owners만이 경험할
								수 있는, 익스트림한 이벤트들과 여러가지 혜택이 제공되는 Jeep
								Wave® 에 지금 가입하세요.
							</p>
						</div>
						<video
							muted
							controls
							src={`${path}/img/jeeplife/members_video.mp4`}></video>
					</div>
				</div>
				<div className='inner'>
					<h3>Hitory</h3>
					<div className='history'>
						{Members.map((member, idx) => {
							return (
								<article key={idx}>
									<div className='text_box'>
										<h3>{member.years}</h3>
										<p>{member.title}</p>
										<span>{member.desc}</span>
									</div>
									<div className='pic'>
										<img src={`${path}/img/${member.pic}`} alt={member.years} />
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</Layout>
		</>
	);
}

export default Jeeplife;
