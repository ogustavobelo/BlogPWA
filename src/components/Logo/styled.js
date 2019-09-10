import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image' 

export const AvatarWrapper  = styled(Img)`
    height: auto;
    margin: auto;
    width: 90%;

    ${media.lessThan("large")`
        height: 2rem;
        width: auto;
    `}
`