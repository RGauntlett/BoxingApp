import React, { useState, useEffect, useCallback, useMemo } from "react";
import styles from "./ComboReader.module.css";

const ComboReader = (timePerCombo) => {
  const ComboArray = useMemo(
    () => [
      { id: 1, combo: "1-2 pullback 2" },
      { id: 2, combo: "1-2-3-roll" },
      { id: 3, combo: "step in 1 reset 1-2-roll" },
      { id: 4, combo: "double 1-pivot" },
      { id: 5, combo: "jab high-jab low-step back" },
      { id: 6, combo: "1-3-roll" },
      { id: 7, combo: "1-left hook body" },
      { id: 8, combo: "6-3-slip left-3" },
      { id: 9, combo: "1-2-1" },
      { id: 10, combo: "slip-slip-roll-2" },
      { id: 11, combo: "1-2 to body-3-roll" },
      { id: 12, combo: "1-2-1-2-rip liver shot" },
      { id: 13, combo: "1-feint jab body-3" },
      { id: 14, combo: "2-pullback-6" },
      { id: 15, combo: "1-2-5-2-roll" },
      { id: 16, combo: "1-1-2-pivot out" },
      { id: 17, combo: "slap 3-liver shot" },
      { id: 18, combo: "block left-3" },
      { id: 19, combo: "block right-3-roll" },
      { id: 20, combo: "block liver-6-3-2" },
      { id: 21, combo: "1-slip right-2" },
      { id: 22, combo: "6-3-2-pivot" },
      { id: 23, combo: "slip-slip-step back-6" },
      { id: 24, combo: "1-2-roll-3" },
      { id: 25, combo: "1-3-liver shot-3" },
      { id: 26, combo: "1-1-2-3-4-1" },
    ],
    []
  );

  const [combo, setCombo] = useState(ComboArray[0].combo);

  let randomizer = useCallback(() => {
    setCombo(ComboArray[Math.floor(Math.random() * 26)].combo);
  }, [ComboArray]);

  useEffect(() => {
    const timer = setInterval(() => randomizer(), 6000);
    return () => clearInterval(timer);
  }, [combo, randomizer]);

  return <h2 className={styles.ComboReader}> {combo} </h2>;
};

export default ComboReader;
