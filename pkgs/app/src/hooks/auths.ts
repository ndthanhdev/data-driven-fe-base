import * as ReactRouter from 'react-router-dom'
import { useSearch } from './useSearch'
import * as Recoil from 'recoil'
import * as React from 'react'
import { AuthState } from '../atoms/Auth'
import * as AuthSvc from '../services/auth'

export const useAuthorize = () => {
	const history = ReactRouter.useHistory()
	const code = useSearch('code')
	const from = useSearch('from')

	const set = Recoil.useSetRecoilState(AuthState)

	return React.useCallback(async () => {
		if (!code) {
			return
		}

		await AuthSvc.generateToken(code)
		set({
			isAuthorized: true,
		})
		history.replace(from ?? '/')
	}, [code, from])
}

export const useAuthorizeLink = (): string => {
	const from = useSearch('from')

	return React.useMemo(() => AuthSvc.getAuthorizeLink(from ?? undefined), [])
}

export const useSignOut = () => {
	const history = ReactRouter.useHistory()
	const setIsAuthState = Recoil.useSetRecoilState(AuthState)

	return React.useCallback(async () => {
		await AuthSvc.revokeToken()
		setIsAuthState({
			isAuthorized: false,
		})
		history.replace('/authorize')
	}, [history])
}

export const useTryAuthorize = () => {
	const code = useSearch('code')
	const authorize = useAuthorize()

	React.useEffect(() => {
		if (!code) {
			return
		}

		authorize()
	}, [code])
}
