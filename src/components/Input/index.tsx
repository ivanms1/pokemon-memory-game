import React, { useState } from "react";
import { Input as ChakraInput } from "@chakra-ui/react";

import pokemons from "../../assets/pokemon.json";
import { useAppDispatch } from "../AppContext";

interface InputProps {
  guessedPokemon: string[];
}

function Input({ guessedPokemon }: InputProps) {
  const [input, setInput] = useState("");

  const dispatch = useAppDispatch();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    const loweredCaseValue = value.toLowerCase();
    if (
      pokemons.includes(loweredCaseValue) &&
      !guessedPokemon.includes(loweredCaseValue)
    ) {
      dispatch({ type: "ADD_GUESSED_ITEM", payload: loweredCaseValue });
      setInput("");
    }
  };
  return <ChakraInput value={input} onChange={handleInput} />;
}

export default Input;
