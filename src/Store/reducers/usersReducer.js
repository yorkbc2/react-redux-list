import {
	USERS_FETCH_START,
	USERS_FETCH_END,
	USERS_FETCH_ERROR,
	USERS_SEARCH_BOX
} from "./../constants/users.js";

let initialState = {
	fetched: false,
	fetching: false,
	error: false,
	data: [],
	filteredData: []
}

export let newState = (oldState, newState) => Object.assign({}, oldState, newState);

export function usersReducer (state=initialState, action) {
	switch (action.type) {
		case USERS_FETCH_START: {
			return newState(state, {fetching: true});
		}
		case USERS_FETCH_END: {
			return newState(state, {fetching: false, fetched: true, data: action.payload, filteredData: action.payload});
		}
		case USERS_FETCH_ERROR: {
			return newState(state, {fetching: false, error: action.payload});
		}
		case USERS_SEARCH_BOX: {
			return newState(state, {
				filteredData: state.data.filter(i => i.first_name.indexOf(action.payload.text) !== -1)
			})
		}
		default: {
			return state;
		}
	}
}