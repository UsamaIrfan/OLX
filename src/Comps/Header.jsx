import React, {useState, useEffect} from 'react';
import '../Styles/Header.css';
import logo from '../Images/Application/OLX-logo.png';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import HeaderCatagories from './SubComps/HeaderCatagories';
import loginGuitarImg from '../Images/Application/loginEntryPointPost.webp';
import { firebase , auth } from '../config/Firebase'
import {useStateValue} from '../config/StateProvider'
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
// Icons
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MenuIcon from '@material-ui/icons/Menu';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import DesktopWindowsOutlinedIcon from '@material-ui/icons/DesktopWindowsOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined';
import DeckOutlinedIcon from '@material-ui/icons/DeckOutlined';
import BusinessIcon from '@material-ui/icons/Business';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import WatchIcon from '@material-ui/icons/Watch';

function Header({mobile}) {

   const [userEmail, setuserEmail] = useState("");
   const [userPassword, setuserPassword] = useState("");
   const [userFirstName, setuserFirstName] = useState("");
   const [userLastName, setuserLastName] = useState("");
   const [{user},dispatch] = useStateValue();
   
   const [emailDisplay, setemailDisplay] = useState("header__emailLogin-container hidden")
   
   // const [mobile,setmobile] = useState(false);

   const [mNavDisplay, setmNavDisplay] = useState("mobileNav hideBar")

   const [display, setDisplay] = useState("header__login-container hidden")

   const [loginFormDisplay, setloginFormDisplay] = useState("header__emaiLogin-form login show")
   const [regFormDisplay, setregFormDisplay] = useState("header__emaiLogin-form register hidden")

   var fbprovider = new firebase.auth.FacebookAuthProvider();
   var googleprovider = new firebase.auth.GoogleAuthProvider();

   const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
      appBar: {
         background: "#FFFFFF",
         color:  "#002F34",
      }
    }));

   const classes = useStyles();



   useEffect(() => {

      const unsubsribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          // The user is Logged in
          dispatch({
            type: "SET_USER",
            user: authUser
          });
  
        } else {
          // The user is logged out
        
          dispatch({
            type: "SET_USER",
            user:null
          });
         
      }

   })
      
      return () => {
  
        // any clean up ligc goes in here
  
        unsubsribe();
      }
  
    }, [])

   const login = e => {
      e.preventDefault();
      // login Logic
      auth.signInWithEmailAndPassword(userEmail, userPassword)
      .then((auth) => {
         // Logged in set forms display to none.
         console.log(auth)
         dispatch({
            type:"SET_USER",
            user: auth
         })
         setemailDisplay("header__emailLogin-container hidden");
         setDisplay("header__login-container hidden");
      })
      .catch((err) => console.log(err.message)) 
   }

   const register = e => {
      e.preventDefault();
      // Register Logic
      auth.createUserWithEmailAndPassword(userEmail, userPassword)
      .then((auth) => {
         // created new user and logged in
         console.log(auth)
         var user = firebase.auth().currentUser;

         user.updateProfile({
            displayName: `${userFirstName} ${userLastName}`,
            photoURL: 'https://statics.olx.com.pk/external/base/img/avatar_1.png',
            }).then(function() {
               // Update successful.
               setemailDisplay("header__emailLogin-container hidden");
               setDisplay("header__login-container hidden");
            }).catch(function(error) {
            // An error happened.
               console.log(error)
            });
            console.log(user)
         })
      .catch((err) => console.log(err.message))
   }

   const googleLogin = () => {

      firebase.auth().signInWithPopup(googleprovider).then(function(result) {
         // This gives you a Google Access Token. You can use it to access the Google API.
         var token = result.credential.accessToken;
         // The signed-in user info.
         var user = result.user;
         console.log(user)
         // ...
      }).catch(function(error) {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         // The email of the user's account used.
         var email = error.email;
         // The firebase.auth.AuthCredential type that was used.
         var credential = error.credential;
         console.log(errorMessage)
         // ...
       });

   }
   
   const fbLogin = () => {

      firebase.auth().signInWithPopup(fbprovider).then(function(result) {
         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
         var token = result.credential.accessToken;
         // The signed-in user info.
         var user = result.user;
         console.log(user)
         // ...
       }).catch(function(error) {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         // The email of the user's account used.
         var email = error.email;
         // The firebase.auth.AuthCredential type that was used.
         var credential = error.credential;
         console.log(errorMessage)
         // ...
       });

   }

   const signOut = () => {
      if (user) {
         auth.signOut();
      }
   }

   
   const mheaderToggle = () => {
      if (mNavDisplay === "mobileNav hideBar") {
         setmNavDisplay("mobileNav showBar")
      } else {
         setmNavDisplay("mobileNav hideBar")
      }
   }

   const toggleFormDisplays = () => {
      if (loginFormDisplay === "header__emaiLogin-form login show") {
         setloginFormDisplay("header__emaiLogin-form login hidden")
         setregFormDisplay("header__emaiLogin-form register show")
      } else {
         setloginFormDisplay("header__emaiLogin-form login show")
         setregFormDisplay("header__emaiLogin-form register hidden")
      }
   }

   const toggleEmailDisplay = () => {
      if (emailDisplay === "header__emailLogin-container hidden") {
         setemailDisplay("header__emailLogin-container show")
      } else {
         setemailDisplay("header__emailLogin-container hidden")
      }
   }

   const toggleDisplay = () => {
      setmNavDisplay("mobileNav hideBar")
      if (display === "header__login-container hidden") {
         setDisplay("header__login-container show")
      } else {
         setDisplay("header__login-container hidden")
      }
   }

   const displayNone = () => {
      setemailDisplay("header__emailLogin-container hidden");
      setDisplay("header__login-container hidden")
   }


   if (!mobile) {
      return (
         <React.Fragment>
            <div className="header__container">
               <div className="header__top__container">
                  <div className="header">
                     <div className="header__logo">
                        <Link to="/"><img src={logo} alt="" className="header__logo-img" /></Link>
                     </div>
                     <div className="header__search-container">
                        <div className="header__location">
                           <SearchIcon className="header__search-icon" />
                           <input type="text" placeholder="Your Location" defaultValue="Pakistan" />
                           <KeyboardArrowDownIcon fontSize="large" className="header__search-icon-arrow" />
                        </div>
                        <div className="header__search">
                           <div className="header__searchForm">
                              <form role="search">
                                 <input type="text" className="header__searchFormInput" placeholder="Find Cars, Accessories, Mobile and more"/>
                              </form>
                           </div>
                           <SearchIcon className="header__location-search-icon" />
                        </div>
                     </div>
                     {user && 
                           <div className="header__userDetais">
                              <Avatar alt="User Avatar" src={user.photoURL} />
                           </div>
                        }
                     <div className="header__links">
                        {!user ? <button onClick={toggleDisplay} className="header__links-signin">Login</button> : <button onClick={signOut} className="header__links-signin">Sign Out</button>}
                        <Link className="header__sell__link" to="/post">
                           <div className="header__links-sell">
                              <AddRoundedIcon className="header__links-plus" style={{ fontSize: 24 }} />
                              <span className="header__links-sellText">Sell</span>
                           </div>
                        </Link>
                     </div>
                  </div>
               </div>
               <div className="header__container__separator">

               </div>
               <HeaderCatagories />
            </div>
            <div className={emailDisplay}>
               <div className="header__emailLogin">
                  <div className="header__emailLogin-slider">
                        <img src={logo} alt="Login Guitar" className="header__emailLoginImg"/>
                        <p>Enter your Email</p>
                  </div>
                  <form onSubmit={login} className={loginFormDisplay} >
                     <p>Login Form</p>
                     <input value={userEmail} onChange={e => setuserEmail(e.target.value)} autoFocus required type="email" className="header__emailLogin-input" placeholder="Email"/>
                     <input onChange={e => setuserPassword(e.target.value)} value={userPassword} required type="password" className="header__emailLogin-input" placeholder="Password"/>
                     <button type="submit" className="header__loginBtn email" >Log In</button>
                     <button onClick={toggleFormDisplays} className="header__loginBtn email" >Register New User</button>
                  </form>
                  <form onSubmit={register} className={regFormDisplay} >
                     <p>Registration form</p>
                     <input value={userFirstName} onChange={e => setuserFirstName(e.target.value)} required type="text" placeholder="First Name" className="header__emailLogin-input"/>
                     <input value={userLastName} onChange={e => setuserLastName(e.target.value)} required type="text" placeholder="Last Name" className="header__emailLogin-input"/>
                     <input value={userEmail} onChange={e => setuserEmail(e.target.value)} autoFocus required type="email" className="header__emailLogin-input" placeholder="Email"/>
                     <input onChange={e => setuserPassword(e.target.value)} value={userPassword} required type="password" className="header__emailLogin-input" placeholder="Password"/>
                     <button type="submit" className="header__loginBtn email" >Register</button>
                     <button onClick={toggleFormDisplays} className="header__loginBtn email" >Login</button>
                  </form>
                  <div className="header__login-terms">
                     <p className="header__login-termsText email">We won't reveal your email to anyone else nor use it to send you spam</p>
                  </div>
                  <button onClick={displayNone} className="header__login-cross email">
                     <ClearIcon fontSize="large" className="header__login-crossIcon email"/>
                  </button>
                  <button onClick={() => {toggleDisplay(); toggleEmailDisplay();}} className="header__emailLogin-back">
                     <ArrowBackIcon fontSize="large" className="header__emailLogin-backIcon"/>
                  </button>
               </div>
            </div>
            <div className={display}>
               <div className="header__login">
                  <div className="header__login-slider">
                     <img src={loginGuitarImg} alt="Login Guitar" className="header__loginImg"/>
                     <p>Help make OLX safer place to buy and sale.</p>
                  </div>
                  <button onClick={fbLogin} className="header__loginBtn">Continue with Facebook</button>
                  <button onClick={googleLogin} className="header__loginBtn">Continue with Google</button>
                  <button onClick={() => {toggleDisplay(); toggleEmailDisplay();}} className="header__loginBtn email">Continue with Email</button>
                  <div className="header__login-terms">
                     <p>We won't share your personal details with anyone</p>
                     <p className="header__login-termsText">If you continue, you are accepting OLX Terms and Conditions and Privacy Policy</p>
                  </div>
                  <button onClick={toggleDisplay} className={"header__login-cross "}>
                     <ClearIcon fontSize="large" className="header__login-crossIcon"/>
                  </button>
               </div>
            </div>
      </React.Fragment>
      )
   } else {
      
      return (
      <div className="header__container">
         <AppBar position="static" className={classes.appBar}>
            <Toolbar>
           <IconButton onClick={mheaderToggle} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
             <MenuIcon />
           </IconButton>
           <Typography variant="h6" className={classes.title}>
               <Link to="/"><img src={logo} className="header__logo-img" style={{verticalAlign: "middle"}} alt="OLX logo"/></Link>
           </Typography>
           <Button color="inherit">Pakistan</Button>
         </Toolbar>
       </AppBar>
      <div className="mheader__catagories">
         <div className="mheader__title">
            <p>Browse Catagories</p>
            <Link to="/mobilecats" className="mheader__titleLink">See All</Link>
         </div>
         <div className="mheader__catagories-box">
            <Link to="/mobilecats" className="mheader__link">
               <div className="catagories__item">
                  <span className="catagories__itemIcon"><DirectionsCarIcon /></span>
                  <span className="catagories__itemText">Vehicles</span>
               </div>
            </Link>
            <Link to="/mobilecats" className="mheader__link">
               <div className="catagories__item">
                  <span style={{background: "#FFCE32"}} className="catagories__itemIcon"><PhoneIphoneIcon /></span>
                  <span className="catagories__itemText">Mobile</span>
               </div>
            </Link>
            <Link to="/mobilecats" className="mheader__link">
               <div className="catagories__item">
                  <span style={{background: "#23E5DB"}} className="catagories__itemIcon"><DesktopWindowsOutlinedIcon /></span>
                  <span className="catagories__itemText">Electronics & Home Appliances</span>
               </div>
            </Link>
            <Link to="/mobilecats" className="mheader__link">
               <div className="catagories__item">
                  <span style={{background: "#ff645c"}} className="catagories__itemIcon"><MonetizationOnOutlinedIcon /></span>
                  <span className="catagories__itemText">Property for sale</span>
               </div>
            </Link>
            <Link to="/mobilecats" className="mheader__link">
               <div className="catagories__item">
                  <span className="catagories__itemIcon"><PetsOutlinedIcon /></span>
                  <span className="catagories__itemText">Animals</span>
               </div>
            </Link>
            <Link to="/mobilecats" className="mheader__link">
               <div className="catagories__item">
                  <span style={{background: "#FFCE32"}} className="catagories__itemIcon"><WatchIcon /></span>
                  <span className="catagories__itemText">Furniture & Home Decor</span>
               </div>
            </Link>
            <Link to="/mobilecats" className="mheader__link">
               <div className="catagories__item">
                  <span style={{background: "#23E5DB"}} className="catagories__itemIcon"><DeckOutlinedIcon /></span>
                  <span className="catagories__itemText">Business, Industrial & Agriculture</span>
               </div>
            </Link>
            <Link to="/mobilecats" to="/catagories/Bikes/Motorcycles" className="mheader__link">
               <div className="catagories__item">
                  <span style={{background: "#ff645c"}} className="catagories__itemIcon"><BusinessIcon /></span>
                  <span className="catagories__itemText">Bikes</span>
               </div>
            </Link>
            <Link to="/mobilecats" className="mheader__link">
               <div className="catagories__item">
                  <span className="catagories__itemIcon"><MotorcycleIcon /></span>
                  <span className="catagories__itemText">Fashion & Beauty</span>
               </div>
            </Link>
         </div>
         <div className={display}>
            <div className="header__login">
               <div className="header__login-slider">
                  <img src={loginGuitarImg} alt="Login Guitar" className="header__loginImg"/>
                  <p>Help make OLX safer place to buy and sale.</p>
               </div>
               <button onClick={fbLogin} className="header__loginBtn">Continue with Facebook</button>
               <button onClick={googleLogin} className="header__loginBtn">Continue with Google</button>
               <button onClick={() => {toggleDisplay(); toggleEmailDisplay();}} className="header__loginBtn email">Continue with Email</button>
               <div className="header__login-terms">
                  <p>We won't share your personal details with anyone</p>
                  <p className="header__login-termsText">If you continue, you are accepting OLX Terms and Conditions and Privacy Policy</p>
               </div>
               <button onClick={toggleDisplay} className={"header__login-cross "}>
                  <ClearIcon fontSize="large" className="header__login-crossIcon"/>
               </button>
            </div>
         </div>
         <div className={emailDisplay}>
            <div className="header__emailLogin">
               <div className="header__emailLogin-slider">
                     <img src={logo} alt="Login Guitar" className="header__emailLoginImg"/>
                     <p>Enter your Email</p>
               </div>
               <form onSubmit={login} className={loginFormDisplay} >
                  <p>Login Form</p>
                  <input value={userEmail} onChange={e => setuserEmail(e.target.value)} autoFocus required type="email" className="header__emailLogin-input" placeholder="Email"/>
                  <input onChange={e => setuserPassword(e.target.value)} value={userPassword} required type="password" className="header__emailLogin-input" placeholder="Password"/>
                  <button type="submit" className="header__loginBtn email" >Log In</button>
                  <button onClick={toggleFormDisplays} className="header__loginBtn email" >Register New User</button>
               </form>
               <form onSubmit={register} className={regFormDisplay} >
                  <p>Registration form</p>
                  <input value={userFirstName} onChange={e => setuserFirstName(e.target.value)} required type="text" placeholder="First Name" className="header__emailLogin-input"/>
                  <input value={userLastName} onChange={e => setuserLastName(e.target.value)} required type="text" placeholder="Last Name" className="header__emailLogin-input"/>
                  <input value={userEmail} onChange={e => setuserEmail(e.target.value)} autoFocus required type="email" className="header__emailLogin-input" placeholder="Email"/>
                  <input onChange={e => setuserPassword(e.target.value)} value={userPassword} required type="password" className="header__emailLogin-input" placeholder="Password"/>
                  <button type="submit" className="header__loginBtn email" >Register</button>
                  <button onClick={toggleFormDisplays} className="header__loginBtn email" >Login</button>
               </form>
               <div className="header__login-terms">
                  <p className="header__login-termsText email">We won't reveal your email to anyone else nor use it to send you spam</p>
               </div>
               <button onClick={displayNone} className="header__login-cross email">
                  <ClearIcon fontSize="large" className="header__login-crossIcon email"/>
               </button>
               <button onClick={() => {toggleDisplay(); toggleEmailDisplay();}} className="header__emailLogin-back">
                  <ArrowBackIcon fontSize="large" className="header__emailLogin-backIcon"/>
               </button>
            </div>
         </div>
         <div className={mNavDisplay}>
            <div className="userInfo">
               {!user && <Avatar alt="User Avatar" src={user?.photoURL} />}
               {user && <Avatar alt="User Avatar" src={user.photoURL} />}
               {user && <p className="mUserInfo__name">{user.displayName}</p>}
            </div>
            <div className="mobileNav__links">
               <List component="nav" aria-label="mailbox folders">
                  <Divider  />
                  {!user ? <ListItem onClick={toggleDisplay} button>
                     <ListItemText className="header__list-item" primary="Login" />
                  </ListItem> : <ListItem onClick={signOut} button>
                     <ListItemText className="header__list-item" primary="Sign Out" />
                  </ListItem>}
                  <Divider  />
               </List>
            </div>
            <Link className="header__sell__link mobile" to="/post">
               <div className="header__links-sell mobile">
                  <AddRoundedIcon className="header__links-plus" style={{ fontSize: 24 }} />
                  <span className="header__links-sellText">Sell</span>
               </div>
            </Link>
         </div>
      </div>
      </div>
      )
   }
}

export default Header;