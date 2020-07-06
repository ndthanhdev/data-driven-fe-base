import * as React from 'react'
import * as Mui from '@material-ui/core'
import * as UiComps from '../uiComps'
import { PagesSwitch } from './PagesSwitch'
import { HeaderBar } from '../widgets/HeaderBar'
import { Footer } from '../widgets/Footer'
import { BrowserRouter } from 'react-router-dom'

const Theme = Mui.createMuiTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#263238',
		},
		secondary: {
			main: '#00e676',
		},
	},
})

export const Shell: React.FC = () => {
	return (
		<Mui.ThemeProvider theme={Theme}>
			<BrowserRouter>
				<UiComps.VerticalLayout
					header={<HeaderBar />}
					content={<PagesSwitch />}
					footer={<Footer />}
				/>
			</BrowserRouter>
		</Mui.ThemeProvider>
	)
}
