import * as React from 'react'
import * as Mui from '@material-ui/core'
import { RepoRow, RepoRowSkeleton } from '../../widgets/RepoRow'
import * as Operations from '../../graphql'
import { GraphqlError } from '../../widgets/GraphqlError'
import produce from 'immer'
import * as R from 'ramda'
import { FixedSizeList } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'

export const Skeleton: React.FC = () => {
	return (
		<>
			<RepoRowSkeleton />
			<RepoRowSkeleton />
			<RepoRowSkeleton />
			<RepoRowSkeleton />
		</>
	)
}

type RowProps = {
	data: string[]

	index: number
	style: any
}
const RowRenderer: React.FC<RowProps> = ({ data, index, style }) => {
	const id = data[index]
	return <RepoRow key={id} id={id} style={style} />
}

export const MyReposPage: React.FC = () => {
	const { loading, error, data, fetchMore } = Operations.useFetchMyReposQuery(
		{},
	)
	const pageInfo = React.useRef<
		Pick<Operations.PageInfo, 'startCursor' | 'endCursor'>
	>()

	pageInfo.current = data?.viewer.repositories.pageInfo

	React.useEffect(() => {
		setTimeout(() => {
			fetchMore({
				updateQuery: (prev, { fetchMoreResult }) => {
					if (!fetchMoreResult) return prev

					return produce(prev, (draft) => {
						draft.viewer.repositories.pageInfo.endCursor =
							fetchMoreResult.viewer.repositories.pageInfo.endCursor

						if (fetchMoreResult.viewer.repositories.nodes)
							draft.viewer.repositories.nodes?.push(
								...fetchMoreResult.viewer.repositories.nodes,
							)

						draft.viewer.repositories.nodes = R.uniqBy(
							(n) => n.id,
							draft.viewer.repositories.nodes ?? [],
						)
					})
				},
				variables: {
					after: pageInfo.current?.endCursor,
				},
			})
		}, 3000)
	}, [])

	let nodes = data?.viewer?.repositories?.nodes?.filter((c) => c)

	const rows: string[] = nodes?.map((r) => String(r.id)) ?? []

	// if (loading) {
	// 	rows?.push(<Skeleton key="ske" />)
	// }

	if (error) {
		return <GraphqlError error={error} />
	}

	return (
		<Mui.Box display="flex" flexWrap="wrap">
			<AutoSizer disableHeight>
				{({ width }) => (
					<FixedSizeList
						width={width}
						height={1000}
						itemSize={180}
						itemData={rows}
						itemCount={rows.length}
					>
						{RowRenderer}
					</FixedSizeList>
				)}
			</AutoSizer>
		</Mui.Box>
	)
}
