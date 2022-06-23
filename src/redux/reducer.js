import { combineReducers } from 'redux';
import * as types from './actionType';

const memberReducer = (state = { members: [] }, action) => {
	switch (action.type) {
		case types.MEMBER.start:
			return { ...state };

		case types.MEMBER.success:
			return { ...state, members: action.payload };

		case types.MEMBER.err:
			return { ...state, error: action.payload };

		default:
			return state;
	}
};

const picsReducer = (state = { pics: [] }, action) => {
	switch (action.type) {
		case types.PICS.start:
			return { ...state };

		case types.PICS.success:
			return { ...state, pics: action.payload };

		case types.PICS.err:
			return { ...state, error: action.payload };

		default:
			return state;
	}
};

const youtubeReducer = (state = { youtube: [] }, action) => {
	switch (action.type) {
		case types.YOUTUBE.start:
			return { ...state };

		case types.YOUTUBE.success:
			return { ...state, youtube: action.payload };

		case types.YOUTUBE.err:
			return { ...state, error: action.payload };

		default:
			return state;
	}
};

const galleryReducer = (state = { gallery: [] }, action) => {
	switch (action.type) {
		case types.GALLERY.start:
			return { ...state };

		case types.GALLERY.success:
			return { ...state, gallery: action.payload };

		case types.GALLERY.err:
			return { ...state, error: action.payload };

		default:
			return state;
	}
};

const reducers = combineReducers({
	memberReducer,
	youtubeReducer,
	galleryReducer,
	picsReducer,
});
export default reducers;