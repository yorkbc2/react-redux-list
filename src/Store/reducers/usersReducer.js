import {
	USERS_FETCH_START,
	USERS_FETCH_END,
	USERS_FETCH_ERROR
} from "./../constants/users.js";

let initialState = {
	fetched: false,
	fetching: false,
	error: false,
	data: []
}

export let newState = (oldState, newState) => Object.assign({}, oldState, newState);

export function usersReducer (state=initialState, action) {
	switch (action.type) {
		case USERS_FETCH_START: {
			return newState(state, {fetching: true});
		}
		case USERS_FETCH_END: {
			return newState(state, {fetching: false, fetched: true, data: action.payload});
		}
		case USERS_FETCH_ERROR: {
			return newState(state, {fetching: false, error: action.payload});
		}
		default {
			return state;
		}
	}
}