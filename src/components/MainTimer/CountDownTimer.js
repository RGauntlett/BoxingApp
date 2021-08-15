import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import TotalWorkOutContext from "../../store/TotalWorkOut-context";
import ComboReader from "../ComboReader/ComboReader";

const CountDownTimer = (props) => {
  const customWorkOut = props.routine;

  let minutes = Math.floor(customWorkOut[0].lengthOfRounds);
  let seconds = (customWorkOut[0].lengthOfRounds * 60) % 60;
  // For the number of rounds add a round object to the rounds array
  const [[mins, secs], setTime] = useState([minutes, seconds]);
  const [roundCounter, setRoundCounter] = useState(0);

  const tick = () => {
    if (customWorkOut.length === roundCounter && mins === 0 && secs === 0) {
      newTimer(0);
    } else if (mins === 0 && secs === 0) {
      setRoundCounter(roundCounter + 1);
      newTimer(roundCounter + 1);
    } else if (secs === 0) {
      setTime([mins - 1, 59]);
    } else {
      setTime([mins, secs - 1]);
    }
  };

  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  const newTimer = (roundCounter) => {
    if (roundCounter === 0) {
      props.onEndWorkOut();

      return <Redirect to="Home" />;
    } else {
      minutes = Math.floor(customWorkOut[roundCounter].lengthOfRounds);
      seconds = (customWorkOut[roundCounter].lengthOfRounds * 60) % 60;
      setTime([minutes, seconds]);
    }
  };

  return (
    <div>
      {!customWorkOut.length > 0 && (
        <p>Please Enter Workouts to Build Your Routine</p>
      )}
      {customWorkOut.length !== roundCounter && (
        <div>
          {customWorkOut[roundCounter].type === "Guided ShadowBoxing" && (
            <ComboReader timePerCombo={{ seconds: 1000 }} />
          )}

          {customWorkOut.length > 0 && (
            <div>
              <h4>
                {`${mins.toString().padStart(2, "0")}:${secs
                  .toString()
                  .padStart(2, "0")}`}
              </h4>

              <div>
                <h2>Round Type: </h2>
                <p>{customWorkOut[roundCounter].type}</p>
              </div>
              <div>
                <h2>Length Of Round: </h2>
                <p>{customWorkOut[roundCounter].lengthOfRounds}</p>
              </div>
              <div>
                <h2>Round:</h2>
                <p>
                  {roundCounter + 1}/{customWorkOut.length}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const CreateRoundsList = () => {
  const workOutCtx = useContext(TotalWorkOutContext);

  // Create array of rounds
  let roundsList = [];
  // Iterate over context objects
  workOutCtx.workOuts.forEach((workOut) => {
    for (let i = 0; i < workOut.amount; i++) {
      roundsList.push({
        type: workOut.type,
        lengthOfRounds: workOut.lengthOfRounds,
      });
    }
  });

  const [totalWorkOut, setTotalWorkOut] = useState(roundsList);

  const endOfWorkOutHandler = () => {
    setTotalWorkOut([]);
  };

  return (
    <div>
      <div>
        {totalWorkOut.length > 0 && (
          <CountDownTimer
            routine={totalWorkOut}
            onEndWorkOut={endOfWorkOutHandler}
          />
        )}
        {totalWorkOut.length === 0 && (
          <p>Please Enter Workouts to Build Your Routine</p>
        )}
      </div>
    </div>
  );
};

export default CreateRoundsList;
