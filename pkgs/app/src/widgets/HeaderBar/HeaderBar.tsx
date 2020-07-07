import * as React from 'react'
import * as Mui from '@material-ui/core'
import { Link } from 'react-router-dom'
import * as AuthAtom from '../../atoms/Auth'

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
	const signOut = AuthAtom.useSignOut()

	return (
		<Mui.Button color="inherit" onClick={signOut}>
			Sign Out
		</Mui.Button>
	)
}

export const Authorize: React.FC = () => {
	const authorize = AuthAtom.useAuthorize()

	return (
		<Mui.Button color="inherit" onClick={authorize}>
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
			<Mui.Typography color="inherit">Hello, Dev</Mui.Typography>
			{isAuthorized && <SignOut />}
			{!isAuthorized && <Authorize />}
		</>
	)
}
