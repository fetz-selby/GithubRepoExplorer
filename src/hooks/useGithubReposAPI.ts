import { getShapedRepoData } from '../utils';
import useSWR from 'swr';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const useGithubReposAPI = (reposUrl: string | null) => {
  const { data, error, isLoading } = useSWR(reposUrl, fetcher);

  return { data: getShapedRepoData(data), error, isLoading };
};

export { useGithubReposAPI };
