import React from 'react'
import * as Mui from '@material-ui/core'
import * as Luxon from 'luxon'

export type RepoRow = {
	id: string
	name: string
	primaryLanguage?: {
		name?: string
		color?: string
	}
	forkCount: number
	licenseInfo?: {
		name: string
	}
	updateAt: string
}

const useClasses = Mui.makeStyles({
	flagContainer: {
		height: '10rem',
		width: '100%',
	},
})

export const RepoRow: React.FC<RepoRow> = (props: RepoRow) => {
	const { id } = props

	const classes = useClasses()

	const lastUpdate = React.useMemo(() => {
		return Luxon.DateTime.fromISO(props.updateAt).diffNow().toString()
	}, [props.updateAt])

	return (
		<Mui.Box display="block" width="20rem" height="15rem" margin="2rem">
			<Mui.Typography variant="h3">{props?.name}</Mui.Typography>
			<Mui.Box>
				{props.primaryLanguage && (
					<Mui.Typography>{props.primaryLanguage.name}</Mui.Typography>
				)}
				{props.forkCount ?? <Mui.Typography>{props.forkCount}</Mui.Typography>}
				<Mui.Typography>{props.licenseInfo?.name}</Mui.Typography>
				<Mui.Typography>{lastUpdate}</Mui.Typography>
			</Mui.Box>
		</Mui.Box>
	)
}
