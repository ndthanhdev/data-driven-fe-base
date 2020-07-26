import React from 'react'
import * as Mui from '@material-ui/core'
import * as Luxon from 'luxon'
import { ConnectedStarButton as StarButton } from '../StarButton'
import * as MuiIcon from '@material-ui/icons'
import { useToggleStar } from '../../hooks/useToggleStar'
import * as Operations from '../../graphql'
import * as MuiLab from '@material-ui/lab'

export type RepoRow = {
	id: string
	style: any
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

export const RepoRowSkeleton: React.FC = () => {
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
						<MuiLab.Skeleton width="30%" />
					</Mui.Link>

					<Mui.Box display="flex" flexWrap="no-wrap" my="2rem">
						<Mui.Box pr="1rem" width="15%">
							<Mui.Typography>
								<MuiLab.Skeleton />
							</Mui.Typography>
						</Mui.Box>
						<Mui.Box pr="1rem" width="15%">
							<Mui.Typography>
								<MuiLab.Skeleton />
							</Mui.Typography>
						</Mui.Box>
						<Mui.Box pr="1rem" width="15%">
							<Mui.Typography>
								<MuiLab.Skeleton />
							</Mui.Typography>
						</Mui.Box>
					</Mui.Box>
				</Mui.Box>
				<Mui.Box display="flex" alignItems="start" flexGrow="0" pt="0.5rem">
					<Mui.Button>
						<MuiLab.Skeleton width="5rem" height="3rem" />
					</Mui.Button>
				</Mui.Box>
			</Mui.Box>
			<Mui.Box display="block">
				<Mui.Divider light={false} />
			</Mui.Box>
		</Mui.Box>
	)
}

export const RepoRow: React.FC<RepoRow> = (props: RepoRow) => {
	const classes = useClasses()
	const { id, style } = props

	const { data } = Operations.useRepoRowQuery({
		variables: {
			id,
		},
	})

	const repo = data?.node?.__typename === 'Repository' ? data?.node : null

	const lastUpdate = React.useMemo(() => {
		return Luxon.DateTime.fromISO(repo?.updatedAt).toRelative()
	}, [repo?.updatedAt])

	if (!repo) {
		return <RepoRowSkeleton />
	}

	const primaryLangColor = repo?.primaryLanguage?.color
	const primaryLangName = repo?.primaryLanguage?.name

	const primaryLangBlock = primaryLangName && (
		<Mui.Box display="flex" pr="1rem">
			{primaryLangColor && (
				<MuiIcon.FiberManualRecord style={{ color: primaryLangColor }} />
			)}
			<Mui.Typography>{primaryLangName}</Mui.Typography>
		</Mui.Box>
	)

	return (
		<Mui.Box display="block" width="100%" mt="2rem" mb="1rem" style={style}>
			<Mui.Box
				display="flex"
				flexWrap="no-wrap"
				justifyContent="space-between"
				width="100%"
			>
				<Mui.Box display="block" pr="1rem" flexGrow="1">
					<Mui.Link variant="h4" href="/">
						{repo.name}
					</Mui.Link>

					<Mui.Box display="flex" flexWrap="no-wrap" my="2rem">
						{primaryLangBlock}
						<Mui.Box pr="1rem">
							<Mui.Typography>{String(repo.forkCount)}</Mui.Typography>
						</Mui.Box>
						{repo.licenseInfo && (
							<Mui.Box pr="1rem">
								<Mui.Typography>{repo.licenseInfo?.name}</Mui.Typography>
							</Mui.Box>
						)}
						<Mui.Box pr="1rem">
							<Mui.Typography>{lastUpdate}</Mui.Typography>
						</Mui.Box>
					</Mui.Box>
				</Mui.Box>
				<Mui.Box display="flex" alignItems="start" flexGrow="0" pt="0.5rem">
					{repo.id && <StarButton id={repo.id} variant="outlined" />}
				</Mui.Box>
			</Mui.Box>
			<Mui.Box display="block">
				<Mui.Divider light={false} />
			</Mui.Box>
		</Mui.Box>
	)
}
