import * as React from 'react'
import * as Mui from '@material-ui/core'
import { useFetchRegionsPageQuery } from './operations'

type Region = {
	_id: string
	name: string
	subRegions: {
		_id: string
		name: string
	}[]
}

const Region: React.FC<Region> = (props) => {
	return (
		<>
			<Mui.Typography variant="h2">{props.name}</Mui.Typography>
			{props.subRegions.map((sub) => (
				<Mui.Typography key={String(sub._id)} variant="h4">
					{sub.name}
				</Mui.Typography>
			))}
		</>
	)
}

export const RegionsPage: React.FC = () => {
	const { data, loading } = useFetchRegionsPageQuery()

	const regions = data?.regions

	if (loading || !regions) {
		return <>loading</>
	}

	return (
		<>
			{regions.map((r, index) => (
				<React.Fragment key={String(r?._id)}>
					<Region
						_id={String(r?._id)}
						name={String(r?.name)}
						subRegions={r?.subregions || []}
					/>
					{index < regions.length - 1 && <Mui.Divider />}
				</React.Fragment>
			))}
		</>
	)
}
