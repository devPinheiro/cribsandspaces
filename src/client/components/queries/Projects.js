import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Project from '../../components/ProjectCard';

const Projects = () => {
  return (
    <Query
      query={gql`
   query {
     projects {
       id,
       Title,
       Company_Name,
       project_images {
         url
       }
     }
   }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;

        if (error) return <p>Error </p>;
        return data.projects.map((item, id) => {
          return (
            <Project {...item} key={id}>
              {' '}
            </Project>
          );
        });
      }}
    </Query>
  );
};


export default Projects;