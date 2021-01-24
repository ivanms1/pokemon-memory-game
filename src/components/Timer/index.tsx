import React, { useState, useEffect } from "react";
import { Button, Text } from "@chakra-ui/react";

function sectostr(time: number) {
  return ~~(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + (time % 60);
}

function Timer() {
  const [timer, setTimer] = useState(600);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isStarted) {
      interval = setInterval(() => {
        if (timer > 0) {
          setTimer((prev) => prev - 1);
        } else {
          clearInterval(interval);
        }
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [timer, isStarted]);

  if (isStarted) {
    return <Text fontSize="2rem">{sectostr(timer)}</Text>;
  }

  return (
    <Button
      type="button"
      onClick={() => setIsStarted(true)}
      colorScheme="green"
    >
      Start Challenge
    </Button>
  );
}

export default Timer;
