import React from "react";
import PropTypes from "prop-types";

import { 
  StyledListWrapper, 
  StyledContainer 
} from "./product-list.styled";
import ProductNestedList from "./product-nested-list";

const ProductList = ({ options, show, depth, root }) => {
  return (
    <StyledContainer $show={show} root={root}>
      <StyledListWrapper $show={show} root={root} depth={depth}>
        {options.map((option) => (
          <ProductNestedList key={option.id} option={option} />
        ))}
      </StyledListWrapper>
    </StyledContainer>
  );
};

ProductList.propTypes = {
  options: PropTypes.array,
  show: PropTypes.bool,
  depth: PropTypes.number,
  root: PropTypes.bool,
};

export default React.memo(ProductList);
