import { useReducer } from "react";
import TotalWorkOutContext from "./TotalWorkOut-context";

const defaultTotalWorkOutState = {
  workOuts: [],
};

const totalWorkOutReducer = (state, action) => {
  let updatedTotalWorkOut;
  if (action.type === "ADD_WorkOut") {
    action.workOut.id = "_" + Math.random().toString(36).substr(2, 9);
    updatedTotalWorkOut = state.workOuts.concat(action.workOut);
    return {
      workOuts: updatedTotalWorkOut,
    };
  }

  if (action.type === "REMOVE_WorkOut") {
    updatedTotalWorkOut = state.workOuts.filter(
      (workOut) => workOut.id !== action.id
    );
    return { workOuts: updatedTotalWorkOut };
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
