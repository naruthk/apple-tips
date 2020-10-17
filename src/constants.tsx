/**
 * Supported categories
 * @enum {string}
 */
const CollectionCategories: { [char: string]: string } = {
  all: "All",
  ios: "iOS",
  ipados: "iPadOS",
  macos: "macOS"
};

/**
 * An array of currently active categories.
 */
const PUBLISHED_CATEGORIES = [
  CollectionCategories.ios,
  CollectionCategories.ipados,
  CollectionCategories.macos
];

export { PUBLISHED_CATEGORIES, CollectionCategories };
