import { useState } from "react";

import { PUBLISHED_CATEGORIES } from "../constants";

const useFilterHook = (defaultValue: string[]) => {
  const [selectedCategories, setSelectedCategories] = useState(defaultValue);

  return {
    availableCategories: PUBLISHED_CATEGORIES,
    selectedCategories,
    setSelectedCategories
  };
};

export default useFilterHook;
