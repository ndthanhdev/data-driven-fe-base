import * as React from 'react'
import * as Mui from '@material-ui/core'
import * as UiComps from '../uiComps'
import { PagesSwitch } from './PagesSwitch'
import { HeaderBar } from '../widgets/HeaderBar'
import { Footer } from '../widgets/Footer'
import { BrowserRouter } from 'react-router-dom'
import * as Recoil from 'recoil'

const Theme = Mui.createMuiTheme({
	palette: {
		primary: {
			main: '#263238',
		},

		secondary: {
			main: '#00c853',
		},
	},
})

export const Shell: React.FC = () => {
	return (
		<Recoil.RecoilRoot>
			<Mui.ThemeProvider theme={Theme}>
				<BrowserRouter>
					<UiComps.VerticalLayout
						header={<HeaderBar />}
						content={<PagesSwitch />}
						footer={<Footer />}
					/>
				</BrowserRouter>
			</Mui.ThemeProvider>
		</Recoil.RecoilRoot>
	)
}
