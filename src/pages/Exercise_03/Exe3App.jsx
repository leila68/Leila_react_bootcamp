import React from "react";
import { TeamProvider } from "./TeamContext";
import TeamList from "./TeamList";
import AddTeamMember from "./AddTeamMember";

const Exe3App = () => {
  return (
    <TeamProvider>
      <div className="App">
        <h1>Team Management App</h1>
        <AddTeamMember />
        <TeamList />
      </div>
    </TeamProvider>
  );
};

export default Exe3App;
