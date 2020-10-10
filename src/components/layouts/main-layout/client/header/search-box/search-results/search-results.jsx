import React from 'react'
import PropTypes from 'prop-types'

import {
    Wrapper,
    Container
} from './search-results.styled'
import EmptyResult from './empty-result'

const SearchResults = ({results,term}) => {
    return (
        <Wrapper>
            <Container>
                <EmptyResult />
            </Container>
        </Wrapper>
    )
}

SearchResults.propTypes = {

}

export default SearchResults
