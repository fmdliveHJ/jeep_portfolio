import { combineReducers } from 'redux';

const initMember = {
	members: [
		{
			years: '1940’s',
			title: 'A HERITAGE OF HEROES',
			desc: '2차 세계대전이 한창이던 시절 Go-Anywhere, Do-Anything® Jeep® 4x4는 전 세계에 있는 수많은 연합군 병사들의 영웅으로 떠올랐습니다. 마찬가지로 영웅적이었던 1940년대 민간용 Jeep® 모델은 Jeep® 브랜드를 4x4 기술에서 절대 강자로 자리매김하도록 하였습니다.',
			pic: '../img/jeeplife/history_car01.jpg',
		},
		{
			years: '1950’s',
			title: 'Welcome Willys Motors',
			desc: '1950년대는 레저 차량과 공학적 우위가 부상하던 시기였습니다. Jeep® 애호가 덕분에 Jeep® Jamboree 축제가 시작되었고, 7개의 고유 모델 덕분에 Jeep® 판매가 최고치를 기록하였습니다.',
			pic: '../img/jeeplife/history_car02.jpg',
		},
		{
			years: '1960’s',
			title: 'Introduction to a Design classic',
			desc: '프레스티지와 개성이 전부였던 그 당시 All-New Jeep® Wagoneer는 세련미와 혁신의 최강자였습니다. Jeep® 브랜드 라인업은 업무용, 여가용, 레저용, 고성능 수송용 등 14개 모델로 성장하였습니다.',
			pic: '../img/jeeplife/history_car03.jpg',
		},
		{
			years: '1970’s',
			title: 'The AMC Years',
			desc: '최초의 풀-타임 4x4 시스템 도입으로 70년대에도 Jeep®의 4x4 리더십은 계속됩니다. 스포티한 2-도어 풀-사이즈 Cherokee(SJ)가 올해의 4WD 상을 휩쓸었습니다. 6개 모델 덕분에 판매가 급증하고 최고치를 경신하였습니다.',
			pic: '../img/jeeplife/history_car04.jpg',
		},
		{
			years: '1980’s',
			title: 'A New Sport Utility Vehicle (SUV)',
			desc: '새로 출시한 All-New Jeep® Grand Cherokee(XJ)가 4x4 시장에 혁신을 가져왔습니다. 최초의 컴팩트 4-도어 SUV, 최초의 유니프레임 구축, 시프트-온-플라이 기능을 갖춘 최초 풀-타임 4x4 시스템 등 다양한 업계 최초 사양이 강력한 XJ 모델에 적용되었습니다.',
			pic: '../img/jeeplife/history_car05.jpg',
		},
		{
			years: '1990’s',
			title: 'Luxurious SUVs',
			desc: 'All-New 1993 Jeep® Grand Cherokee(ZJ)는 온로드와 오프로드 성능의 독특한 균형을 통해 업계의 새로운 기준을 제시하였습니다. 신형 코일 서스펜션이 탑재된 고성능 Wrangler(TJ)가 1997년에 출시되었습니다. 1999년에는 신형 Grand Cherokee(WJ)가 최강 성능의 SUV로 자리잡았으며, 판매가 10년 동안 62만 9천대로 급증하였습니다.',
			pic: '../img/jeeplife/history_car06.jpg',
		},
		{
			years: '2000’s',
			title: 'The Jeep® Line-up Grows',
			desc: '급진적인 2003 Jeep® Wrangler Rubicon은 여태까지의 Jeep® 브랜드 중 성능이 가장 탁월하였습니다. 신형 4-도어 Wrangler 라인이 출시되자 업계는 대성공을 거두었습니다. Wrangler Unlimited는 4-도어의 공간과 효용을 바라던 사람들에게 기능의 신세계를 열어 주었습니다. 2006년 Compass와 Patriot가 Jeep® 차량으로는 최초로 소형 크로스오버 세그먼트를 개척하였습니다.',
			pic: '../img/jeeplife/history_car07.jpg',
		},
		{
			years: '2010’s',
			title: '역경을 극복하고 다시 정상에 우뚝 서다',
			desc: 'Jeep® 브랜드는 2016년에 141만 대의 글로벌 판매량을 기록하면서 75년 역사상 최고치를 달성하였습니다. 앞으로도 Jeep®는 Grand Cherokee, Cherokee, Wrangler, Renegade, 그리고 Compass의 신규모델을 전략적으로 출시하면서 새로운 도약을 준비하고 있습니다.',
			pic: '../img/jeeplife/history_car08.jpg',
		},
	],
};

const memberReducer = (state = initMember, action) => {
	switch (action.type) {
		case 'SET_MEMBERS':
			return { ...state, members: action.payload };
		default:
			return state;
	}
};

const youtubeReducer = (state = { youtube: [] }, action) => {
	switch (action.type) {
		case 'SET_YOUTUBE':
			return { ...state, youtube: action.payload };
		default:
			return state;
	}
};

const flickrReducer = (state = { flickr: [] }, action) => {
	switch (action.type) {
		case 'FLICKR_START':
			return { ...state };

		case 'FLICKR_SUCCESS':
			return { ...state, flickr: action.payload };

		case 'FLICKR_ERROR':
			return { ...state, error: action.payload };

		default:
			return state;
	}
};


const reducers = combineReducers({ memberReducer, youtubeReducer, flickrReducer, });
export default reducers;
