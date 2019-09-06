import React from "react"
import PropTypes from "prop-types"
import Sidebar from "../Sidebar"
import MenuBar from '../MenuBar'
import { TransitionPortal } from "gatsby-plugin-transition-link"

import GlobalStyles from '../../styles/global'
import * as S from './styled'



const Layout = ({ children }) => {
	return (
		<S.LayoutWrapper>
			<GlobalStyles />
			<TransitionPortal level="top">
				<Sidebar />
			</TransitionPortal>
			<S.LayoutMain>
				{children}
			</S.LayoutMain>
			<MenuBar />
		</ S.LayoutWrapper>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
