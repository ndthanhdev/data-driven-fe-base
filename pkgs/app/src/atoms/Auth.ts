import * as React from 'react'
import * as Recoil from 'recoil'
import * as AuthSvc from '../services/auth'
import * as ReactRouter from 'react-router-dom'

export type State = {
	isAuthorized: boolean
}

export const State = Recoil.atom<State>({
	key: 'auth',
	default: {
		isAuthorized: !!AuthSvc.getAccessToken(),
	},
})

export const useIsAuthorized = (): boolean => {
	return Recoil.useRecoilValue(State).isAuthorized
}

type Params = {
	code?: string
	from?: string
}

const useSearch = (name: string) => {
	const search = ReactRouter.useLocation<Params>().search
	return new URLSearchParams(search).get(name) ?? undefined
}

export const useAuthorizeLink = (): string => {
	const from = useSearch('from')

	return React.useMemo(() => AuthSvc.getAuthorizeLink(from ?? undefined), [])
}

export const useAuthorize = () => {
	const history = ReactRouter.useHistory()
	const code = useSearch('code')
	const from = useSearch('from')

	const set = Recoil.useSetRecoilState(State)

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

export const useSignOut = () => {
	const history = ReactRouter.useHistory()

	return React.useCallback(async () => {
		await AuthSvc.revokeToken()
		Recoil.useSetRecoilState(State)({
			isAuthorized: false,
		})
		history.replace('/authorize')
	}, [])
}
