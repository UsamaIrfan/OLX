import React, {useState} from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import '../../Styles/HeaderCatagories.css';
import { Link } from 'react-router-dom';
import {useStateValue} from '../../config/StateProvider';
import {useHistory} from 'react-router-dom';

function HeaderCatagories() {

   const [showClass, setshowClass] = useState("allCats__container hidden");
   const [arrowClass, setArrowClass] = useState("allCats__arrow down")
   const [, dispatch] = useStateValue();
   const history = useHistory();

   const catRedirect = (e) => {
      setshowClass("allCats__container hidden")
      dispatch({
         type: "SET_ATTRIBUTES",
          catagory: {cat: e.target.parentElement.parentElement.parentElement.childNodes[0].innerText, subCat: e.target.innerText}
         }
      )
      history.push("/catagories/" + e.target.parentElement.parentElement.parentElement.childNodes[0].innerText+"/"+e.target.innerText);
   }

   const classToggle = () => {
      if (showClass === "allCats__container hidden") {
         setshowClass("allCats__container show")
      } else {
         setshowClass("allCats__container hidden")
      }
      if (arrowClass === "allCats__arrow down") {
         setArrowClass("allCats__arrow up") 
      } else {
         setArrowClass("allCats__arrow down") 
      }
   }

   const navCats = [
      {id: "Mobile/Mobile Phones", label: "Mobile Phones"},
      {id: "Vehicles/Cars", label: "Cars"},
      {id: "Bikes/Motorcycles", label: "Motorcycles"},
      {id: "Property for Sale/Houses", label: "Houses"},
      {id: "Electronics & Home Appliances/TV - Video - Audio", label: "TV-Video-Audio"},
      {id: "Mobile/Tablets", label: "Tablets"},
      {id: "Property for Sale/Land & Plots", label: "Land & Plots"},
   ]

   return (
      <div className="catagories">
         <button onClick={classToggle} className="cats__all">
            <span className="cats__allText">All Catagories</span>
            <KeyboardArrowDownIcon className={arrowClass} style={{ fontSize: 30 }} />
         </button>
         {
            navCats.map((item, i) => {
               return (
                  <Link onClick={(e) => {history.push("/catagories/"+item.id)}} key={i} className="cats__catLinks" >{item.label}</Link>
               )
            })
         }
         <div className={showClass}>
            <div className="allCats__list-container">
               <div className="allCats__list-wrapper">
                  <span className="allCats__title">Vehicles</span>
                  <ul className="allCats__list">
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Tractors & Trailers</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Boats</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Other Vehicles</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Rickshaw & Chingchi</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Buses, Vans & Trucks</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Spare Parts</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Cars Accessories</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Cars on Installments</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Cars</Link>
                     </li>
                  </ul>
               </div>
               <div className="allCats__list-wrapper">
                  <span className="allCats__title">Mobile</span>
                  <ul className="allCats__list">
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Mobile Phones</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Accessories</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Tablets</Link>
                     </li>
                  </ul>
               </div>
               <div className="allCats__list-wrapper">
                  <span className="allCats__title">Electronics & Home Appliances</span>
                  <ul className="allCats__list">
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Washing Machines & Dryers</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Fridges & Freezers</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">AC & Coolers</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Kitchen Appliances</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Generators, UPS & Power Solutions</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Other Home Appliances</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Games & Entertainment</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Cameras & Accessories</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">TV - Video - Audio</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Computers & Accessories</Link>
                     </li>
                  </ul>
               </div>
               <div className="allCats__list-wrapper">
                  <span className="allCats__title">Property for sale</span>
                  <ul className="allCats__list">
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Portions & Floors</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Shops - Offices - Commercial Space</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Apartments & Flats</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Houses</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Land & Plots</Link>
                     </li>
                  </ul>
               </div>
               <div className="allCats__list-wrapper">
                  <span className="allCats__title">Animals</span>
                  <ul className="allCats__list">
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Other Animals</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Pet Food & Accessories</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Horses</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Livestock</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Dogs</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Cats</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Hens & Aseel</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Birds</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Fish & Aquariums</Link>
                     </li>
                  </ul>
               </div>
               <div className="allCats__list-wrapper">
                  <span className="allCats__title">Furniture & Home Decor</span>
                  <ul className="allCats__list">
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Other Household Items</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Office Furniture</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Curtains & Blinds</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Rugs & Carpets</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Painting & Mirrors</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Garden & Outdoor</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Tables & Dining</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Home Decoration</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Beds & Wardrobes</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Sofa & Chairs</Link>
                     </li>
                  </ul>
               </div>
               <div className="allCats__list-wrapper">
                  <span className="allCats__title">Business, Industrial & Agriculture</span>
                  <ul className="allCats__list">
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Medical & Pharma</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Other Business & Industry</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Agriculture</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Construction & Heavy Machinery</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Trade & Industrial</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Food & Restaurants</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Business for Sale</Link>
                     </li>
                  </ul>
               </div>
               <div className="allCats__list-wrapper">
                  <span className="allCats__title">Bikes</span>
                  <ul className="allCats__list">
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Scooters</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">ATV & Quads</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Bicycles</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Spare Parts</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Motorcycles</Link>
                     </li>
                  </ul>
               </div>
               <div className="allCats__list-wrapper">
                  <span className="allCats__title">Fashion & Beauty</span>
                  <ul className="allCats__list">
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Other Fashion</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Couture</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Lawn & Pret</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Wedding</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Watches</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Skin & Hair</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Make Up</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Jewellery</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Footwear</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Clothes</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Accessories</Link>
                     </li>
                  </ul>
               </div>
               <div className="allCats__list-wrapper">
                  <span className="allCats__title">Property for Rent</span>
                  <ul className="allCats__list">
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Land & Plots</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Vacation Rentals - Guest Houses</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Roommates & Paying Guests</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Rooms</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Shops - Offices - Commercial Space</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Portions & Floors</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Apartments & Flats</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Houses</Link>
                     </li>
                  </ul>
               </div>
               <div className="allCats__list-wrapper">
                  <span className="allCats__title">Jobs</span>
                  <ul className="allCats__list">
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Other Jobs</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Part - Time</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Domestic Staff</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Medical</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Manufacturing</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Accounting & Finance</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Human Resources</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Clerical & Administration</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">IT & Networking</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Sales</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Customer Service</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Advertising & PR</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Education</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Marketing</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Online</Link>
                     </li>
                  </ul>
               </div>
               <div className="allCats__list-wrapper">
                  <span className="allCats__title">Services</span>
                  <ul className="allCats__list">
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Farm & Fresh Food</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Catering & Restaurant</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Home & Office Repair</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Movers & Packers</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Maids & Domestic Help</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Health & Beauty</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Event Services</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Electronics & Computer Repair</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Web Development</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Drivers & Taxi</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Car Rental</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Travel & Visa</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Education & Classes</Link>
                     </li>
                  </ul>
               </div>
               <div className="allCats__list-wrapper">
                  <span className="allCats__title">Books, Sports & Hobbies</span>
                  <ul className="allCats__list">
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Other Hobbies</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Gym & Fitness</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Sports Equipment</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Musical Instruments</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Books & Magazines</Link>
                     </li>
                  </ul>
               </div>
               <div className="allCats__list-wrapper">
                  <span className="allCats__title">Kids</span>
                  <ul className="allCats__list">
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Kids Accessories</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Kids Bikes</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Swings & Slides</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Prams & Walkers</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Toys</Link>
                     </li>
                     <li>
                        <Link onClick={catRedirect} className="allCats__listItem">Kids Furniture</Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeaderCatagories
