import * as React from 'react'
import * as Operations from '../graphql'

export function useToggleStar(starableId: string, currentIsStared: boolean) {
	const isStared = React.useRef(currentIsStared)

	const [addStar] = Operations.useAddStarMutation({
		variables: {
			id: starableId,
		},
	})

	const [removeStar] = Operations.useRemoveStarMutation({
		variables: {
			id: starableId,
		},
	})

	return React.useCallback(async () => {
		if (isStared.current) {
			return await removeStar()
		}

		return await addStar()
	}, [])
}
