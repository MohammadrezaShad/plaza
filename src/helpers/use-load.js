import React, { useEffect } from "react";
import PropTypes from "prop-types";

const useLoad = (devices, loadedAction, resetLoaded, loaded) => {
  const loadHandler = (devices) => {
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
    if(loaded){
      resetLoaded()
    }
    loadHandler(devices);
  }, []);

  return [loadHandler];
};


export default useLoad;