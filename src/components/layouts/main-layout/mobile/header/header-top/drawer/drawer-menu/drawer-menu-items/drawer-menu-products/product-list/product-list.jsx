import React from "react";
import PropTypes from "prop-types";

import { StyledListWrapper } from "./product-list.styled";
import ProductNestedList from "./product-nested-list";

const ProductList = ({ options, show, depth, root }) => {
  return (
    <StyledListWrapper $show={show} root={root} depth={depth}>
      {options.map((option) => (
        <ProductNestedList key={option.id} option={option} />
      ))}
    </StyledListWrapper>
  );
};

ProductList.propTypes = {
  options:PropTypes.array,
  show:PropTypes.bool,
  depth:PropTypes.number,
  root:PropTypes.bool
};

export default ProductList;
