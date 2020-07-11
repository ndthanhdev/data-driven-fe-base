import * as React from 'react'
import * as Mui from '@material-ui/core'
import * as MuiIcons from '@material-ui/icons'

export const Footer: React.FC = () => {
	return (
		<>
			<Mui.Box
				display="flex"
				width="100%"
				height="6rem"
				justifyContent="center"
				alignItems="center"
			>
				<MuiIcons.GitHub />
			</Mui.Box>
		</>
	)
}
