import React, { FC } from "react";

import { keySymbols } from "./constants";
import {
  StyledKeyboardContainer,
  StyledKeysListingContainer,
  StyledKeypadItem,
  StyledLeftEntity,
  StyledRightEntity
} from "./style";

interface KeyboardProps {
  keys: string[];
}

const Keyboard: FC<KeyboardProps> = ({ keys }) => (
  <StyledKeyboardContainer>
    <p>Run {keys && keys.length > 1 ? "shortcuts" : "the shortcut"}:</p>
    <StyledKeysListingContainer>
      {keys.map(key => {
        const symbol = keySymbols[key.toLowerCase()];

        return (
          <StyledKeypadItem>
            <StyledLeftEntity>{symbol}</StyledLeftEntity>
            <StyledRightEntity>{key}</StyledRightEntity>
          </StyledKeypadItem>
        );
      })}
    </StyledKeysListingContainer>
  </StyledKeyboardContainer>
);

export default Keyboard;
