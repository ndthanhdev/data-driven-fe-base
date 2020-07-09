import * as React from 'react'
import * as Mui from '@material-ui/core'
import { Link } from 'react-router-dom'
import * as AuthAtom from '../../atoms/Auth'
import { useSignOut, useAuthorizeLink } from '../../hooks/auths'
import { Welcome } from '../Welcome'

type Item = {
	name: string
	link: string
}

export const Item: React.FC<Item> = (props) => {
	return (
		<Mui.Button color="inherit" component={Link} to={props.link}>
			{props.name}
		</Mui.Button>
	)
}

export const SignOut: React.FC = () => {
	const signOut = useSignOut()

	return (
		<Mui.Button color="inherit" onClick={signOut}>
			Sign Out
		</Mui.Button>
	)
}

export const Authorize: React.FC = () => {
	const authorizeLink = useAuthorizeLink()

	return (
		<Mui.Button color="inherit" href={authorizeLink}>
			Authorize
		</Mui.Button>
	)
}

export const HeaderBar: React.FC = () => {
	const isAuthorized = AuthAtom.useIsAuthorized()

	return (
		<>
			<Item name="My Repos" link="/my-repos" />
			<Item name="Stared" link="/stared" />
			<Mui.Box flexGrow="1" />
			{isAuthorized && <Welcome />}
			{isAuthorized && <SignOut />}
			{!isAuthorized && <Authorize />}
		</>
	)
}
