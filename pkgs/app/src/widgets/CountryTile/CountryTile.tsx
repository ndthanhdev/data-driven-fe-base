import React from 'react'
import { useCountryTileQuery } from '../../graphql/hooks'
import * as Mui from '@material-ui/core'

export type CountryTile = {
	id: string
	flagUrl: string
	name: string
	capital: string
}

const useClasses = Mui.makeStyles({
	flagContainer: {
		height: '10rem',
		width: '20rem',
	},
})

export const CountryTile: React.FC<CountryTile> = (props: CountryTile) => {
	const { id } = props

	const classes = useClasses()

	return (
		<Mui.Box display="block" width="20rem" height="15rem" margin="2rem">
			<Mui.Card>
				<Mui.CardActionArea>
					<Mui.CardMedia
						image={props.flagUrl}
						className={classes.flagContainer}
					/>
					<Mui.CardContent>
						<Mui.Typography gutterBottom variant="h5" component="h2">
							{props.name}
						</Mui.Typography>
						<Mui.Typography variant="body2" color="textSecondary" component="p">
							{props.capital}
						</Mui.Typography>
					</Mui.CardContent>
				</Mui.CardActionArea>
			</Mui.Card>
			{/* <div>{firstMatch?.name}</div> */}
		</Mui.Box>
	)
}
