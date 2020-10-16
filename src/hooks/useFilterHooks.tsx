import { useState } from "react";

import { PUBLISHED_CATEGORIES, CATEGORIES_ENUM } from "../constants";


const useFilterHooks = () => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES_ENUM.ALL);

  return {
    availableCategories: PUBLISHED_CATEGORIES,
    selectedCategory,
    setSelectedCategory
  }
};

export default useFilterHooks;
