import styled from 'styled-components'
import media from 'styled-media-query'
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const MenuBarWrapper = styled.aside`
    align-items: center;
    background: var(--mediumBackground);
    border-left: 1px solid var(--borders);
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    padding: 0.8rem 0;
    position: fixed;
    right: 0;    
    width: 3.75rem;

    ${media.lessThan("large")`
        border-top: 1px solid var(--borders);
        height: auto;
        width: 100%;
        padding: 1rem 2rem;
		flex-direction: row;
        bottom: 0;
        position: fixed;
    `}
`
export const MenuBarGroup = styled.div`
    display: flex;
    flex-direction: column;

    ${media.lessThan("large")`
		flex-direction: row;
        height: 2rem;
        align-items: center;
    `}
`
export const MenuBarLink = styled(AniLink)`
    display: block;
`
export const MenuBarItem = styled.span`
    color: var(--texts);
    cursor: pointer;
    display: block;
    height: 3.75rem;
    width: 3.75rem;
    padding: 1.1rem;
    position: relative;
    transition: color 0.5s;

    ${media.lessThan("large")`
        justify-content: center;
        padding: 0.75rem;
    `}

    &.light {
        color: #ffff3a;

        &:hover {
            color: #e3e240;
        }
    }

    &:hover {
      color: var(--highlight);
    }
`