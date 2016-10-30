// ES6 utility function written by Collin Schneider
let sharedStateObject = {}

function sharedState(newStateObject) {
  if (typeof newStateObject === 'object') {
    sharedStateObject = Object.assign({}, sharedStateObject, newStateObject)

    let event = new CustomEvent('sharedState', {
      detail: sharedStateObject
    })

    window.dispatchEvent(event)
  }

  return sharedStateObject
}

function attachSharedState(context) {
  window.addEventListener('sharedState', ({ detail }) => {
    if (typeof context === 'function') {
      context(detail)
    }
    else {
      context.setState(detail)
    }
  })
}

export { sharedState, attachSharedState }
