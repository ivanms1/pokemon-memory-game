import React, { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";
import { useAppDispatch, useAppState } from "../AppContext";

function sectostr(time: number) {
  return ~~(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + (time % 60);
}

function Timer() {
  const [timer, setTimer] = useState(600);
  const dispatch = useAppDispatch();
  const { status } = useAppState();

  useEffect(() => {
    let interval: any;
    if (status === "started") {
      interval = setInterval(() => {
        if (timer > 0) {
          setTimer((prev) => prev - 1);
        } else {
          dispatch({ type: "END" });
          clearInterval(interval);
        }
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [timer, status]);

  return <Text fontSize="2rem">{sectostr(timer)}</Text>;
}

export default Timer;
