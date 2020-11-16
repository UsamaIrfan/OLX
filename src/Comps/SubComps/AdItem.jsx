import React from 'react';
import '../../Styles/adItem.css';

function AdItem(props) {
   if ("placeholder" in props) {
      return (
         <div key={props.keyCheck} className="adItem">
            <div className="adItem__poster placeholder"></div>
            <div className="adItem__title placeholder"></div>
            <div className="adItem__tagline placeholder"></div>
            <div className="adItem__footer">
               <div className="adItem__location placeholder"></div>
               <div className="adItem__stamp placeholder"></div>
            </div>
         </div>
      )
   }
   return (
      <div className="adItem">
         
      </div>
   )
}

export default AdItem
