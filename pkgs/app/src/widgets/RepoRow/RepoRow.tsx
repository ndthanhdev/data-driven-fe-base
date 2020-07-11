import React from 'react'
import * as Mui from '@material-ui/core'
import * as Luxon from 'luxon'
import { ConnectedStarButton as StarButton } from '../StarButton'
import * as MuiIcon from '@material-ui/icons'

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
	divider: {
		width: '100%',
	},
})

export const RepoRow: React.FC<RepoRow> = (props: RepoRow) => {
	const { id } = props

	const classes = useClasses()

	const lastUpdate = React.useMemo(() => {
		return Luxon.DateTime.fromISO(props.updateAt).toRelative()
	}, [props.updateAt])

	const primaryLangColor = props.primaryLanguage?.color
	const primaryLangName = props.primaryLanguage?.name

	const primaryBlock = primaryLangName && (
		<Mui.Box display="flex" pr="1rem">
			{primaryLangColor && (
				<MuiIcon.FiberManualRecord style={{ color: primaryLangColor }} />
			)}
			<Mui.Typography>{primaryLangName}</Mui.Typography>
		</Mui.Box>
	)

	return (
		<Mui.Box display="block" width="100%" mt="2rem" mb="1rem">
			<Mui.Box
				display="flex"
				flexWrap="no-wrap"
				justifyContent="space-between"
				width="100%"
			>
				<Mui.Box display="block" pr="1rem" flexGrow="1">
					<Mui.Link variant="h4" href="/">
						{props?.name}
					</Mui.Link>
					<Mui.Box display="flex" flexWrap="no-wrap" my="2rem">
						{primaryBlock}
						<Mui.Box pr="1rem">
							<Mui.Typography>{String(props.forkCount)}</Mui.Typography>
						</Mui.Box>
						{props.licenseInfo && (
							<Mui.Box pr="1rem">
								<Mui.Typography>{props.licenseInfo?.name}</Mui.Typography>
							</Mui.Box>
						)}
						<Mui.Box pr="1rem">
							<Mui.Typography>{lastUpdate}</Mui.Typography>
						</Mui.Box>
					</Mui.Box>
				</Mui.Box>
				<Mui.Box display="flex" alignItems="start" flexGrow="0" pt="0.5rem">
					<StarButton id={props.id} variant="outlined" />
				</Mui.Box>
			</Mui.Box>
			<Mui.Box display="block">
				<Mui.Divider light={false} />
			</Mui.Box>
		</Mui.Box>
	)
}
