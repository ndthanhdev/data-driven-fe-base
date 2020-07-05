import * as React from 'react'
import * as Mui from '@material-ui/core'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { AllNationsPage } from '../pages/AllNations'
import { RegionsPage } from '../pages/Regions'
import { MyReposPage } from '../pages/MyRepos'
import { AuthorizePage } from '../pages/Authorize'
import { NotFoundPage } from '../pages/NotFound'

export const PagesSwitch: React.FC = () => {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<MyReposPage />
				</Route>
				<Route exact path="/my-repos">
					<MyReposPage />
				</Route>
				<Route exact path="/authorize">
					<AuthorizePage />
				</Route>
				<Route exact path="*">
					<NotFoundPage />
				</Route>
			</Switch>
		</>
	)
}
