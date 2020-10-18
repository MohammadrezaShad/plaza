import React, { useState } from 'react';

import ProfileContext from '../../context/profile-context';

const ProfileProvider = ({children}) => {
    const [showProfile, setShowProfile] = useState(false);

    const toggleProfile = () => {
        setShowProfile(!showProfile);
    };
  
  return (
      <ProfileContext.Provider value={{showProfile,toggleProfile}}>
          {children}
      </ProfileContext.Provider>

  )
};

export default ProfileProvider;