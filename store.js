import createStore from 'stockroom/inline'
import StoreWorker from 'workerize-loader!./worker.store'
let store = createStore(new StoreWorker())
console.log(store.subscribe) // undefined, WHY ?

let increment = store.action('increment')
let patched = store.action('patched')
store.subscribe((text)=>{console.log("store1:",text)})

// Let's run a registered "increment" action in the worker.
// This will eventually log a state update to the console - `{ count: 1 }`
increment()
patched({_id:"1",destStore:1,data:{text:"Sample test text for store one"}})
