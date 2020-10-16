import { useState } from "react";

import { PUBLISHED_CATEGORIES, CATEGORIES_ENUM } from "../constants";

const useFilterHook = () => {
  const [selectedCategories, setSelectedCategories] = useState([CATEGORIES_ENUM.ALL]);

  return {
    availableCategories: PUBLISHED_CATEGORIES,
    selectedCategories,
    setSelectedCategories
  };
};

export default useFilterHook;
