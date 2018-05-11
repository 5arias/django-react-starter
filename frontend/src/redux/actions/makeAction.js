/*
 * Generates action creators to reduce boilerplate
 * https://redux.js.org/recipes/reducing-boilerplate#generating-action-creators
 */

export const makeAction = (type, ...argNames) => {
  return (...args) => {
    let action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}
