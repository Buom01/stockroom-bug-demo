import createStore from 'stockroom/inline'
import StoreWorker from 'workerize-loader!./worker.store'
let store2 = createStore(new StoreWorker())
console.log(store2.subscribe) // undefined, WHY ?

let increment = store2.action('increment')
let patched = store2.action('patched')
store2.subscribe((text)=>{console.log("store2:",text)})

// Let's run a registered "increment" action in the worker.
// This will eventually log a state update to the console - `{ count: 1 }`
increment()
patched({_id:"2",destStore:2,data:{text:"Sample test text for store two"}})
