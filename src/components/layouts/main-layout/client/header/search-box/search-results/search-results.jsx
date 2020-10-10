import React from 'react'
import PropTypes from 'prop-types'

import {
    Wrapper,
    Container
} from './search-results.styled'
import EmptyResult from './empty-result'
import LastSearches from './last-searches'
import MostSearches from './most-searches'
import ResultsList from './results-list'

const SearchResults = ({results,term}) => {
    return (
        <Wrapper>
            <Container>
                <ResultsList />
                <LastSearches />
                <MostSearches />
                <EmptyResult />
            </Container>
        </Wrapper>
    )
}

SearchResults.propTypes = {

}

export default SearchResults
