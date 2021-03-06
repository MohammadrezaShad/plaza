import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { 
  Wrapper, 
  Container 
} from "./search-results.styled";
import EmptyResult from "./empty-result";
import LastSearches from "./last-searches";
import MostSearches from "./most-searches";
import ResultsList from "./results-list";
import MostSearchedTerms from "./most-searched-terms";

const SearchResults = ({ results, term, loading,mobile }) => {
  
  const renderSwitchCase = () => {
    if (loading) {
      return <div>Loading...</div>;
    } else if (results.length && term.length >= 2) {
      return (
        <Fragment>
          <ResultsList />
          <MostSearchedTerms />
        </Fragment>
      );
    } else if (!results.length && term.length >= 2) {
      return <EmptyResult />;
    } else {
      return (
        <Fragment>
          <LastSearches />
          <MostSearches />
        </Fragment>
      );
    }
  };

  return (
    <Wrapper mobile={mobile}>
      <Container mobile={mobile}>{renderSwitchCase()}</Container>
    </Wrapper>
  );
};

SearchResults.propTypes = {
  results: PropTypes.array,
  term: PropTypes.string,
  loading: PropTypes.bool,
  mobile:PropTypes.bool
};


export default SearchResults;
