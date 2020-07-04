import ApolloClient from 'apollo-boost'
import { ApolloProvider as AP } from '@apollo/react-hooks'
import React from 'react'

const client = new ApolloClient({
	uri: 'https://countries-274616.ew.r.appspot.com/',
})

export const ApolloProvider: React.FC = (props) => {
	return <AP client={client}>{props.children}</AP>
}
