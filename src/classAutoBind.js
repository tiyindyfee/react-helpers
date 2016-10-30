// ES6 utility function written by Collin Schneider
export default (context) => {
  for (let method of Object.getOwnPropertyNames(Object.getPrototypeOf(context))) {
    if (method !== 'constructor') {
      context[method] = context[method].bind(context)
    }
  }
}
