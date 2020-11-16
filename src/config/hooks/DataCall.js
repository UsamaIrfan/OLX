import {useState, useEffect} from 'react';
import {projectFirestore} from  '../Firebase';

const DataCall = (collection) => {
   const [docs, setDocs] = useState(null);

   useEffect(() => {
      const unsub = projectFirestore.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
         let documents = [];
         snap.forEach(doc => {
            documents.push({...doc.data(), id: doc.id})
         })
         setDocs(documents);
      });

      return () => unsub();

   }, [collection])

   return {docs};
}

export default DataCall;