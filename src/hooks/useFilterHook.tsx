import { useState } from "react";

/**
 * A custom hook for storing and handling the state for an array of selected categories
 * @param defaultValue An array to be initialized as the default value
 */
const useFilterHook = (defaultValue: string[]) => {
  const [selectedCategories, setSelectedCategories] = useState(defaultValue);

  return {
    selectedCategories,
    setSelectedCategories
  };
};

export default useFilterHook;
