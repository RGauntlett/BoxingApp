import React, { useContext, useState } from "react";
import TotalWorkOutContext from "../../store/TotalWorkOut-context";

const CountDownTimer = (props) => {
  let initTime = props.customWorkOut[0].lengthOfRounds;
  let minutes = Math.floor(initTime);
  let seconds = (initTime * 60) % 60;
  // For the number of rounds add a round object to the rounds array
  const [[mins, secs], setTime] = useState([minutes, seconds]);
  console.log([mins, secs]);

  const [roundCounter, setRoundCounter] = useState(0);

  const newTimer = (x) => {
    minutes = Math.floor(props.customWorkOut[x].lengthOfRounds);
    seconds = (props.customWorkOut[x].lengthOfRounds * 60) % 60;
    setTime([minutes, seconds]);
  };

  const tick = () => {
    if (
      props.customWorkOut.length === roundCounter &&
      mins === 0 &&
      secs === 0
    ) {
      return <h3>End of WorkOut</h3>;
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

  return (
    <div>
      <h4>
        {mins}:{secs}
      </h4>
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
  console.log(roundsList);
  const totalRounds = roundsList.length;

  const [totalWorkOut, setTotalWorkOut] = useState(roundsList);
  const hasWorkOuts = totalWorkOut.length > 0;

  const removeRoundHandler = () => {
    let removedWorkOut = totalWorkOut.shift();
    setTotalWorkOut(totalWorkOut);
    console.log(totalWorkOut);
    console.log(removedWorkOut);
  };

  return (
    <div>
      <div>
        {hasWorkOuts && (
          <CountDownTimer
            customWorkOut={totalWorkOut}
            onRemove={removeRoundHandler}
          />
        )}
        {!hasWorkOuts && <p>Please Enter Workouts to Build Your Routine</p>}
      </div>
      <div>
        <h2>Round Type: </h2>
        {hasWorkOuts && <p>{totalWorkOut[0].type}</p>}
        {!hasWorkOuts && <p>No Workout Entered</p>}
      </div>
      <div>
        <h2>Length Of Round: </h2>
        {hasWorkOuts && <p>{totalWorkOut[0].lengthOfRounds}</p>}
        {!hasWorkOuts && <p>00:00</p>}
      </div>
      <div>
        <h2>Round:</h2>
        {hasWorkOuts && <p>1/{totalRounds}</p>}
        {!hasWorkOuts && <p>0/0</p>}
      </div>
    </div>
  );
};

export default CreateRoundsList;
