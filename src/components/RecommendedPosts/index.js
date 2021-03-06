import React from 'react'
import propTypes from 'prop-types'

import * as S from './styled'

import getThemeColor from '../../utils/getThemeColor'


const RecommendedPosts = ({ next, previous }) => (
    <S.RecommendedWrapper>
        { previous && (
            <S.RecommendedLink cover direction="left" duration={1} bg={getThemeColor()}  to={previous.fields.slug} className="previous" >
                {previous.frontmatter.title}
            </S.RecommendedLink>
        )}
        { next && (
            <S.RecommendedLink  cover direction="right" duration={1} bg={getThemeColor()}  to={next.fields.slug} className="next" >
                {next.frontmatter.title}
            </S.RecommendedLink>
        )}
    </S.RecommendedWrapper>
)

RecommendedPosts.propTypes = {
    next: propTypes.shape({
      frontmatter: propTypes.shape({
        title: propTypes.string.isRequired,
      }),
      fields: propTypes.shape({
        slug: propTypes.string.isRequired,
      }),
    }),
    previous: propTypes.shape({
      frontmatter: propTypes.shape({
        title: propTypes.string.isRequired,
      }),
      fields: propTypes.shape({
        slug: propTypes.string.isRequired,
      }),
    }),
  }

export default RecommendedPosts