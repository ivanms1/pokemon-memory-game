import React from "react";
import { Image, Stack, Text } from "@chakra-ui/react";

interface PokemonProps {
  index: number;
  isGuessed: boolean;
}

function Pokemon({ isGuessed, index }: PokemonProps) {
  return (
    <Stack
      width={75}
      height={75}
      justifyContent="center"
      alignItems="center"
      borderRadius="50%"
      boxShadow="0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20)"
    >
      {isGuessed ? (
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`}
        />
      ) : (
        <Text>{index + 1}</Text>
      )}
    </Stack>
  );
}

export default Pokemon;
