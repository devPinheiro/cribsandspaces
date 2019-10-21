
import React from 'react';
import Home from '../client/pages/Home';
import Blog from '../client/pages/Blogs'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';


const Main = withRouter(({ location }) => {
  return (
    <>
     {["/"].includes(
        location.pathname
      ) ||
        (["/"].includes(location.pathname) && <Header />)}
    <Route path="/" exact  component={Home} />
    <Route path="/blog" exact component={Blog} />
   <Footer />
   </>
  )
})


const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  )
};

export default App
