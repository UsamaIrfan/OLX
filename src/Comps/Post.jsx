import React, {useState} from 'react';
import '../Styles/Post.css';
import logo from '../Images/Application/OLX-logo.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useStateValue} from '../config/StateProvider';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {Link} from 'react-router-dom';

function Post() {

   const [subCats, setsubCats] = useState(null);
   const [, dispatch] = useStateValue();

   const subCatsToggler = e => {
      setsubCats(e.target.innerText)
   }

   const setpostAttr = (e) => {
      dispatch({
         type: "SET_ATTRIBUTES",
         catagory: {cat: subCats, subCat: e.target.innerText}
      })
   }

   return (
      <React.Fragment>
         <div className="post">
            <div className="post__nav-container">
               <nav className="post__nav">
               <Link to="/"><button className="post__navButton"><ArrowBackIcon className="post__navBack"/></button></Link>
                  <img className="post__navImg" src={logo} alt="OLX logo"/>
               </nav>
            </div>
            <div className="post__catagories">
               <h3>POST YOUR AD</h3>
               <div className="post__catagories-container">
                  <h3>Choose your Catagory</h3>
               </div>
               <div className="post__catagoriesList-container">
                  <ul className="post__list">
                     <li onClick={subCatsToggler} className="post__list-item"><span className="post__list-text">Mobile</span><ChevronRightIcon fontSize="large"/></li>
                     <li onClick={subCatsToggler} className="post__list-item"><span className="post__list-text">Vehicles</span><ChevronRightIcon fontSize="large"/></li>
                     <li onClick={subCatsToggler} className="post__list-item"><span className="post__list-text">Property for sale</span><ChevronRightIcon fontSize="large"/></li>
                     <li onClick={subCatsToggler} className="post__list-item"><span className="post__list-text">Property for Rent</span><ChevronRightIcon fontSize="large"/></li>
                     <li onClick={subCatsToggler} className="post__list-item"><span className="post__list-text">Electronics and Home Apliances</span><ChevronRightIcon fontSize="large"/></li>
                     <li onClick={subCatsToggler} className="post__list-item"><span className="post__list-text">Business, industrial & Agriculture</span><ChevronRightIcon fontSize="large"/></li>
                     <li onClick={subCatsToggler} className="post__list-item"><span className="post__list-text">Bikes</span><ChevronRightIcon fontSize="large"/></li>
                     <li onClick={subCatsToggler} className="post__list-item"><span className="post__list-text">Services</span><ChevronRightIcon fontSize="large"/></li>
                     <li onClick={subCatsToggler} className="post__list-item"><span className="post__list-text">Jobs</span><ChevronRightIcon fontSize="large"/></li>
                     <li onClick={subCatsToggler} className="post__list-item"><span className="post__list-text">Animals</span><ChevronRightIcon fontSize="large"/></li>
                     <li onClick={subCatsToggler} className="post__list-item"><span className="post__list-text">Furniture & Home Decor</span><ChevronRightIcon fontSize="large"/></li>
                     <li onClick={subCatsToggler} className="post__list-item"><span className="post__list-text">Fashion & Beauty</span><ChevronRightIcon fontSize="large"/></li>
                     <li onClick={subCatsToggler} className="post__list-item"><span className="post__list-text">Books, Sports & Hobbies</span><ChevronRightIcon fontSize="large"/></li>
                     <li onClick={subCatsToggler} className="post__list-item"><span className="post__list-text">Kids</span><ChevronRightIcon fontSize="large"/></li>
                  </ul>
                  {subCats === 'Mobile' && <ul className="post__list">
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Tablets</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Accessories</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Mobile Phones</span></li></Link>
                  </ul>}
                  {subCats === 'Vehicles' && <ul className="post__list">
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Cars</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Cars on Installments</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Cars Accessories</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Spare Parts</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Buses, Vans & Trucks</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Rickshaw & Chinchi</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Other Vehicles</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Boats</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Tractors & Trailors</span></li></Link>
                  </ul>}
                  {subCats === 'Property for sale' && <ul className="post__list">
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Lands & Plots</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Houses</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Apartments & Flats</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Shops - Offices - Commercials Space</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Portions & Floors</span></li></Link>
                  </ul>}
                  {subCats === 'Property for Rent' && <ul className="post__list">
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Houses</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Apartments & Flats</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Portions & Floors</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Shops - Offices - Commercial Space</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Rooms</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Roommates & Paying Guests</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Vacation Rentals - Guest Houses</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Land & Plots</span></li></Link>
                  </ul>}
                  {subCats === 'Electronics and Home Apliances' && <ul className="post__list">
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Computers & Accessories</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">TV - Video - Audio</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Cameras & Accessories</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Games & Entertainment</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Other Home Appliances</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Kitchen Appliances</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">AC & Coolers</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Fridges & Freezers</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Washing Machines & Dryers</span></li></Link>
                  </ul>}
                  {subCats === 'Business, industrial & Agriculture' && <ul className="post__list">
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Business for Sale</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Food & Restaurants</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Trade & Industrial</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Construction & Heavy Machinery</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Agriculture</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Other Business & Industry</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Medical & Pharma</span></li></Link>
                  </ul>}
                  {subCats === 'Bikes' && <ul className="post__list">
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Motorcycles</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Spare Parts</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Bicycles</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">ATV & Quads</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Scooters</span></li></Link>
                  </ul>}
                  {subCats === 'Services' && <ul className="post__list">
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Education & Classes</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Travel & Visa</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Car Rental</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Drivers & Taxi</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Web Development</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Other Services</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Electronics & Computer Repair</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Event Services</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Health & Beauty</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Maids & Domestic Help</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Movers & Packers</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Home & Office Repair</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Catering & Restaurant</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Farm & Fresh Food</span></li></Link>
                  </ul>}
                  {subCats === 'Jobs' && <ul className="post__list">
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Online</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Marketing</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Advertising & PR</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Education</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Customer Service</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Sales</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">IT & Networking</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Hotels & Tourism</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Clerical & Administration</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Human Resources</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Accounting & Finance</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Manufacturing</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Medical</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Domestic Staff</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Part - Time</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Other Jobs</span></li></Link>
                  </ul>}
                  {subCats === 'Animals' && <ul className="post__list">
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Fish & Aquariums</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Birds</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Hens & Aseel</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Cats</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Dogs</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Livestock</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Horses</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Pet Food & Accessories</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Other Animals</span></li></Link>
                  </ul>}
                  {subCats === 'Furniture & Home Decor' && <ul className="post__list">
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Sofa & Chairs</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Beds & Wardrobes</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Home Decoration</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Tables & Dining</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Garden & Outdoor</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Painting & Mirrors</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Rugs & Carpets</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Curtains & Blinds</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Office Furniture</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Other Household Items</span></li></Link>
                  </ul>}
                  {subCats === 'Fashion & Beauty' && <ul className="post__list list__bottom">
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Accessories</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Clothes</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Footwear</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Jewellery</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Skin & Hair</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Make Up</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Watches</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Wedding</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Lawn & Pret</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Couture</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Other Fashion</span></li></Link>
                  </ul>}
                  {subCats === 'Books, Sports & Hobbies' && <ul className="post__list list__bottom">
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Books & Magazines</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Musical Instruments</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Sports Equipment</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Gym & Fitness</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Other Hobbies</span></li></Link>
                  </ul>}
                  {subCats === 'Kids' && <ul className="post__list list__bottom">
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Kids Furniture</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Toys</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Prams & Walkers</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Swings & Slides</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Kids Bikes</span></li></Link>
                     <Link className="post__list-link" to="/post/attributes"><li onClick={setpostAttr} className="post__list-item"><span className="post__list-text">Kids Accessories</span></li></Link>
                  </ul>}
               </div>
            </div>
         </div>
         <div className="footer__bottom-container">
            <div className="footer__bottom">
               <div className="footer__bottomLeft">
                  <span className="footer__bold"></span>
               </div>
               <div className="footer__bottomRight">
                  <span className="footer__bold">Free Classifieds in Pakistan.</span>
                  <span> &copy; 2006-2020 OLX</span>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}

export default Post
