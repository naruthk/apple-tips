/**
 * Supported categories
 * @enum {string}
 */
const CollectionCategories: { [char: string]: string } = {
  all: "All",
  ios: "iOS",
  ipados: "iPadOS",
  macos: "macOS",
  watchos: "watchOS"
};

/**
 * An array of currently active categories.
 */
const PUBLISHED_CATEGORIES = [
  CollectionCategories.ios,
  CollectionCategories.ipados,
  CollectionCategories.macos,
  CollectionCategories.watchos
];

export { PUBLISHED_CATEGORIES, CollectionCategories };
