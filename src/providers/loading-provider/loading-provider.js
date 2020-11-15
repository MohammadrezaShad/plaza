import React, { useState } from 'react';

import LoadingContext from '../../context/loading-context';

const LoadingProvider = ({children}) => {
    const [loaded, setLoaded] = useState(false);
    const [reset,setReset]=useState(false)

    const loadedAction = () => {
        setLoaded(true);
        setReset(false)
    };
    
    const resetLoaded=()=>{
        setLoaded(false);
        setReset(true)
    }

   const toggleReset=()=>{
    setReset(!reset)
   }

  return (
      <LoadingContext.Provider value={{loaded,loadedAction,resetLoaded,toggleReset,reset}}>
          {children}
      </LoadingContext.Provider>
  )
};

export default LoadingProvider;