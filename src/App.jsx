import {useState, useEffect} from 'react';
import './App.css';
import Header from './Comps/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Comps/Home';
import Footer from './Comps/Footer'
import Post from './Comps/Post'
import PostAttr from './Comps/PostAttr'
import MobilePost from './Comps/MobilePost';

function App() {

  const [mobile,setmobile] = useState(false);
   
  useEffect(() => {

    if (window.innerWidth > 600) {
       setmobile(false)
    } else {
       setmobile(true)
    }

 }, [])

  return (
    <Router>
      <Switch>
        <Route path="/mobilecats">
          <MobilePost />
        </Route>
        <Route path="/catagories/:catagory/:subcatagory">
          <Header mobile={mobile}/>
          <Home catagories={true}/>
          <Footer only />
        </Route>
        <Route path="/post/attributes">
          <PostAttr />
        </Route>
        <Route path="/post">
          <Post />
        </Route>
        <Route path="/">
          <Header mobile={mobile}/>
          <Home catagories={false} />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
