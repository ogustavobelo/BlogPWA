import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'
import Logo from '../Logo'
import * as S from './styled'
import getThemeColor from '../../utils/getThemeColor'


const Profile = () => {
	const {
		site: {
			siteMetadata: {
				title, position, description }
		}
	} = useStaticQuery(graphql`
    query MySiteMetadata {
        site {
          siteMetadata {
            author
            title
            position
            description
          }
        }
      }
      
    `)

	return (
		<S.ProfileWrapper>
			<S.ProfileLink paintDrip duration={0.5} hex={getThemeColor()} to='/'>
				<Logo />
				{/* <Avatar /> */}
				{/* <S.ProfileAuthor> 
					{title}
					<S.ProfilePosition>{position}</S.ProfilePosition>
				</S.ProfileAuthor> */}
			</S.ProfileLink>
			<S.ProfileDescription> {description} </S.ProfileDescription>
		</S.ProfileWrapper>
	)
}



export default Profile