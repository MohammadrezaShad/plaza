import React, { useEffect } from "react";
import PropTypes from "prop-types";

const UseLoad = (devices, loadedAction, resetLoaded, loaded) => {
  const loadHandler = (devices) => {
    if (loaded) {
      resetLoaded();
    }
    devices.map((device) => {
      return device
        .load()
        .then(() => {
          loadedAction();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  useEffect(() => {
    loadHandler(devices);
  }, []);

  return [loadHandler];
};


export default UseLoad;