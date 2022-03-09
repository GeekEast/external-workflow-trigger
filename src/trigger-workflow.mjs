#!/usr/bin/env zx

import axios from 'axios';

/**
 * @param {*} config: owner, repo, workflow_file_name
 */
const triggerWorkflow = async (config) => {
  const restClient = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
      authorization: 'Bearer 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',
      accept: 'application/vnd.github.v3+json',
    },
  });

  const owner = config.owner || 'geekeast';
  const repo = config.repo || 'external-workflow-trigger';
  const workflow_id = config.workflow_file_name || 'pipeline.yml';

  const res = await restClient.post(
    `/repos/${owner}/${repo}/actions/workflows/${workflow_id}/dispatches`,
    {
      ref: 'feature/trigger-of-specific-branch',
    }
  );
  if (res.status === 204) {
    console.log(
      `trigger the workflow ${workflow_id} in ${owner}/${repo} successfully`
    );
    return true;
  }
  return false;
};

await triggerWorkflow({});
