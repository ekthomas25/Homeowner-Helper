import { useReducer, useEffect, useState } from 'react';
import { projectAuth, timestamp } from '../firebase/config';

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return { error: null, isPending: true, document: null, success: null }
    case 'ADDED_DOCUMENT':
      return { error: null, isPending: false, document: action.payload, success: true }
    case 'ERROR':
      return { error: action.payload, isPending: false, document: null, success: false }
    default:
      return state
  }
}

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);
  

  // collection reference
  const ref = projectFirestore.collection(collection);

  //only dispatch if not cancelled
  const dispatchIfNotCancelled  = (action) => {
    if (!isCancelled) {
      dispatch(action)
    }
  }

  // add a document
  const addDocument = async (doc) => {
    dispatch({ type: 'IS_PENDING' });

    try {
      const createdAt = timestamp.fromDate(new Date());
      const addedDocument = await ref.add(...doc, createdAt);
      dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument });
    }
    catch {
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
    }
  }

  // delete a document
  const deleteDocument = async (id) => {

  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { addDocument, deleteDocument, response }
}