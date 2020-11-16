import React, {useEffect} from 'react';
import useStorage from '../../config/hooks/useStorage';
import {useStateValue} from '../../config/StateProvider';
import '../../Styles/ProgressBar.css'
import {motion} from 'framer-motion';

function ProgressBar({file, setfile}) {

   const [, dispatch] = useStateValue();
   const {url, progress} = useStorage(file)

   useEffect(() => {
      if (url) {
         dispatch({
            type: "UPDATE_REG_PROD_IMAGE",
            url: url
         })
         setfile(null)
      }
   }, [url])

   return (
      <motion.div className="progressBar"
         initial={{width: 0}}
         animate={{width: progress + "%"}}
      >  
      </motion.div>
   )
}

export default ProgressBar
