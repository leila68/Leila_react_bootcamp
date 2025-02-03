import React from 'react';
import { useTeam } from './TeamContext';

const TeamList = () => {
  const { teamMembers } = useTeam();

  return (
    <div>
      <h2>Team Members</h2>
      <ul>
        {teamMembers.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamList;
