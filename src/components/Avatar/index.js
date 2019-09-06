import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from "./styled"


const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: { eq: "image_profile.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 60) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }

                        
                    }
                }
            }
        `
    )

    return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
}

export default Avatar