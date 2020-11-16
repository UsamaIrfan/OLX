import React from 'react'
import '../Styles/Home.css';
import ProductBox from './ProductBox'
import footerImg from '../Images/Application/phone-app.webp';
import appstore from '../Images/Application/appstore_2x.webp';
import playstore from '../Images/Application/playstore_2x.webp';
import { useLocation } from 'react-router-dom';

function Home({catagories}) {

   const location = useLocation();
   const pathArray = location.pathname.split("/");

   return (
      <React.Fragment>
         <div className="banner">
              
         </div>
         <div className="home">
            <div className="home__container">
               {!catagories && <h3 className="adItem__heading">Fresh recommendations</h3>}
               {catagories && <h3 className="adItem__heading">{`${pathArray[2]} / ${pathArray[3]}`}</h3>}
               {!catagories && <ProductBox callCatagory="AllProducts"/>}
               {catagories && <ProductBox callCatagory={`Products/${pathArray[2]}/${pathArray[3]}`}/>}
               {/* {!catagories && <div className="home__loadMore">
                  <button>Load More</button>
               </div>} */}
            </div>
         </div>
         {!catagories && <div className="home__footerAd__container">
            <div className="home__footerAd">
               <div className="home__footerAd-image">
                  <img src={footerImg} alt="The olx app"/>
               </div>
               <div className="home__footerAd-text">
                  <h3 className="home__footerAd-textTitle">Try the OLX App</h3>
                  <p className="home__footerAd-textDesc">Buy, sell and find just about anything using the app on your mobile.</p>
               </div>
               <div className="home__vertLine"></div>
               <div className="home__footerAd-app">
                  <h3 className="home__footerAd-appTitle">
                     Get your app today
                  </h3>
                  <div className="home__footerAd-appImg">
                     <img src={appstore} alt=""/>
                     <img src={playstore} alt=""/>
                  </div>
               </div>
            </div>
         </div>}
      </React.Fragment>
   )
}

export default Home
