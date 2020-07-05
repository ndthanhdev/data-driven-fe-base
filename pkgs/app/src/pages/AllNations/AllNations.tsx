import * as React from 'react'
import * as Mui from '@material-ui/core'
import { CountryTile } from '../../widgets/CountryTile'
import { useAllNationsPageQuery } from '../../graphql'

export const AllNationsPage: React.FC = () => {
	const { loading, error, data } = useAllNationsPageQuery()
	let countries = data?.countries?.filter((c) => c)
	return (
		<Mui.Box display="flex" flexWrap="wrap">
			{loading
				? 'loading'
				: error
				? 'error'
				: countries?.map((c) => (
						<CountryTile
							key={String(c?._id)}
							id={String(c?._id)}
							name={String(c?.name)}
							capital={String(c?.capital)}
							flagUrl={String(c?.flag?.svgFile)}
						/>
				  ))}
		</Mui.Box>
	)
}
