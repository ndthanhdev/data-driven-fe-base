import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider as AP } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { getAuthorization } from '../services/auth'

const client = new ApolloClient({
	uri: 'https://api.github.com/graphql',
	cache: new InMemoryCache(),
	request: (operation) => {
		operation.setContext({
			headers: {
				authorization: getAuthorization(),
			},
		})
	},
})

export const ApolloProvider: React.FC = (props) => {
	return <AP client={client}>{props.children}</AP>
}
