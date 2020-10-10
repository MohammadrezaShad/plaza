import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

import Textbox from "../../../../../shared/textbox";

import { Wrapper } from "./search-box.styled";
import SearchResults from "./search-results";

const SearchBox = () => {
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
    if (e.target.value.length >= 2) {
      searchHandler(e.target.value);
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
      console.log('insideClick')
      return;
    }
    setVisible(false);
    console.log('outClick')
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <Wrapper onSubmit={buttonHandler}>
      <Textbox placeholder={t("searchboxPlaceholder")} icon="search" buttonCallback={buttonHandler} changeHandler={changeHandler} inputValue={term} reference={node} />
      {visible ? <SearchResults term={term} results={results} />:null}
    </Wrapper>
  );
};

export default SearchBox;
