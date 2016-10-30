// ES6 React utility function written by Collin Schneider
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

function attachSharedState(context, callback) {
  context.sharedStateEventHandler = ({ detail }) => {
    if (typeof callback === 'function') {
      callback(detail)
    }
    else {
      context.setState(detail)
    }
  }

  window.addEventListener('sharedState', context.sharedStateEventHandler)
}

function detachSharedState(context) {
  window.removeEventListener('sharedState', context.sharedStateEventHandler)
}

export { sharedState, attachSharedState, detachSharedState }
