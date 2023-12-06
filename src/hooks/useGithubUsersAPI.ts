'use client';

import { UserProps } from '../interfaces';
import { getShapedUserData, transition } from '../utils';
import { Octokit } from 'octokit';
import { useEffect, useState, useCallback } from 'react';

interface DataProps {
  data: UserProps[] | [];
  page: number;
  user: string | null;
}

export enum PromiseTransitionStates {
  IDLE = 'idle',
  LOADING = 'loading',
  COMPLETE = 'complete',
  EMPTY = 'empty',
  ERROR = 'error',
}

type Events =
  | 'SEND_REQUEST'
  | 'SUCCESS_WITH_DATA'
  | 'SUCCESS_WITH_NO_DATA'
  | 'ERROR';

const promiseMachine = {
  initial: PromiseTransitionStates.IDLE,
  states: {
    idle: {
      on: {
        SEND_REQUEST: PromiseTransitionStates.LOADING,
      },
    },
    loading: {
      on: {
        SUCCESS_WITH_DATA: PromiseTransitionStates.COMPLETE,
        SUCCESS_WITH_NO_DATA: PromiseTransitionStates.EMPTY,
        ERROR: PromiseTransitionStates.ERROR,
      },
    },
    empty: {
      on: {
        SEND_REQUEST: PromiseTransitionStates.LOADING,
      },
    },
    complete: {
      on: {
        SEND_REQUEST: PromiseTransitionStates.LOADING,
      },
    },
    error: {
      on: {
        SEND_REQUEST: PromiseTransitionStates.LOADING,
      },
    },
  },
};

const PER_PAGE = 5;
const init: DataProps = { data: [], page: 1, user: null };

const useGithubUsersAPI = (queryUser: string | null) => {
  const [data, setData] = useState(init);
  const [state, setState] = useState(PromiseTransitionStates.IDLE);

  const send = (event: Events) => {
    setState((prev) =>
      transition({ machine: promiseMachine, state: prev, event })
    );
  };

  const getUserName = useCallback(async (user: string | null, page: number) => {
    try {
      send('SEND_REQUEST');
      const octokit = new Octokit({ auth: process.env.TOKEN });
      const { data } = await octokit.request(
        `GET /search/users?q=${user}&per_page=${PER_PAGE}&page=${page}`,
        {
          headers: {
            'X-GitHub-Api-Version': process.env.GITHUB_API_VERSION,
          },
        }
      );

      if (data.items.length > 0) {
        send('SUCCESS_WITH_DATA');
      } else {
        send('SUCCESS_WITH_NO_DATA');
      }

      setData((prev) => ({
        ...prev,
        data: getShapedUserData(data.items),
      }));
    } catch (error) {
      send('ERROR');
    }
  }, []);

  useEffect(() => {
    if (queryUser) {
      setData((prev) => ({ ...prev, user: queryUser }));
      getUserName(queryUser, 1);
    }
  }, [queryUser, getUserName]);

  return { data: data.data, state };
};

export { useGithubUsersAPI };
