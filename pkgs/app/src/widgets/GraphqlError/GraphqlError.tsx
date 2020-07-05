import * as React from 'react'
import * as Mui from '@material-ui/core'
import { ApolloError } from 'apollo-boost'
import { Redirect } from 'react-router-dom'

type GraphqlError = {
	error: ApolloError
}

export const GraphqlError: React.FC<GraphqlError> = (props) => {
	if (!props.error.graphQLErrors.length) {
		return <Redirect to="/authorize" />
	}

	return <>{props.error.message}</>
}
