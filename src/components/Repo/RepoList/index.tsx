import { useGithubReposAPI } from '../../../hooks/useGithubReposAPI';
import { RepoItem } from '../RepoItem';
import { Stack } from '@mui/system';
import Loading from '../../../components/Loading';
import { Typography } from '@mui/material';
import { colors } from '../../../styles';

interface RepoListProps {
  reposUrl: string | null;
}

const RepoLabel = ({ message }: { message: string }) => (
  <Typography
    variant="body1"
    sx={{ fontStyle: 'italic', color: `${colors.typography.medium}` }}
  >
    {message}
  </Typography>
);

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

export { RepoList };
