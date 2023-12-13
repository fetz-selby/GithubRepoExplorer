'use client';

import {
  PromiseTransitionStates,
  useGithubUsersAPI,
} from '../../hooks/useGithubUsersAPI';
import Search from '../../components/Search';
import UserAccordion from '../../components/UserAccordion';
import UserAccordionLoading from '../../components/UserAccordionSkelecton';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import UserQueryLabel from '../../components/UserQueryLabel';
import Error from '../../components/Error';
import { Box } from '@mui/material';
import EmptyUser from '../../components/EmptyUser';
import AppTitle from '../../components/AppTitle';

const AppComponent = () => {
  const [query, setQuery] = useState<string | null>(null);
  const { data, state: requestState } = useGithubUsersAPI(query);

  const isLoading = requestState === PromiseTransitionStates.LOADING;
  const isCompleteWithData = requestState === PromiseTransitionStates.COMPLETE;
  const isCompleteWithNoData = requestState === PromiseTransitionStates.EMPTY;
  const hasError = requestState === PromiseTransitionStates.ERROR;

  return (
    <Box sx={{ padding: '30px' }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <AppTitle />
        <Search isLoading={isLoading} onQuery={(q) => setQuery(q)} />

        <Grid item xs={12} md={8}>
          {isCompleteWithData && <UserQueryLabel query={query} />}
        </Grid>
        <Grid item xs={12} md={8}>
          {isLoading && <UserAccordionLoading />}
          {isCompleteWithData && <UserAccordion users={data} />}
          {isCompleteWithNoData && <EmptyUser />}
          {hasError && <Error />}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppComponent;
