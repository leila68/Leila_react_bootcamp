import React, { createContext, useState } from 'react';

const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [teamMembers, setTeamMembers] = useState([]);

  const addTeamMember = (name) => {
    setTeamMembers((prevMembers) => [...prevMembers, name]);
  };

  return (
    <TeamContext.Provider value={{ teamMembers, addTeamMember }}>
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = () => {
  return React.useContext(TeamContext);
};
