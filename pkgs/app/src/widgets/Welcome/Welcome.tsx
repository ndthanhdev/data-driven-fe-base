import * as React from 'react'
import * as Mui from '@material-ui/core'
import { useWelcomeQuery } from '../../graphql'

type Welcome = {}

export const Welcome: React.FC = () => {
	const { data } = useWelcomeQuery()

	if (data?.viewer.login) {
		return (
			<Mui.Typography color="inherit">
				Hello, {data?.viewer.login}
			</Mui.Typography>
		)
	}

	return null
}
