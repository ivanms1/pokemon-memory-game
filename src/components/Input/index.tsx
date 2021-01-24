import React, { useState } from "react";
import { Input as ChakraInput } from "@chakra-ui/react";

import pokemons from "../../assets/pokemon.json";

interface InputProps {
  guessedPokemon: string[];
  setGuessedPokemon: (pokemons: string[]) => void;
}

function Input({ guessedPokemon, setGuessedPokemon }: InputProps) {
  const [input, setInput] = useState("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    if (pokemons.includes(value) && !guessedPokemon.includes(value)) {
      setGuessedPokemon([...guessedPokemon, value]);
      setInput("");
    }
  };
  return <ChakraInput value={input} onChange={handleInput} />;
}

export default Input;
