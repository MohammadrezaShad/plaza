import React, { useState } from 'react';

import LoadingContext from '../../context/loading-context';

const LoadingProvider = ({children}) => {
    const [loaded, setLoaded] = useState(false);


    const loadedAction = () => {
        setLoaded(true);
    };
    
    const resetLoaded=()=>{
        setLoaded(false);
    }

  return (
      <LoadingContext.Provider value={{loaded,loadedAction,resetLoaded}}>
          {children}
      </LoadingContext.Provider>
  )
};

export default LoadingProvider;