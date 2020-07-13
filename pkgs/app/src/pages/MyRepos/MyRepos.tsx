import * as React from 'react'
import * as Mui from '@material-ui/core'
import { RepoRow } from '../../widgets/RepoRow'
import { useFetchMyReposQuery } from '../../graphql'
import { GraphqlError } from '../../widgets/GraphqlError'

export const MyReposPage: React.FC = () => {
	const { loading, error, data } = useFetchMyReposQuery()
	let nodes = data?.viewer?.repositories?.nodes?.filter((c) => c)

	if (error) {
		return <GraphqlError error={error} />
	}

	return (
		<Mui.Box display="flex" flexWrap="wrap">
			{loading
				? 'loading'
				: error
				? 'error'
				: nodes?.map((c) => (
						<RepoRow
							key={String(c.id)}
							id={String(c.id)}
						/>
				  ))}
		</Mui.Box>
	)
}
