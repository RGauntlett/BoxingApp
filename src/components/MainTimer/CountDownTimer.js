import React, { useContext, useState } from "react";
import TotalWorkOutContext from "../../store/TotalWorkOut-context";
import ComboReader from "../ComboReader/ComboReader";
import styles from "./CountDownTimer.module.css";
import Modal from "../UI/Modal";
import PageButton from "../UI/PageButton";
import useSound from "use-sound";
import BoxingTimerSfx from "../../Assets/BoxingTimerBell.mp3";
import Ding from "../../Assets/Ding.wav";

const CountDownTimer = (props) => {
  const customWorkOut = props.routine;
  const [roundTime, setRoundTime] = useState(
    customWorkOut[0].lengthOfRounds * 60
  );
  const [restTime, setRestTime] = useState(customWorkOut[0].rest * 60);
  const [roundCounter, setRoundCounter] = useState(0);
  const [appIsPaused, setAppIsPaused] = useState(false);
  const [splitRoundTimer, setSplitRoundTimer] = useState(
    customWorkOut[0].lengthOfRounds * 60
  );

  const pauseHandler = () => {
    setAppIsPaused(true);
  };

  const resumeHandler = () => {
    setAppIsPaused(false);
  };

  const Tick = ([roundTime, restTime]) => {
    if (appIsPaused === true) {
      return roundTime;
    } else if (
      roundTime === 0 &&
      restTime === 0 &&
      roundCounter === customWorkOut.length - 1
    ) {
      setRoundCounter(0);
      setRoundTime(customWorkOut[roundCounter].lengthOfRounds * 60);
      setRestTime(customWorkOut[roundCounter].rest * 60);
    } else if (roundTime === 0 && restTime === 0) {
      setRoundCounter(roundCounter + 1);
      setRoundTime(customWorkOut[roundCounter].lengthOfRounds * 60);
      setRestTime(customWorkOut[roundCounter].rest * 60);
      setSplitRoundTimer(customWorkOut[roundCounter].lengthOfRounds * 60);
    } else if (roundTime === 0) {
      setRestTime(restTime - 1);
    } else setRoundTime(roundTime - 1);
  };

  const [playRoundStartFinish] = useSound(BoxingTimerSfx, { volume: 0.25 });
  const [playDing] = useSound(Ding, { volume: 0.25 });

  if (roundTime === 3 || restTime === 3) {
    playDing();
  } else if (roundTime === 2 || restTime === 2) {
    playDing();
  } else if (roundTime === 1 || restTime === 1) {
    playDing();
    setTimeout(() => playRoundStartFinish(), 1000);
  }

  if (customWorkOut[roundCounter].type === "Split Rounds") {
    if (splitRoundTimer / 2 === roundTime) {
      playDing();
    }
  }

  setTimeout(() => Tick([roundTime, restTime]), 1000);

  return (
    <div>
      {appIsPaused && <Modal onResume={resumeHandler} />}
      {!customWorkOut.length > 0 && (
        <p>Please Enter Workouts to Build Your Routine</p>
      )}
      {customWorkOut.length !== 0 && (
        <div>
          {customWorkOut[roundCounter].type === "Guided Shadow Boxing" && (
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
                  <p>
                    {Math.floor(
                      (customWorkOut[roundCounter].lengthOfRounds * 60) / 60
                    )
                      .toString()
                      .padStart(2, "0")}
                    :
                    {((customWorkOut[roundCounter].lengthOfRounds * 60) % 60)
                      .toString()
                      .padStart(2, "0")}
                  </p>
                </div>
                <div className={styles.RoundCounter}>
                  <h2>Round:</h2>
                  <p>
                    {roundCounter + 1}/{customWorkOut.length}
                  </p>
                </div>
                <div className={styles.RestTimer}>
                  <h2>Rest Timer:</h2>
                  <p>
                    {Math.floor(restTime / 60)
                      .toString()
                      .padStart(2, "0")}
                    :{(restTime % 60).toString().padStart(2, "0")}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}{" "}
      <div className={styles.PauseButton}>
        <PageButton onClick={pauseHandler}>Pause WorkOut</PageButton>
      </div>
    </div>
  );
};

const CreateRoundsList = (props) => {
  const workOutCtx = useContext(TotalWorkOutContext);

  // Create array of rounds
  let roundsList = [];
  // Iterate over context objects
  workOutCtx.workOuts.forEach((workOut) => {
    for (let i = 0; i < workOut.amount; i++) {
      roundsList.push({
        type: workOut.type,
        lengthOfRounds: workOut.lengthOfRounds,
        rest: workOut.rest,
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
