import React, {useEffect, useState} from 'react';
import '../Styles/Footer.css';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import appstore from '../Images/Application/appstore_2x.webp';
import playstore from '../Images/Application/playstore_2x.webp';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

function Footer({only}) {

   const [mobile,setmobile] = useState(false);
   const [popularCatDisplay, setpopularCatDisplay] = useState(" footer__subList hidden");
   const [trendCatDisplay, settrendCatDisplay] = useState(" footer__sublist hidden");
   const [aboutCatDisplay, setaboutCatDisplay] = useState(" footer__sublist hidden");
   const [olxCatDisplay, setolxCatDisplay] = useState(" footer__sublist hidden")

   const olxCatToggle = () => {
      if (olxCatDisplay === " footer__subList hidden") {
         setolxCatDisplay(" footer__subList show")
      } else {
         setolxCatDisplay(" footer__subList hidden")
      }
   }

   const aboutCatToggle = () => {
      if (aboutCatDisplay === " footer__subList hidden") {
         setaboutCatDisplay(" footer__subList show")
      } else {
         setaboutCatDisplay(" footer__subList hidden")
      }
   }

   const popCatToggle = () => {
      if (popularCatDisplay === " footer__subList hidden") {
         setpopularCatDisplay(" footer__subList show")
      } else {
         setpopularCatDisplay(" footer__subList hidden")
      }
   }

   const trendCatToggle = () => {
      if (trendCatDisplay === " footer__subList hidden") {
         settrendCatDisplay(" footer__subList show")
      } else {
         settrendCatDisplay(" footer__subList hidden")
      }
   }

   const useStyles = makeStyles((theme) => ({
      root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
      },
      nested: {
        paddingLeft: theme.spacing(4),
      },
      subList: {
         width: '100%',
         backgroundColor: theme.palette.background.paper,
      }
    }));

   const classes = useStyles();

   useEffect(() => {

      if (window.innerWidth > 600) {
         setmobile(false)
      } else {
         setmobile(true)
      }

   }, [])

   if (only) {
      return (
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
      )
   }

   return (
      <React.Fragment>
         {!mobile && <div className="footer__container">
               <div className="footer">
                  <div className="footer__list-container">
                     <span>Popular Catagories</span>
                     <ul className="footer__list">
                        <Link className="footer__link">
                           <li>Cars</li>
                        </Link>
                        <Link className="footer__link">
                           <li>Flats and rents</li>
                        </Link>
                        <Link className="footer__link">
                           <li>Jobs</li>
                        </Link>
                        <Link className="footer__link">
                           <li>Mobile Phones</li>
                        </Link>
                     </ul>
                  </div>
                  <div className="footer__list-container">
                     <span>Trending Searches</span>
                     <ul className="footer__list">
                        <Link className="footer__link">
                           <li>Bikes</li>
                        </Link>
                        <Link className="footer__link">
                           <li>Watches</li>
                        </Link>
                        <Link className="footer__link">
                           <li>Books</li>
                        </Link>
                        <Link  className="footer__link">
                           <li>Dogs</li>
                        </Link>
                     </ul>
                  </div>
                  <div className="footer__list-container">
                     <span>About Us</span>
                     <ul className="footer__list">
                        <Link className="footer__link">
                           <li>About OLX Group</li>
                        </Link>
                        <Link className="footer__link">
                           <li>OLX Blog</li>
                        </Link>
                        <Link className="footer__link">
                           <li>Contact Us</li>
                        </Link>
                        <Link className="footer__link">
                           <li>OLX for Businesses</li>
                        </Link>
                     </ul>
                  </div>
                  <div className="footer__list-container">
                     <span>OLX</span>
                     <ul className="footer__list">
                        <Link className="footer__link">
                           <li>Help</li>
                        </Link>
                        <Link className="footer__link">
                           <li>Sitemap</li>
                        </Link>
                        <Link className="footer__link">
                           <li>Legal & Privacy information</li>
                        </Link>
                     </ul>
                  </div>
                  <div className="footer__social">
                     <span className="title">Follow us</span>
                     <div className="footer__socialLinks">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                           <span className="icon__wrapper">
                              <i className="sicon fab fa-facebook-f"></i>
                           </span>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                           <span className="icon__wrapper">
                              <i className="sicon fab fa-twitter"></i>
                           </span>
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                           <span className="icon__wrapper">
                              <i className="sicon fas fa-play"></i>
                           </span>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                           <span className="icon__wrapper">
                              <i className="sicon fab fa-instagram"></i>
                           </span>
                        </a>
                     </div>
                        <div className="footer__imageStore">
                           <img src={appstore} alt=""/>
                           <img src={playstore} alt=""/>
                        </div>
                  </div>
               </div>
         </div>}
         {mobile &&
            <React.Fragment> 
               <List component="nav" className={classes.root} aria-label="mailbox folders">
                  <ListItem onClick={popCatToggle} button>
                     <ListItemText className="footer__list-item" primary={<p>Popular Catagories <span className="footer__catIcon"><KeyboardArrowRightIcon /></span></p>} />
                  </ListItem>
                        <List component="nav" className={classes.subList + popularCatDisplay} aria-label="mailbox folders">
                           <ListItem button>
                              <ListItemText className="footer__list-item" primary="Cars" />
                           </ListItem>
                           <Divider />
                           <ListItem button divider>
                              <ListItemText className="footer__list-item" primary="Flats for rent" />
                           </ListItem>
                           <ListItem button>
                              <ListItemText className="footer__list-item" primary="Jobs" />
                           </ListItem>
                           <Divider light />
                           <ListItem button>
                              <ListItemText className="footer__list-item" primary="Mobile Phones" />
                           </ListItem>
                        </List>
                  <Divider />
                  <ListItem onClick={trendCatToggle} button>
                     <ListItemText className="footer__list-item" primary={<p>Trending Searches <span className="footer__catIcon"><KeyboardArrowRightIcon /></span></p>} />
                  </ListItem>
                        <List component="nav" className={classes.subList + trendCatDisplay} aria-label="mailbox folders">
                           <ListItem button>
                              <ListItemText className="footer__list-item" primary="Bikes" />
                           </ListItem>
                           <Divider />
                           <ListItem button divider>
                              <ListItemText className="footer__list-item" primary="Watches" />
                           </ListItem>
                           <ListItem button>
                              <ListItemText className="footer__list-item" primary="Books" />
                           </ListItem>
                           <Divider light />
                           <ListItem button>
                              <ListItemText className="footer__list-item" primary="Dogs" />
                           </ListItem>
                        </List>
                  <Divider />
                  <ListItem onClick={aboutCatToggle} button>
                     <ListItemText className="footer__list-item" primary={<p>About OLX <span className="footer__catIcon"><KeyboardArrowRightIcon /></span></p>} />
                  </ListItem>
                        <List component="nav" className={classes.subList + aboutCatDisplay} aria-label="mailbox folders">
                           <ListItem button>
                              <ListItemText className="footer__list-item" primary="About OLX Group" />
                           </ListItem>
                           <Divider  />
                           <ListItem button divider>
                              <ListItemText className="footer__list-item" primary="OLX Blog" />
                           </ListItem>
                           <ListItem button>
                              <ListItemText className="footer__list-item" primary="Contact Us" />
                           </ListItem>
                           <Divider light />
                           <ListItem button>
                              <ListItemText className="footer__list-item" primary="OLX for Businesses" />
                           </ListItem>
                        </List>
                  <Divider />
                  <ListItem onClick={olxCatToggle} button>
                     <ListItemText className="footer__list-item" primary={<p>OLX <span className="footer__catIcon"><KeyboardArrowRightIcon /></span></p>} />
                  </ListItem>
                        <List component="nav" className={classes.subList + olxCatDisplay} aria-label="mailbox folders">
                           <ListItem button>
                              <ListItemText className="footer__list-item" primary="Help" />
                           </ListItem>
                           <Divider />
                           <ListItem button divider>
                              <ListItemText className="footer__list-item" primary="Sitemap" />
                           </ListItem>
                           <ListItem button>
                              <ListItemText className="footer__list-item" primary="Legal & Privacy information" />
                           </ListItem>
                           <Divider />
                        </List>
               </List>
               <div className="mfooter__links">
                  <div className="mfooter__linksText">
                     Follow Us
                  </div>
                  <div className="mfooter__linksList">
                     <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                        <span className="icon__wrapper">
                           <i className="sicon mobile fab fa-facebook-f"></i>
                        </span>
                     </a>
                     <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                        <span className="icon__wrapper">
                           <i className="sicon mobile fab fa-twitter"></i>
                        </span>
                     </a>
                     <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                        <span className="icon__wrapper">
                           <i className="sicon mobile fas fa-play"></i>
                        </span>
                     </a>
                     <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                        <span className="icon__wrapper">
                           <i className="sicon mobile fab fa-instagram"></i>
                        </span>
                     </a>
                  </div>
               </div>
               <div className="mfooter__links store">
                  <img src={playstore} alt=""/>
                  <img src={appstore} alt=""/>
               </div>
            </React.Fragment>
         }
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

export default Footer
