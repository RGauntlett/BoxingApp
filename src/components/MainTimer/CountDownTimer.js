import React, { useContext, useState, useEffect } from "react";
import TotalWorkOutContext from "../../store/TotalWorkOut-context";
import ComboReader from "../ComboReader/ComboReader";
import styles from "./CountDownTimer.module.css";

const CountDownTimer = (props) => {
  const [customWorkOut, setCustomWorkOut] = useState(props.routine);
  const [roundTime, setRoundTime] = useState(
    customWorkOut[0].lengthOfRounds * 60
  );
  const [roundCounter, setRoundCounter] = useState(0);

  let endWorkOut = props.onEndWorkOut;

  useEffect(() => {
    const Tick = (roundTime) => {
      if (roundTime === 0 && roundCounter === customWorkOut.length - 1) {
        setRoundCounter(0);
        setRoundTime(customWorkOut[roundCounter].lengthOfRounds * 60);
      } else if (roundTime === 0) {
        setRoundCounter(roundCounter + 1);
        setRoundTime(customWorkOut[roundCounter].lengthOfRounds * 60);
      } else setRoundTime(roundTime - 1);
    };

    const timer = setTimeout(() => {
      Tick(roundTime);
    }, 1000);
    return () => clearTimeout(timer);
  }, [roundTime, customWorkOut, roundCounter, endWorkOut]);

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
                    {roundCounter + 1}/{customWorkOut.length}
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
  if (totalWorkOut.length === 0) {
    return <p>Please Enter Workouts to Build Your Routine</p>;
  } else
    return (
      <div>
        <div>
          {totalWorkOut.length > 0 && (
            <CountDownTimer
              routine={totalWorkOut}
              onEndWorkOut={endOfWorkOutHandler}
            />
          )}
        </div>
      </div>
    );
};

export default CreateRoundsList;
