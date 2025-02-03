import React from 'react';
import { TeamProvider } from './TeamContext';
import TeamList from './TeamList';
import AddTeamMember from './AddTeamMember';

const Exe3App = () => {
  return (
    <TeamProvider>
      <div>
        <h1>Exercise 3 - Team Management</h1>
        <AddTeamMember />
        <TeamList />
      </div>
    </TeamProvider>
  );
};

export default Exe3App;
