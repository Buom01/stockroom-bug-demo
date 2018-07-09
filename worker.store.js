import createStore from 'stockroom/worker'
import {dynamicSort} from "./sort"

const sortById = dynamicSort("_id")


let store = createStore({
  count: 0,
  documents: []
})

store.registerActions( store => ({
  increment: ({ count }) => ({ count: count+1 }),
  patched: (state,newDocument) => {
    // console.log("updating",JSON.stringify(newDocument))
    var documents = state.documents.slice().filter(thisDocument => {return thisDocument._id != newDocument._id})
    documents.push(Object.assign({}, newDocument))
    documents = documents.sort(sortById);
    // console.log("resulting",JSON.stringify(documents))
    return {documents};
  }
}) )

export default store  // if you wish to use `stockroom/inline`
