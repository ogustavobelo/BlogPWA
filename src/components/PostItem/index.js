import React from 'react'
import propTypes from 'prop-types'

import * as S from './styled'
import getThemeColor from '../../utils/getThemeColor'


const PostItem = ({slug, background, category, date, timeToRead, title, description}) => {

    return (
        <S.PostItemLink paintDrip duration={0.5} hex={getThemeColor()} to={slug}>
            <S.PostItemWrapper>
                <S.PostItemTag background={background}> {category} </S.PostItemTag>
                <S.PostItemInfo>
                    <S.PostItemDate>{date} {timeToRead ? `- ${timeToRead} minutos de leitura` : '' } </S.PostItemDate>
                    <S.PostItemTitle> {title} </S.PostItemTitle>
                    <S.PostItemDescription> {description} </S.PostItemDescription>
                </S.PostItemInfo>
            </S.PostItemWrapper>
        </S.PostItemLink>
    )
}

PostItem.propTypes = {
    slug: propTypes.string.isRequired,
    background: propTypes.string,
    category: propTypes.string.isRequired,
    date: propTypes.string.isRequired,
    timeToRead: propTypes.string,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,

}

export default PostItem