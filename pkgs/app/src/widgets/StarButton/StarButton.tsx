import * as React from 'react'
import * as Mui from '@material-ui/core'
import * as Operation from '../../graphql'
import * as MuiIcon from '@material-ui/icons'

type StarButton = {
	isStared: boolean
} & Omit<Mui.ButtonProps, 'startIcon'>

const useClasses = Mui.makeStyles({
	root: {
		textTransform: 'none',
	},
})

export const StarButton: React.FC<StarButton> = (props) => {
	const { isStared, ...otherProps } = props
	const icon = isStared ? <MuiIcon.Star /> : <MuiIcon.StarBorder />

	const classes = useClasses()

	return (
		<Mui.Button
			startIcon={icon}
			disableRipple
			className={classes.root}
			{...otherProps}
		>
			{props.isStared ? 'Unstar' : 'Star'}
		</Mui.Button>
	)
}

type ConnectedStarButton = {
	id: string
} & Omit<StarButton, 'isStared'>

function useStar(starableId: string) {
	const { data, refetch } = Operation.useIsStaredQuery({
		variables: {
			id: starableId,
		},
	})

	const node = React.useRef(data?.node)
	node.current = data?.node

	const [isStared, setIsStared] = React.useState(false)
	React.useEffect(() => {
		if (node.current?.__typename !== 'Repository') {
			setIsStared(false)
			return
		}

		setIsStared(node.current?.viewerHasStarred)
	}, [data])

	const [addStar] = Operation.useAddStarMutation({
		variables: {
			id: starableId,
			
		},
		
	})

	const [removeStar] = Operation.useRemoveStarMutation({
		variables: {
			id: starableId,
		},
	})

	const toggleStar = React.useCallback(async () => {
		if (node.current?.__typename !== 'Repository') {
			return
		}

		if (isStared) {
			await removeStar()
		} else {
			await addStar()
		}

		await refetch()
	}, [isStared])

	return {
		toggleStar,
		isStared,
	}
}

export const ConnectedStarButton: React.FC<ConnectedStarButton> = (props) => {
	const { id, ...otherProps } = props
	const { isStared, toggleStar } = useStar(props.id)

	return <StarButton isStared={isStared} onClick={toggleStar} {...otherProps} />
}
