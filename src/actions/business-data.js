import types from './types'

export const reqContactList = () => ({
	type: types.REQ_CONTACT_LIST,
})

export const storeContactList = companyList => ({
	type: types.STORE_CONTACT_LIST,
	companyList,
})
