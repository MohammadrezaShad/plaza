import React, { useState } from 'react';

import DrawerContext from '../../context/drawer-context';

const DrawerProvider = ({children}) => {
    const [showDrawer, setShowDrawer] = useState(false);

    const toggleDrawer = () => {
      setShowDrawer(!showDrawer);
    };
  
  return (
      <DrawerContext.Provider value={{showDrawer,toggleDrawer}}>
          {children}
      </DrawerContext.Provider>

  )
};

export default DrawerProvider;