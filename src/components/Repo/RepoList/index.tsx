import { useGithubReposAPI } from '../../../hooks/useGithubReposAPI';
import RepoItem from '../RepoItem';
import { Stack } from '@mui/system';
import Loading from '../../../components/Loading';
import RepoLabel from '../RepoLabel';

interface RepoListProps {
  reposUrl: string | null;
}

const RepoList = ({ reposUrl }: RepoListProps) => {
  const { data, isLoading, error } = useGithubReposAPI(reposUrl);
  if (error) {
    return <RepoLabel message="Oops! Repository Error" />;
  }
  return (
    <>
      {isLoading ? (
        <Stack direction="column">
          <Loading variant="rectangular" />
          <Loading variant="rectangular" />
        </Stack>
      ) : data.length ? (
        data.map((repo) => <RepoItem key={repo.id} {...repo} />)
      ) : (
        <RepoLabel message="Oops! No repository(s) available" />
      )}
    </>
  );
};

export default RepoList;
