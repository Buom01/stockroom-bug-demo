import createStore from 'stockroom/inline'

let store2 = createStore(require('./worker.store').default)

let increment = store2.action('increment')
let patched = store2.action('patched')
store2.subscribe((text)=>{console.log("store2 inline:",text)})

// Let's run a registered "increment" action in the worker.
// This will eventually log a state update to the console - `{ count: 1 }`
increment()
patched({_id:"2",destStore:2,data:{text:"Sample test text for store two"}})
