import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const useScrollRequest = (gap, stopCondtion, loadData) => {
  const [elementInView, setElementInView] = useState(false);
  const [timeOutId, setTimeOutId] = useState(null);
  const [element, setElement] = useState(null);

  const elementGrabber = (el) => {
    setElement(el);
  };
  const windowScrollHandler = () => {
    if (isInViewport(element) && !elementInView) {
      setElementInView(true);
    } else if (!isInViewport(element) && elementInView) {
      setElementInView(false);
    }
  };
  const isInViewport = (el) => {
    if (el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    } else return false;
  };

  const loadProduct = () =>
    setTimeout(() => {
      console.log("time Call");
      loadData();
      setTimeOutId(null);
    }, gap);

  useEffect(() => {
    if (elementInView && !timeOutId && !stopCondtion) {
      setTimeOutId(loadProduct());
    }
    if (!elementInView && timeOutId) {
      clearTimeout(timeOutId);
      setTimeOutId(null);
    }
    window.addEventListener("scroll", windowScrollHandler);
    return () => {
      window.removeEventListener("scroll", windowScrollHandler);
    };
  }, [element, elementInView, stopCondtion]);

  return [elementInView, elementGrabber];
};

useScrollRequest.prototype = {
  element: PropTypes.node.isRequired,
  gap: PropTypes.number.isRequired,
  stopCondtion: PropTypes.bool.isRequired,
  loadData: PropTypes.func.isRequired,
};

export default useScrollRequest;
