import * as React from 'react'
import * as Mui from '@material-ui/core'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { AllNationsPage } from '../pages/AllNations'
import { RegionsPage } from '../pages/Regions'
import { NotFoundPage } from '../pages/NotFound'

export const PagesSwitch: React.FC = () => {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<AllNationsPage />
				</Route>
				<Route exact path="/all-nations">
					<AllNationsPage />
				</Route>
				<Route exact path="/regions">
					<RegionsPage />
				</Route>
				<Route exact path="*">
					<NotFoundPage />
				</Route>
			</Switch>
		</>
	)
}
