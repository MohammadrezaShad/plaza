import React, { useEffect, useState } from 'react';

import LoadingContext from '../../context/loading-context';

const LoadingProvider = ({children}) => {
    const [loaded, setLoaded] = useState(false);
    const [reset,setReset]=useState(true)

    const loadedAction = () => {
        setLoaded(true);
        setReset(false)
    };
    
    const resetLoaded=()=>{
        setLoaded(false);
        setReset(true)
    }

  return (
      <LoadingContext.Provider value={{loaded,loadedAction,resetLoaded,reset}}>
          {children}
      </LoadingContext.Provider>
  )
};

export default LoadingProvider;