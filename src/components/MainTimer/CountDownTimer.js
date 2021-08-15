import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router";
import TotalWorkOutContext from "../../store/TotalWorkOut-context";
import ComboReader from "../ComboReader/ComboReader";
import styles from "./CountDownTimer.module.css";

const CountDownTimer = (props) => {
  const [customWorkOut, setCustomWorkOut] = useState(props.routine);
  const [roundTime, setRoundTime] = useState(
    customWorkOut[0].lengthOfRounds * 60
  );
  const [roundCounter, setRoundCounter] = useState(0);

  let minutes = Math.floor(roundTime);
  let seconds = (roundTime * 60) % 60;
  // For the number of rounds add a round object to the rounds array
  // const [[mins, secs], setTime] = useState([minutes, seconds]);
  // const [roundCounter, setRoundCounter] = useState(0);

  // const tick = (timerId) => {
  //   if (customWorkOut.length === roundCounter && mins === 0 && secs === 0) {
  //     clearInterval(timerId);
  //     return <Redirect to="/Home" />;
  //   } else if (mins === 0 && secs === 0) {
  //     setRoundCounter(roundCounter + 1);
  //     newTimer(roundCounter + 1);
  //   } else if (secs === 0) {
  //     setTime([mins - 1, 59]);
  //   } else {
  //     setTime([mins, secs - 1]);
  //   }
  // };

  // React.useEffect(() => {
  //   const timerId = setInterval(() => tick(timerId), 1000);
  //   return () => clearInterval(timerId);
  // });

  // const newTimer = (roundCounter) => {
  //   minutes = Math.floor(customWorkOut[roundCounter].lengthOfRounds);
  //   seconds = (customWorkOut[roundCounter].lengthOfRounds * 60) % 60;
  //   setTime([minutes, seconds]);
  // };

  useEffect(() => {
    const timer = setTimeout(() => {
      Tick(roundTime);
    }, 1000);
    return () => clearTimeout(timer);
  }, [roundTime]);

  const Tick = (roundTime) => {
    if (roundTime === 0) {
      setRoundCounter(roundCounter + 1);
      setRoundTime(customWorkOut[roundCounter].lengthOfRounds * 60);
      setCustomWorkOut([]);
    } else setRoundTime(roundTime - 1);
  };

  return (
    <div>
      {!customWorkOut.length > 0 && (
        <p>Please Enter Workouts to Build Your Routine</p>
      )}
      {customWorkOut.length !== 0 && (
        <div>
          {customWorkOut[roundCounter].type === "Guided ShadowBoxing" && (
            <div className={styles.ComboReader}>
              <ComboReader timePerCombo={{ seconds: 1000 }} />
            </div>
          )}

          {customWorkOut.length > 0 && (
            <div>
              <div className={styles.Timer}>
                <p>
                  {Math.floor(roundTime / 60)
                    .toString()
                    .padStart(2, "0")}
                  :{(roundTime % 60).toString().padStart(2, "0")}
                </p>
              </div>
              <div className={styles.RoundContent}>
                <div className={styles.RoundType}>
                  <h2>Round Type: </h2>
                  <p>{customWorkOut[roundCounter].type}</p>
                </div>
                <div className={styles.LengthReader}>
                  <h2>Length Of Round: </h2>
                  <p>{customWorkOut[roundCounter].lengthOfRounds}</p>
                </div>
                <div className={styles.RoundCounter}>
                  <h2>Round:</h2>
                  <p>
                    {0 + 1}/{customWorkOut.length}
                  </p>
                </div>
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
