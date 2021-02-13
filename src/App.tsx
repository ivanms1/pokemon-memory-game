import React, { useState } from "react";
import { Box, Button, Grid, HStack, Stack, Text } from "@chakra-ui/react";

import Pokemon from "./components/Pokemon";
import Timer from "./components/Timer";
import Input from "./components/Input";

import { useAppDispatch, useAppState } from "./components/AppContext";

import pokemons from "./assets/pokemon.json";

function App() {
  const { guessedItems, status } = useAppState();
  const dispatch = useAppDispatch();

  return (
    <Box padding="2rem" bgColor="#f4f4f4" minHeight="100vh">
      <HStack alignItems="center" mb="1rem">
        <Input guessedPokemon={guessedItems} />
        <Timer />
        <Text fontSize="1.8rem">{guessedItems.length}/151</Text>
      </HStack>
      {(status === "started" || status === "finished") && (
        <Grid templateColumns="repeat(17, 1fr)" gap="1rem">
          {pokemons.map((pokemon, index) => (
            <Pokemon
              key={`${pokemon}-${index}`}
              index={index}
              isGuessed={guessedItems.includes(pokemon)}
            />
          ))}
        </Grid>
      )}
      {status === "not-started" && (
        <Button
          type="button"
          colorScheme="green"
          onClick={() => dispatch({ type: "START" })}
        >
          Start Challenge
        </Button>
      )}
    </Box>
  );
}

export default App;
