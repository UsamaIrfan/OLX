import React, { useState } from 'react';
import '../Styles/Product.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {useStateValue} from '../config/StateProvider';
import {motion} from 'framer-motion';

function Product({ id , image , price , desc , featured , timeStamp , location }) {

   function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   }

   const [liked, setLiked] = useState(true)
   const [{user}] = useStateValue();
   const [error, setError] = useState(false)

   const errorToggle = () => {
      if (!error) {
         setError(true)
      }
   }

   const likeUnlike = () => {
      if (liked) {
         setLiked(false)
      } else {
         setLiked(true)
      }
   }

   return (
      <div className="product">
         <div className="product__top">
            <div className="product__image">
               <img src={image} alt="Test"/>
            </div>
            <div className="product__info featured">
               <h3 className="product__price">{numberWithCommas(price)}</h3>
               <p className="product__desc">{desc}</p>
            </div>
         </div>
         <div className="product__bottom">
            <div className="product__meta featured">
               <span className="product__location">{location}</span>
               <span className="product__timeStamp">{timeStamp}</span>
            </div>
            {featured && <div className="featured">
               <div className="featured__border"></div>
               <span className="featured__text">Featured</span>
            </div>}
         </div>
         <button onClick={user ? likeUnlike : errorToggle } className="product__like">
            {liked && <FavoriteBorderIcon className="product__like-icon" />}
            {!liked && <FavoriteIcon className="product__like-icon" />}
         </button>
         {error && <motion.div className="product__loginErr" 
            initial={{
               position: "fixed",
               y: "10px",
               opacity: 1
            }}
            transition={{delay: 2}}
            animate={{
               opacity: 1,
               position: "fixed",
               y: "-200px",
            }}
         >
            <div className="error__text">
               <p style={{color: "red"}}>Login Required</p>
               <p>Please login to add products to liked products</p>
            </div>
         </motion.div>}
      </div>
   )
}

export default Product
