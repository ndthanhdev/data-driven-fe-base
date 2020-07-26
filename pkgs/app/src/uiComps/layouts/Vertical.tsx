import * as React from 'react'
import * as Mui from '@material-ui/core'

export type VerticalLayout = {
	header?: React.ReactChild
	content?: React.ReactNode
	footer?: React.ReactNode
}

const useClasses = Mui.makeStyles({})

interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window
	children: React.ReactElement
}

function HideOnScroll(props: Props) {
	const { children, window } = props
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = Mui.useScrollTrigger({
		target: window ? window() : undefined,
	})

	return (
		<Mui.Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Mui.Slide>
	)
}

export const VerticalLayout: React.FC<VerticalLayout> = (props) => {
	return (
		<Mui.Box width="100%">
			<HideOnScroll {...props}>
				<Mui.AppBar>
					<Mui.Toolbar>{props.header ?? 'Scroll to Hide App Bar'}</Mui.Toolbar>
				</Mui.AppBar>
			</HideOnScroll>
			<Mui.Toolbar />
			<Mui.Container maxWidth="lg">{props.content ?? ''}</Mui.Container>
			<Mui.Divider />
			<Mui.Box width="100%">{props.footer}</Mui.Box>
		</Mui.Box>
	)
}
