import { ajax } from 'rxjs/ajax'
import { tap, ignoreElements, switchMap, map, catchError } from 'rxjs/operators'
import { of } from 'rxjs'
import { combineEpics, ofType } from 'redux-observable'
import types, * as actions from '../actions'

const addNotificationEpic = action$ =>
	action$.pipe(
		ofType(types.ADD_NOTIFICATION),
		tap(message => console.log(message)),
		ignoreElements()
	)

const reqCompanyListEpic = action$ =>
	action$.pipe(
		ofType(types.REQ_COMPANY_LIST),
		switchMap(action =>
			ajax.getJSON(process.env.REACT_APP_API_URL).pipe(
				map(list => actions.storeCompanyList(list)),
				catchError(error =>
					of(error).pipe(
						map(({ response }) => actions.addNotification(response.error))
					)
				)
			)
		)
	)

export const rootEpic = combineEpics(addNotificationEpic, reqCompanyListEpic)
