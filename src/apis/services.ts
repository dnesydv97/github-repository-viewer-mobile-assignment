
export function getRepo(name?: string | number) {
  console.log("username",name)
 
  return {
    method: 'get',
    url: `/users/${name}/repos`,
    config: {
      navigate: ['RepositoryListScreen'],
      successMessage: 'Successfully found the Data',
      showErrorMessage: true,
      store: {
        key: 'getProjectDetails',
        action: 'set',
      },
    },
  };
}

