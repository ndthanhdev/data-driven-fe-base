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
		<Mui.Box display="block" width="100%" mt="2rem">
			<Mui.Link variant="h4" href="/">
				{props?.name}
			</Mui.Link>
			<Mui.Box display="flex" flexWrap="no-wrap" my="2rem">
				{props.primaryLanguage && (
					<Mui.Box pr="1rem">
						<Mui.Typography>{props.primaryLanguage.name}</Mui.Typography>
					</Mui.Box>
				)}
				<Mui.Box pr="1rem">
					<Mui.Typography>{String(props.forkCount)} kj</Mui.Typography>
				</Mui.Box>
				<Mui.Box pr="1rem">
					<Mui.Typography>{props.licenseInfo?.name}</Mui.Typography>
				</Mui.Box>
				<Mui.Box pr="1rem">
					<Mui.Typography>{lastUpdate}</Mui.Typography>
				</Mui.Box>
			</Mui.Box>
			<Mui.Divider light={false} />
		</Mui.Box>
	)
}
