/**
 * Supported categories
 * @enum {string}
 */
const COLLECTION_CATEGORIES: { [char: string]: string } = {
  ALL: "All",
  IOS: "iOS",
  IPADOS: "iPadOS",
  MACOS: "macOS"
};

/**
 * An array of currently active categories.
 */
const PUBLISHED_CATEGORIES = [
  COLLECTION_CATEGORIES.IOS,
  COLLECTION_CATEGORIES.IPADOS,
  COLLECTION_CATEGORIES.MACOS
];

export { PUBLISHED_CATEGORIES, COLLECTION_CATEGORIES };
