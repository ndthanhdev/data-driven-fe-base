import * as React from 'react'
import * as Mui from '@material-ui/core'
import * as ReactRouter from 'react-router-dom'
import * as AuthAtom from '../../atoms/Auth'

type AuthorizePage = {}

export const AuthorizePage: React.FC<AuthorizePage> = () => {
	AuthAtom.useTryAuthorize()

	const link = AuthAtom.useAuthorizeLink()

	return (
		<>
			<Mui.Button size="large" color="primary" href={link}>
				Authorize
			</Mui.Button>
		</>
	)
}
