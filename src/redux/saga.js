/*
  takeLatest : 액션요청이 여러번 들어오면 제일 최근 요청 하나만 실행 (takeEvery: 들어오는 요청 모두처리)
  all : 여러개의 요청함수를 병렬식으로  동시에 처리
  call : 특정함수를 동기적으로 호출 (api요청시 주로 사용, 두번째 인수값으로 api요청에 필요한 옵션값 전달) 
  fork : saga를 실행함수
  put : 리듀서로 액션객체를 전달 (dispatch)
*/
import { takeLatest, all, put, fork, call } from 'redux-saga/effects';
import { fetchGallery, fetchYoutube, fetchMember, fetchPics } from './api';
import * as types from './actionType';

//flickr saga
export function* returnGallery(action) {
	try {
		const response = yield call(fetchGallery, action.Opt);
		yield put({
			type: types.GALLERY.success,
			payload: response.data.photos.photo,
		});
	} catch (err) {
		yield put({ type: types.GALLERY.err, payload: err });
	}
}
export function* callGallery() {
	yield takeLatest(types.GALLERY.start, returnGallery);
}

//youtube saga
export function* returnYoutube() {
	try {
		const response = yield call(fetchYoutube);
		yield put({ type: types.YOUTUBE.success, payload: response.data.items });
	} catch (err) {
		yield put({ type: types.YOUTUBE.err, payload: err });
	}
}
export function* callYoutube() {
	yield takeLatest(types.YOUTUBE.start, returnYoutube);
}

//members saga
export function* returnMember() {
	try {
		const response = yield call(fetchMember);

		yield put({ type: types.MEMBER.success, payload: response.data.members });
	} catch (err) {
		yield put({ type: types.MEMBER.err, payload: err });
	}
}
export function* callMember() {
	yield takeLatest(types.MEMBER.start, returnMember);
}

//pics saga
export function* returnPics() {
	try {
		const response = yield call(fetchPics);

		yield put({ type: types.PICS.success, payload: response.data.pics });
	} catch (err) {
		yield put({ type: types.PICS.err, payload: err });
	}
}
export function* callPics() {
	yield takeLatest(types.PICS.start, returnPics);
}

export default function* rootSaga() {
	yield all([fork(callGallery), fork(callYoutube), fork(callMember), fork(callPics)]);
}