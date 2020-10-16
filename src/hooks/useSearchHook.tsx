import { useState } from "react";

const DEFAULT_PLACEHOLDER = "Search for tips and tricks";

const useSearchHook = () => {
  const [inputValue, setInputValue] = useState(DEFAULT_PLACEHOLDER);

  return {
    DEFAULT_PLACEHOLDER,
    inputValue,
    setInputValue
  };
};

export default useSearchHook;
