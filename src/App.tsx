import React, { useState } from "react";
import { Box, Grid, HStack, Text } from "@chakra-ui/react";

import Pokemon from "./components/Pokemon";
import Timer from "./components/Timer";

import pokemons from "./assets/pokemon.json";
import Input from "./components/Input";

function App() {
  const [guessedPokemon, setGuessedPokemon] = useState<string[]>([]);

  return (
    <Box padding="2rem" bgColor="#f4f4f4" minHeight="100vh">
      <HStack alignItems="center" mb="1rem">
        <Input
          guessedPokemon={guessedPokemon}
          setGuessedPokemon={setGuessedPokemon}
        />
        <Timer />
        <Text fontSize="1.8rem">{guessedPokemon.length}/151</Text>
      </HStack>
      <Grid templateColumns="repeat(17, 1fr)" gap="1rem">
        {pokemons.map((pokemon, index) => (
          <Pokemon
            key={`${pokemon}-${index}`}
            index={index}
            isGuessed={guessedPokemon.includes(pokemon)}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default App;
