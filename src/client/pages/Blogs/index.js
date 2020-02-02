/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Card from '../../components/Card';

const BlogPosts = () => {
  return (
    <Query
      query={gql`
        query {
          blogs {
            title
            content
            featured_image {
              url
            }
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error </p>;
        return data.blogs.map((item, id) => {
          return (
            <Card {...item} key={id}>
              {' '}
            </Card>
          );
        });
      }}
    </Query>
  );
};

const Blog = () => {
  return (
    <div className="w-full max-w-screen-xl  mx-auto px-6  sm:pr-20 sm:pl-20">
      <h1 className="font-raleway pb-4 leading-tight sm:text-3xl md:text-4xl lg-text-5xl xl:text-5xl text-2xl">
        Collection of Blog posts
      </h1>
      <div className="border-orange-500 border-l-2 pl-5 pt-5 pb-5 ">
        <p>we are always adventurous and that drive us to build cool product</p>
        <p>We derive joy in making your space your space truly.</p>
      </div>

      <div className="w-full flex flex-col  pt-24 items-center lg:flex-row lg:h-80 lg:justify-between grid">
        <BlogPosts />
      </div>
    </div>
  );
};

export default Blog;
