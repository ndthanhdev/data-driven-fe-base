import * as React from 'react'
import * as Mui from '@material-ui/core'
import * as ReactRouter from 'react-router-dom'
import * as Authorize from '../../services/authorize'

function useQuery() {
	return new URLSearchParams(ReactRouter.useLocation().search)
}

type AuthorizePage = ReactRouter.RouteChildrenProps & {}

export const AuthorizePage: React.FC<AuthorizePage> = (props) => {
	const history = ReactRouter.useHistory()
	const originSearch = React.useRef(new URLSearchParams(window.location.search))
	const from = String(originSearch.current.get('from') ?? '/')

	React.useEffect(() => {
		const code = originSearch.current.get('code')
		if (code) {
			;(async () => {
				await Authorize.generateToken(code)
				history.replace(from ?? '/')
			})()
		}
	}, [])

	return (
		<>
			<Mui.Button
				size="large"
				color="primary"
				href={Authorize.getAuthorizeLink(from)}
			>
				Authorize
			</Mui.Button>
		</>
	)
}
