import * as Recoil from 'recoil'
import * as AuthSvc from '../services/auth'

export type State = {
	isAuthorized: boolean
}

export const AuthState = Recoil.atom<State>({
	key: 'auth',
	default: {
		isAuthorized: !!AuthSvc.getAccessToken(),
	},
})

export const IsAuthorized = Recoil.selector({
	key: 'IsAuthorized',
	get: ({ get }) => {
		return get(AuthState).isAuthorized
	},
})


