import {useEffect, useState, useRef } from 'react';
import { projectFirestore } from '../firebase/config'

export const useCollection = (collection, _query) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  const query = useRef(_query).current
  // const orderBy = useRef(_orderBy).current

  useEffect(() => {
    let ref = projectFirestore.collection(collection);

    if (query) {
      ref = ref.where(...query)
    }

    const unsub = ref.onSnapshot((snapshot) => {
      let results = [];
      snapshot.docs.forEach(doc => {
        results.push({ ...doc.data(), id: doc.id })
      })

      //update state withs
      setDocuments(results);
      setError(null)
    }, (error) => {
      console.log(error)
      setError('Coud not fetch data')
    })

    //unsubscribe on unmount
    return () => unsub()
  }, [collection, query])

  return { documents, error }
}