import React, { FC } from "react";

import { StyledContainer, StyledShortcutItem } from "./style";

interface CommandKeysProps {
  keys: string[];
}

const CommandKeys: FC<CommandKeysProps> = ({ keys }) => {
  return (
    <StyledContainer>
      <p>Run the shortcut:</p>
      <ul>
        {keys.map(key => <StyledShortcutItem>{key}</StyledShortcutItem>)}
      </ul>
    </StyledContainer>
  );
}

export default CommandKeys;
