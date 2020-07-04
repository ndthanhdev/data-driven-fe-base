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
			<Item name="All Nations" link="/all-nations" />
			<Item name="Regions" link="/regions" />
			<Item name="Time Zones" link="/time-zones" />
		</>
	)
}
