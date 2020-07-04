import * as React from 'react'
import * as Mui from '@material-ui/core'
import * as UiComps from '../uiComps'
import { PagesSwitch } from './PagesSwitch'
import { HeaderBar } from '../widgets/HeaderBar'
import { Footer } from '../widgets/Footer'
import { BrowserRouter } from 'react-router-dom'

export const Shell: React.FC = () => {
	return (
		<BrowserRouter>
			<UiComps.VerticalLayout
				header={<HeaderBar />}
				content={<PagesSwitch />}
				footer={<Footer />}
			/>
		</BrowserRouter>
	)
}
