
import React from 'react';
import Home from '../client/pages/Home';
import Blog from '../client/pages/Blogs'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { ApolloProider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http'


const Main = withRouter(({ location }) => {
  return (
    <>
     {
        (["/blog"].includes(location.pathname) && <div className=" mx-auto px-6  sm:pr-20 sm:pl-20"> <Header /> </div>)}
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
