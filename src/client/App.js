import React from 'react';
import Home from '../client/pages/Home';
import Blog from '../client/pages/Blogs';
import SingleBlogPage from "../client/pages/SingleBlogPage";
import {
  BrowserRouter as Router,
  Route,
  withRouter
} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import {
  ApolloProvider
} from 'react-apollo';
import {
  ApolloClient
} from 'apollo-client';
import {
  createHttpLink
} from 'apollo-link-http';
import {
  InMemoryCache
} from 'apollo-cache-inmemory';

// create http link for remote data fetching
const httpLink = createHttpLink({
  uri: 'https://cns-app.herokuapp.com/graphql'
})

// Apollo Client setup
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})



const Main = withRouter(({
      location
    }) => {
      return ( <> 
        {
        (["/blog", "/blog-post"].includes(location.pathname) && < div className = " mx-auto px-6  sm:pr-20 sm:pl-20" > < Header /> </div>)} 
        <Route path = "/"
          exact component = {
            Home
          }
          /> 
          <Route path = "/blog"
          exact component = {
            Blog
          }
          /> 
          <Route path = "/blog-post"
          exact component = {
            SingleBlogPage
          }
          /> 
          <Route path = "/blog-post"
          exact component = {
            SingleBlogPage
          }
          /> 
          <Footer />
          </>
        )
      })



      const App = () => {
        return ( 
        <ApolloProvider client = {
            client
          } >
          <Router>
          <Main />
          </Router> 
          </ApolloProvider>
        )
      };

      export default App