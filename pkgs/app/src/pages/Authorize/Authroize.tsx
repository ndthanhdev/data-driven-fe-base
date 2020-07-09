import * as React from 'react'
import * as Mui from '@material-ui/core'
import * as ReactRouter from 'react-router-dom'
import * as AuthAtom from '../../atoms/Auth'
import { useAuthorizeLink, useTryAuthorize } from '../../hooks/auths'

type AuthorizePage = {}

export const AuthorizePage: React.FC<AuthorizePage> = () => {
	useTryAuthorize()

	const link = useAuthorizeLink()

	return (
		<>
			<Mui.Button size="large" color="primary" href={link}>
				Authorize
			</Mui.Button>
		</>
	)
}
