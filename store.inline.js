import createStore from 'stockroom/inline'

let store = createStore(require('./worker.store').default)
console.log(store.subscribe) // defined as a function

let increment = store.action('increment')
let patched = store.action('patched')
store.subscribe((text)=>{console.log("store1 inline:",text)})

// Let's run a registered "increment" action in the worker.
// This will eventually log a state update to the console - `{ count: 1 }`
increment()
patched({_id:"1",destStore:1,data:{text:"Sample test text for store one"}})
