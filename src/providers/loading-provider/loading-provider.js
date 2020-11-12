import React, { useState } from 'react';

import LoadingContext from '../../context/loading-context';

const LoadingProvider = ({children}) => {
    const [loaded, setLoaded] = useState(false);


    const loadedAction = (a) => {
        console.log(a)
        setLoaded(true);
    };
    
    const resetLoaded=()=>{
        console.log('callR')
        setLoaded(false);
    }

  return (
      <LoadingContext.Provider value={{loaded,loadedAction,resetLoaded}}>
          {children}
      </LoadingContext.Provider>
  )
};

export default LoadingProvider;