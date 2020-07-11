import * as React from 'react'
import * as Mui from '@material-ui/core'
import * as MuiIcons from '@material-ui/icons'

const useClasess = Mui.makeStyles({
	zero: {
		fontSize: 'inherit',
	},
})

export const NotFoundPage: React.FC = () => {
	const classes = useClasess()
	return (
		<Mui.Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			p="3rem"
		>
			<Mui.Typography variant="h1">
				4<MuiIcons.GitHub className={classes.zero} />4
			</Mui.Typography>
			<Mui.Typography variant="h6">Didn't find anything here</Mui.Typography>
		</Mui.Box>
	)
}
