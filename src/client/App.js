/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Home from './pages/Home';
import Blog from './pages/Blogs';
import SingleBlogPage from './pages/SingleBlogPage';
import Footer from './components/Footer';
import Header from './components/Header';

// create http link for remote data fetching
const httpLink = createHttpLink({
  uri: 'https://cns-app.herokuapp.com/graphql',
});

// Apollo Client setup
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const Main = withRouter(({ location }) => {
  return (
    <>
      {['/blog', '/posts'].includes(location.pathname) && (
        <div className=" mx-auto px-6  sm:pr-20 sm:pl-20">
          {' '}
          <Header />{' '}
        </div>
      )}
      <Route path="/" exact component={Home} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/posts/:slug" exact component={SingleBlogPage} />

      <Footer />
    </>
  );
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Main />
      </Router>
    </ApolloProvider>
  );
};

export default App;
