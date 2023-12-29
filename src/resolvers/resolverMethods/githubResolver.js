/**
 * function to fetch assets
 * @param {Object} apis - api adapters, AssetMgmtAPI is used here
 * @param {Object} filters - filters
 */
async function getRepositories({ githubService }, filters, fieldsToFilter) {
  const { userName } = filters;

  // STEP 1: Call AMS to get all assets tree
  const resp = await githubService.getRepositories(userName);
  return resp;
}

async function repository({ githubService }, filters, fieldsToFilter) {
  const { repoName } = filters;

  // STEP 1: Call AMS to get all assets tree
  const resp = await githubService.getRepository(repoName);
  return resp;
}

module.exports = {
  getRepositories,
  repository,
};
