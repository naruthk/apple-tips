/**
 * Returns a randomized value based on the specified maximum
 * @param max the maximum number allowed
 */
function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

export { getRandomInt };
