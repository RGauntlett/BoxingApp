import React from "react";

const TotalWorkOutContext = React.createContext({
  workOuts: [],

  addWorkOut: (workOut) => {},
  removeWorkOut: (id) => {},

  // pauseWorkout: () => {},
  // stopWorkout: () => {},
});

export default TotalWorkOutContext;
