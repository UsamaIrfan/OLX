import React, {useState, useEffect } from 'react';
import '../Styles/PostAttr.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import logo from '../Images/Application/OLX-logo.png';
import {useStateValue} from '../config/StateProvider'
import {Link , useHistory} from 'react-router-dom';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Avatar from '@material-ui/core/Avatar';
import Switch from '@material-ui/core/Switch';
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import ProgressBar from './SubComps/ProgressBar';
import { projectFirestore , timeStamp } from '../config/Firebase';
import {motion} from 'framer-motion';

function PostAttr() {

   const useStyles = makeStyles(theme => ({
      typography: {
         [theme.breakpoints.down('sm')]: {
            fontSize: 12 + 'px'
         }
      }
   }))

   const [{catagory, user, url}] = useStateValue();
   const history = useHistory();

   //Post Data
   const [switchNumber, setswitchNumber] = useState(true);
   const [state, setstate] = useState(null);
   const [image, setImage] = useState(null);
   const [used, setused] = useState(null);
   const [title, setTitle] = useState("");
   const [desc, setDesc] = useState("");
   const [price, setprice] = useState(null)
   const classes = useStyles();
   const [genErr, setgenErr] = useState(null)

   const regProduct = (e) => {
      e.preventDefault();
      if (url && price?.length > 0 && used && title?.length > 0 && desc?.length > 0 && state) {
         let collectionRef = projectFirestore.collection(`Products/${catagory?.cat}/${catagory?.subCat}`);
         const createdAt = timeStamp();
         collectionRef.add({ price , owner : {email: user.email, name: user.displayName} , createdAt , desc , title , used , productImage : url , state , shareNumber : switchNumber })
         collectionRef = projectFirestore.collection('AllProducts');
         collectionRef.add({ price , owner : {email: user.email, name: user.displayName} , createdAt , desc , title , used , productImage : url , state , shareNumber : switchNumber })
         setgenErr(null)
         history.push("/")
      } else {
         setgenErr("Missing Required Fields.")
      }
   }
   
   const toggleSwitch = () => {
      switchNumber ? setswitchNumber(false) : setswitchNumber(true)
   }

   const changeHandler = (e) => {
      let image = e.target.files[0];
      const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg']
      if (image && allowedTypes.includes(image.type)) {
         setImage(image)
      } else {
         setgenErr("Please select an image of a valid file type.")
      }
   }

   const selectedCheck = (e) => {
      let parentChilds = e.target.parentElement.childNodes;
      parentChilds.forEach(item => {
         item.classList.remove("selected")
      })
      e.target.classList.add("selected");
      if (e.target.innerText.toLowerCase() === "used") {
         setused("Used")
      } else {
         setused("New")
      }
   }

   useEffect(() => {
      if (!catagory) {
         history.push("/post")
      }
      if (!user) {
         history.push("/")
      }
   }, [history, catagory, user])

   return (
      <React.Fragment>
         <motion.div layout className="postattr">
            <div className="post__nav-container">
               <nav className="post__nav">
                  <Link to="/post"><button className="post__navButton"><ArrowBackIcon className="post__navBack"/></button></Link>
                  <img className="post__navImg" src={logo} alt="OLX logo"/>
               </nav>
            </div>
            <div className="post__catagories">
               <h3>POST YOUR AD</h3>
               <div className="post__catagories-container">
                  <h3>Selected Catagory</h3>
                  {catagory && <p className="postattr__catText">{catagory?.cat} / {catagory?.subCat}&nbsp;&nbsp;&nbsp;<span><Link className="postattr__catText-link" to="/post">Change</Link></span></p>}
               </div>
            </div>
            <div className="post__catagories">
               <form onSubmit={regProduct}>
                  <div className="post__catagories-container">
                     <div className="post__form">
                        <h3>INCLUDE SOME DETAILS</h3>
                        <div className="postattr__inputField">
                           <label className="post__inputTitle">Condition *</label>
                           <div className="post__inpuBtns-container">
                              <button type="button" onClick={selectedCheck} className="post__inputBtn">New</button>
                              <button type="button" onClick={selectedCheck} className="post__inputBtn">Used</button>
                           </div>
                        </div>
                        <div className="postattr__inputField">
                           <label className="post__inputTitle">Ad Title *</label>
                           <div className="post__input-container">
                              <input value={title} onChange={e => {setTitle(e.target.value)}} type="text" maxLength={70}/>
                           </div>
                           <div className="post__inputMeta">
                              <p>Mention the key features of your item (e.g. brand, model, age, type)</p>
                              <span>{title.length}/70</span>
                           </div>
                        </div>
                        <div className="postattr__inputField">
                           <div>
                              <label className="post__inputTitle">Description *</label>
                              <div value className="post__input-container textarea">
                                 <textarea value={desc} onChange={e => {setDesc(e.target.value)}} type="text" maxLength={4096}/>
                              </div>
                              <div className="post__inputMeta">
                                 <p>Mention the key features of your item (e.g. brand, model, age, type)</p>
                                 <span>{desc.length}/4096</span>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>
                  <div className="post__catagories-container">
                     <div className="post__form">
                        <h3>SET A PRICE</h3>
                        <div>
                           <label className="post__inputTitle">Price *</label>
                           <div className="post__input-container price">
                              <span className="post__priceInput-currency">Rs</span>
                              <input value={price} onChange={e => setprice(e.target.value)} className="post__priceInput" type="number"/>
                           </div>
                           <div className="post__inputMeta">
                              <p></p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="post__catagories-container image">
                     <div className="post__form">
                        <h3>UPLOAD AN IMAGE</h3>
                        <div className="post__fileInput">
                           <input onChange={changeHandler} type="file" id="file" />
                           <label for="file"><p><AddAPhotoOutlinedIcon fontSize="large" /></p>Add Photo</label>
                        </div>
                     </div>
                     {/* <CircularProgress className="post__progress" variant="static" value={70} /> */}
                     {image && <div className="post__image-info">
                        {genErr && <p className="post__image-name">{genErr}</p>}
                        <p className="post__image-name">{image?.name}</p>
                        <p className="post__image-name">Size: {image?.size}</p>
                        <ProgressBar file={image} setfile={setImage} />
                     </div>}
                  </div>
                  <div className="post__catagories-container">
                     <div className="post__form">
                        <h3>YOUR LOCATION</h3>
                        <FormControl className={"post__selectInput"} variant="outlined">
                           <InputLabel className={classes.typography} fontSize="12px" id="location">State *</InputLabel>
                           <Select
                              labelId="location"
                              id="select"
                              label="State *"
                              color="primary"
                           >
                              <MenuItem value={0} onClick={e => {setstate("Azad Kashmir")}}>Azad Kashmir</MenuItem>
                              <MenuItem value={1} onClick={e => {setstate("Balochistan")}}>Balochistan</MenuItem>
                              <MenuItem value={2} onClick={e => {setstate("Khyber Pakhtunkhuwa")}}>Khyber Pakhtunkhuwa</MenuItem>
                              <MenuItem value={3} onClick={e => {setstate("Northern Areas")}}>Northern Areas</MenuItem>
                              <MenuItem value={4} onClick={e => {setstate("Punjab")}}>Punjab</MenuItem>
                              <MenuItem value={5} onClick={e => {setstate("Sindh")}}>Sindh</MenuItem>
                           </Select>
                     </FormControl>
                     </div>
                  </div>
                  <div className="post__catagories-container">
                     <div className="post__form">
                        <h3>REVIEW PROFILE</h3>
                        <div className="post__profile">
                           <Avatar style={{width: 100 + "px", height: 100 + "px"}} className="post__profileAvatar" alt="User Avatar" src={user?.photoURL} />
                           <div className="postattr__inputField email">
                              <label className="post__inputTitle">Email</label>
                              <div className="post__input-container">
                                 <input type="email" maxLength={70} value={user?.email} readOnly/>
                              </div>
                           </div>
                        </div>
                        <div className="post__profile">
                           <p>Show my Number on my ads</p>
                           <Switch
                              checked={switchNumber}
                              onChange={toggleSwitch}
                              color="primary"
                              name="checkedB"
                              inputProps={{ 'aria-label': 'primary checkbox' }}
                           />
                        </div>
                     </div>
                  </div>
                  <div className="post__catagories-container last">
                     {genErr && <motion.div initial={{y: 30+"px"}} animate={{y: 0}} style={{color: "red"}} className="post__err">{genErr}</motion.div>}
                     <div className="post__submit">
                        {state && url && price && used && title && desc ? <Button type="submit" color="primary" variant="contained" className="post__submitBtn">Post Now</Button> : <Button style={{cursor: "not-allowed"}} disabled color="primary" variant="contained" className="post__submitBtn">Post Now</Button>}
                     </div>
                  </div>
               </form>
            </div>
         </motion.div>
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

export default PostAttr
