import React, { useState } from 'react';
import { useTeam } from './TeamContext';

const AddTeamMember = () => {
  const [memberName, setMemberName] = useState('');
  const { addTeamMember } = useTeam();

  const handleInputChange = (e) => {
    setMemberName(e.target.value);
  };

  const handleAddMember = () => {
    if (memberName.trim()) {
      addTeamMember(memberName);
      setMemberName('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={memberName}
        onChange={handleInputChange}
        placeholder="Enter team member name"
      />
      <button onClick={handleAddMember}>Add Team Member</button>
    </div>
  );
};

export default AddTeamMember;
