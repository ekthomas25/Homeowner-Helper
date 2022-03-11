import React, { useState } from 'react';
import { timestamp } from '../../firebase/config';
import { useDocument } from '../../hooks/useDocument';
import { useCollection } from '../../hooks/useCollection';
import { useParams } from 'react-router-dom';

export default function LogDetail({log}) {
  
  console.log("hey gurl")
  const { logs, id } = useParams();
  const {error, document } = useDocument('logs', id);
  const { documents  } = useCollection('tasks')
  // console.log(document)
  // if(error) {
  //   return <div className="error">{error}</div>
  // }

  // if (!task) {
  //   return <div className="loading">loading...</div>
  // }
  // console.log(document.logs)
  console.log(documents, id)
  console.log(document)
  return  (
    <div className="log-detail">
      <h2>Log Details</h2>
      {documents.map(doc => (<p key={doc}>{doc}</p>))}
    </div>
  )
}