#!/usr/bin/env zx

import { getOpenPRBranches } from './get-open-pr.mjs';

// merge

// get all open pull requests

const variables = {
  repoName: 'external-workflow-trigger',
  owner: 'geekeast',
};

const branches = await getOpenPRBranches(variables);

console.log(branches);
