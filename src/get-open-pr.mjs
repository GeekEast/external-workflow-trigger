#!/usr/bin/env zx

import { GraphQLClient, gql } from 'graphql-request';

/**
 * @param {*} variables repo, owner
 * @returns
 */
export const getOpenPRBranches = async (variables) => {
  console.log(
    `query open PR branches for ${variables.owner}/${variables.repo}`
  );

  const endpoint = 'https://api.github.com/graphql';
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: 'Bearer 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',
    },
  });

  const query = gql`
    query Query($repo: String!, $owner: String!) {
      repository(name: $repo, owner: $owner) {
        pullRequests(first: 100, states: OPEN) {
          nodes {
            headRefName
          }
        }
      }
    }
  `;

  const data = await graphQLClient.request(query, variables);
  const arrOfHeadRef = data.repository.pullRequests.nodes;
  return arrOfHeadRef.map((pr) => pr.headRefName);
};
