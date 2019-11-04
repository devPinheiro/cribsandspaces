
import React from 'react';
import Home from '../client/pages/Home';
import Blog from '../client/pages/Blogs';
import SingleBlogPage from "../client/pages/SingleBlogPage";
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { ApolloProvider, Query } from 'react-apollo';
import ApolloClient, { gql }  from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';

// Apollo Client setup
const client = new ApolloClient({
   uri: 'http://localhost:1337/graphql'
});


const Main = withRouter(({ location }) => {
  return (
    <>
     {
        (["/blog", "/blog-post"].includes(location.pathname) && <div className=" mx-auto px-6  sm:pr-20 sm:pl-20"> <Header /> </div>)}
    <Route path="/" exact  component={Home} />
    <Route path="/blog" exact component={Blog} />
    <Route path="/blog-post" exact component={SingleBlogPage} />
   <Footer />
   </>
  )
})



const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Main />
      </Router>
    </ApolloProvider>
  )
};

export default App
