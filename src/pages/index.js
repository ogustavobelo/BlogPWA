import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<PostItem
			slug="/about/"
			background="tomato"
			category="misc"
			date="04 de Setembro de 2019"
			timeToRead="5"
			title="Primeiro Artigo"
			description="Esse é só um artigo de teste para testar se o blog está funcionando"
		/>
	</Layout>
)

export default IndexPage
