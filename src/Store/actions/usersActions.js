import {
	USERS_FETCH_START,
	USERS_FETCH_END,
	USERS_FETCH_ERROR
} from "./../constants/users.js"

export const usersFetchStart = () => {
	return {
		type: USERS_FETCH_START
	}
}

export const usersFetchEnd = (data) => {
	return {
		type: USERS_FETCH_END,
		payload: data
	}
}

export const usersFetchError = (error) => {
	return {
		type: USERS_FETCH_ERROR,
		payload: error
	}
}