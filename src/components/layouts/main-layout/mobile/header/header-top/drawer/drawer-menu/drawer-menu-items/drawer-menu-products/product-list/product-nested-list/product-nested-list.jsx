import React , { useState } from "react";
import PropTypes from "prop-types";


import {StyledWrapper} from './product-nested-list.styled'
import ProductItem from "../product-item";
import ProductList from "../product-list";

const ProductNestedList = ({ option:{id,name,subOptions,depth} }) => {
  const [show, setShow] = useState(false);
  const showToggle = () => {
    if (subOptions.length) {
        setShow(!show);
    }
    return;
  };

  return (
    <StyledWrapper $show={show} key={id} >
      <ProductItem show={show} label={name} 
      subOptions={subOptions.length} 
      showToggle={showToggle} />
      {
      subOptions.length > 0 
      && <ProductList options={subOptions} 
      show={show} 
      depth={depth + 1} />
      }
    </StyledWrapper>
  );
};

ProductNestedList.propTypes = {
    id:PropTypes.number,
    name:PropTypes.string,
    subOptions:PropTypes.array,
    depth:PropTypes.number
};

export default ProductNestedList;
