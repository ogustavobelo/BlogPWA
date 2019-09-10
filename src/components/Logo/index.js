import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from "./styled"


const Logo = () => {
    const { logo } = useStaticQuery(
        graphql`
            query {
                logo: file(relativePath: { eq: "fluxo-logo.png" }) {
                    childImageSharp {
                        fixed(width: 275) {
                            ...GatsbyImageSharpFixed
                        }

                        
                    }
                }
            }
        `
    )

    return <S.AvatarWrapper fixed={logo.childImageSharp.fixed} />
}

export default Logo