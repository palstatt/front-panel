import types from '../actions'

const initialState = {
	companies: [],
	fetching: false,
}

const businessData = (state = initialState, action) => {
	switch (action.type) {
		case types.REQ_COMPANY_LIST:
			return {
				...state,
				fetching: true,
			}
		case types.STORE_COMPANY_LIST:
			return {
				...state,
				fetching: false,
				companies: action.companyList,
			}
		default:
			return state
	}
}

export default businessData
