// @flow
//import octokit from '@octokit/rest';
const octokit = require('@octokit/rest')();

const childProcess = require('child_process');

const gitBranch = childProcess
  .execSync('git symbolic-ref --short HEAD')
  .toString()
  .replace(/\n/g, '');

export const getPr = async () => {
  const res = await octokit.pullRequests.getAll({
    owner: 'kiwicom',
    repo: 'smart-faq',
    base: gitBranch,
  });
  return res.data[0];
};
export const printNum = n => console.log('munumber', n);
export const createComments = async () => {
  const pr = await getPr();
  const res = await octokit.pullRequests.getComments({
    owner: 'kiwicom',
    repo: 'smart-faq',
    number: pr.number,
  });
  console.log('all Comments', res);
};

require('make-runnable');
