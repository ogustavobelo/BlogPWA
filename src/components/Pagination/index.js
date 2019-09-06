import React from 'react'
import propTypes from 'prop-types'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import getThemeColor from '../../utils/getThemeColor'


import * as S from './styled'

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
    <S.PaginationWrapper>
        {!isFirst && 
            <AniLink cover direction="left" duration={1} bg={getThemeColor()} to={prevPage}> Página Anterior </AniLink>
        }

        <p>{currentPage} de {numPages}</p>

        {!isLast && 
            <AniLink cover direction="right" duration={1} bg={getThemeColor()} to={nextPage}> Próxima Página </AniLink>
        }
    </S.PaginationWrapper>
)

Pagination.propTypes = {
    isFirst: propTypes.bool.isRequired,
    isLast: propTypes.bool.isRequired,
    currentPage: propTypes.number.isRequired,
    numPages: propTypes.number.isRequired,
    prevPage: propTypes.string,
    nextPage: propTypes.string,
}

export default Pagination