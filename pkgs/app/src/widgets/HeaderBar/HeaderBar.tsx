import * as React from 'react'
import * as Mui from '@material-ui/core'
import { Link } from 'react-router-dom'

type Item = {
	name: string
	link: string
}

export const Item: React.FC<Item> = (props) => {
	return (
		<Mui.Button component={Link} to={props.link}>
			{props.name}
		</Mui.Button>
	)
}

export const HeaderBar: React.FC = () => {
	return (
		<>
			<Item name="My Repos" link="/my-repos" />
			<Item name="Stared" link="/stared" />
			<Mui.Box flexGrow="1" />
			<Mui.Typography color="textPrimary">Hello, Dev</Mui.Typography>
			<Item name="Sign out" link="/time-zones" />
			<Item name="Authorize" link="/time-zones" />
		</>
	)
}
