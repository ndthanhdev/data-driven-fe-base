import React from 'react'
import { ApolloProvider } from './graphql/Client'
import * as Mui from '@material-ui/core'
import * as UiComps from './uiComps'
import { Shell } from './Shell'

export function App() {
	return (
		<ApolloProvider>
			<Mui.CssBaseline />
			<Shell />
		</ApolloProvider>
	)
}
