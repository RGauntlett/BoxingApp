import { useReducer } from "react";
import TotalWorkOutContext from "./TotalWorkOut-context";

const defaultTotalWorkOutState = {
  workOuts: [],
};

const totalWorkOutReducer = (state, action) => {
  let updatedTotalWorkOut;
  if (action.type === "ADD_WorkOut") {
    updatedTotalWorkOut = state.workOuts.concat(action.workOut);
    return {
      workOuts: updatedTotalWorkOut,
    };
  }

  if (action.type === "REMOVE_WorkOut") {
    const existingWorkOutIndex = state.workOuts.findIndex(
      (workOut) => workOut.id === action.id
    );
    // const existingWorkOut = state.workOuts(existingWorkOutIndex);
  }
};

const TotalWorkOutProvider = (props) => {
  const [totalWorkOutState, discpatchTotalWorkOutAction] = useReducer(
    totalWorkOutReducer,
    defaultTotalWorkOutState
  );

  const addWorkOutHandler = (workOut) => {
    discpatchTotalWorkOutAction({ type: "ADD_WorkOut", workOut: workOut });
  };

  const removeWorkOutHandler = (id) => {
    discpatchTotalWorkOutAction({ type: "REMOVE_WorkOut", id: id });
  };

  const totalWorkOutContext = {
    workOuts: totalWorkOutState.workOuts,
    addWorkOut: addWorkOutHandler,
    removeWorkOut: removeWorkOutHandler,
  };

  return (
    <TotalWorkOutContext.Provider value={totalWorkOutContext}>
      {props.children}
    </TotalWorkOutContext.Provider>
  );
};

export default TotalWorkOutProvider;
