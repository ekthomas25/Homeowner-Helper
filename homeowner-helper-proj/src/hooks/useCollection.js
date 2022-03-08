import {useEffect, useState } from 'react';
import { projectFirestore } from '../firebase/config'

export const useCollection = (collection) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = projectFirestore.collection(collection);

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
  }, [collection])

  return { documents, error }
}