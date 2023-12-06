const getShapedRepoData = (data) =>
  !data
    ? []
    : data.map((repo) => ({
        id: repo.id,
        title: repo.name,
        description: repo.description,
        stargazersCount: repo.stargazers_count,
        language: repo.language || 'Unknown',
        updatedAt: repo.updated_at,
      }));

const getShapedUserData = (data) =>
  !data
    ? []
    : data.map((user) => ({
        id: user.id,
        avatar: user.avatar_url,
        login: user.login,
        reposUrl: user.repos_url,
        type: user.type,
      }));

const transition = ({ machine, state, event }) => {
  const nextTransitionState = machine.states[state].on?.[event];

  if (!nextTransitionState) {
    return state;
  }

  return nextTransitionState;
};

export { getShapedRepoData, getShapedUserData, transition };
