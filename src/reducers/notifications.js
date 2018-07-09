import types from '../actions'

const initialState = {
	messages: [],
}

const notifications = (state = initialState, action) => {
	switch (action.type) {
		case types.ADD_NOTIFICATION:
			return {
				...state,
				messages: [...state.messages, action.payload],
			}
		case types.REMOVE_NOTIFICATION:
			return {
				...state,
				messages: state.messages.filter(message => message.id !== action.id),
			}
		default:
			return state
	}
}

export default notifications
