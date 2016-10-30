# React Helpers
This is an _alpha_ version library of ES6 React helpers to get simple projects done faster. At this point the code quality isn't amazing and I'm missing tests. Just a quick library to solve a problem. Feel free to report issues, suggestions, or pull requests.

---

#### classAutoBind
The `classAutoBind` function automatically binds methods on the ES6 class to the `this` context. No more need to go through method by method to bind them.

**Example Usage:**

```javascript
import React, { Component } from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'

class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    classAutoBind(this)
    this.state = {
      works: true
    }
  }
  myMethod() {
    console.log(this.state.works)
  }
}
```

#### sharedState
The simple `sharedState` function lets you share state between components without needing to use or understand something like Redux. It is nowhere as powerful, well designed, and supported as Redux, but in simple apps it can work reasonably well.

**Example Usage:**

```javascript
import React, { Component } from 'react'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    classAutoBind(this)
    // optionally, set initial state to the shared state
    this.state = sharedState()
  }
  componentDidMount() {
    // update entire state
    attachSharedState(this)
    // OR use a callback for custom needs...
    //attachSharedState(this, (state) => {
      //console.log(state)
      // ...add custom this.setState call here
    //})
  }
  componentWillUnmount() {
    // unregister the shared state event listener
    detachSharedState(this)
  }
  render() {
    return <button onClick={() => sharedState({test:'Works!'})}>{this.state.test}</button>
  }
}
```
