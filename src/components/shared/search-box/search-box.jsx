import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import PropTypes from 'prop-types'

import { Wrapper } from "./search-box.styled";
import Textbox from "../form/textbox";
import SearchResults from "./search-results";

const SearchBox = ({mobile}) => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const node = useRef();

  const { t } = useTranslation();

  const buttonHandler = (e) => {
    e.preventDefault();
    alert(123);
  };

  const changeHandler = (e) => {
    setTerm(e.target.value);
    if(e.target.value.length==1){
     setVisible(false)
    }else if (e.target.value.length >= 2) {
      searchHandler(e.target.value);
      setVisible(true)

    }else {
      setVisible(true)
    }
  };

  const searchHandler = async (searchTerm) => {
    setLoading(true);
    try {
      const res = await axios.get("http://api.plaza.com/products/search/?pageSize=24&orderby=3");
      setLoading(false);
      setResults(res.data.p);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      setVisible(true);
      return;
    }
    setVisible(false);
  };
  
  useEffect(() => {
      if(term.length!==1){
        document.addEventListener("mousedown", handleClick);
      }    
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [term]);

  return (
    <Wrapper onSubmit={buttonHandler} mobile={mobile} >
      <Textbox placeholder={t("searchboxPlaceholder")} icon="search" buttonCallback={buttonHandler} onChange={changeHandler} value={term} reference={node} />
      {visible ? <SearchResults mobile={mobile} term={term} results={results} loading={loading} />:null}
    </Wrapper>
  );
};

SearchBox.prototype={
 mobile:PropTypes.bool
}

export default SearchBox;
